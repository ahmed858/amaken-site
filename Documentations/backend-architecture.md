# Amaken Backend Architecture & Engineering Guide

## Table of Contents
1. [System Architecture](#system-architecture)
2. [API Specifications](#api-specifications)
3. [Database Design](#database-design)
4. [Authentication & Authorization](#authentication--authorization)
5. [Real-time Features](#real-time-features)
6. [File Upload & Storage](#file-upload--storage)
7. [Email Service](#email-service)
8. [Caching Strategy](#caching-strategy)
9. [Error Handling](#error-handling)
10. [Monitoring & Logging](#monitoring--logging)

---

## System Architecture

### High-Level Architecture

```mermaid
graph TB
    Client[Next.js Frontend] --> Gateway[API Gateway/Next.js API Routes]
    Gateway --> Auth[Authentication Service]
    Gateway --> Auctions[Auctions Service]
    Gateway --> Content[Content Service]
    Gateway --> Contact[Contact Service]
    
    Auth --> DB[(PostgreSQL Database)]
    Auctions --> DB
    Auctions --> Redis[(Redis Cache)]
    Content --> DB
    Content --> CMS[Headless CMS]
    Contact --> DB
    Contact --> Email[Email Service]
    
    Auctions --> WS[WebSocket Server]
    WS --> Client
    
    DB --> Backup[Backup Service]
    Content --> CDN[CDN/S3]
```

### Technology Stack Recommendation

**Backend Framework Options**:
1. **Next.js API Routes** (Recommended for simplicity)
   - ✅ Same project, easier deployment
   - ✅ Integrated with frontend
   - ❌ Limited for complex business logic

2. **Separate Node.js/Express Server**
   - ✅ Better separation of concerns
   - ✅ Scalable architecture
   - ✅ Can use microservices pattern
   - ❌ More complex deployment

**Recommended Choice**: Start with Next.js API Routes, migrate to microservices if needed.

---

## API Specifications

### 1. Authentication APIs

#### POST `/api/auth/register`
**Purpose**: User registration

**Request Body**:
```typescript
{
  name: string;        // Min 2 chars
  email: string;       // Valid email
  password: string;    // Min 8 chars, 1 upper, 1 lower, 1 number
  phone?: string;      // Optional
  language: "en" | "ar"; // Preferred language
}
```

**Response** (201 Created):
```typescript
{
  user: {
    id: string;
    name: string;
    email: string;
    role: "user" | "admin";
  };
  token: string; // JWT
}
```

**Validation Rules**:
- Email must be unique
- Password: min 8 characters, uppercase, lowercase, number
- Phone: Saudi format validation

---

#### POST `/api/auth/login`
**Purpose**: User login

**Request Body**:
```typescript
{
  email: string;
  password: string;
}
```

**Response** (200 OK):
```typescript
{
  user: {
    id: string;
    name: string;
    email: string;
    role: "user" | "admin";
  };
  token: string;
  refreshToken: string;
}
```

**Error Responses**:
- 401: Invalid credentials
- 429: Too many attempts (rate limiting)

---

#### POST `/api/auth/refresh`
**Purpose**: Refresh access token

**Request Body**:
```typescript
{
  refreshToken: string;
}
```

**Response** (200 OK):
```typescript
{
  token: string;
  refreshToken: string;
}
```

---

#### POST `/api/auth/logout`
**Purpose**: Invalidate tokens

**Headers**: `Authorization: Bearer <token>`

**Response** (204 No Content)

---

### 2. Auctions APIs

#### GET `/api/auctions`
**Purpose**: List all auctions

**Query Parameters**:
```typescript
{
  status?: "upcoming" | "active" | "closed";
  page?: number;        // Default: 1
  limit?: number;       // Default: 10, Max: 50
  sort?: "date" | "title" | "ending_soon";
  lang?: "en" | "ar";
}
```

**Response** (200 OK):
```typescript
{
  auctions: Array<{
    id: string;
    title: string;
    description: string;
    startDate: string; // ISO 8601
    endDate: string;
    currentBid: number | null;
    minimumBid: number;
    status: "upcoming" | "active" | "closed";
    imageUrl: string;
    location: string;
  }>;
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}
```

---

#### GET `/api/auctions/[id]`
**Purpose**: Get auction details

**Path Parameters**:
- `id`: Auction UUID

**Query Parameters**:
```typescript
{
  lang?: "en" | "ar";
}
```

**Response** (200 OK):
```typescript
{
  id: string;
  title: string;
  description: string;
  longDescription: string;
  startDate: string;
  endDate: string;
  currentBid: number | null;
  minimumBid: number;
  bidIncrement: number;
  status: "upcoming" | "active" | "closed";
  images: string[];
  location: {
    address: string;
    city: string;
    coordinates: { lat: number; lng: number; };
  };
  propertyDetails?: {
    size: number; // sqm
    type: string;
    features: string[];
  };
  bids: Array<{
    id: string;
    amount: number;
    timestamp: string;
    bidderName?: string; // Anonymous for privacy
  }>;
  totalBids: number;
  winningBid?: {
    amount: number;
    winner: string; // Only visible to admin
  };
}
```

---

#### POST `/api/auctions/[id]/bid`
**Purpose**: Place a bid

**Headers**: `Authorization: Bearer <token>`

**Path Parameters**:
- `id`: Auction UUID

**Request Body**:
```typescript
{
  amount: number; // Must be >= currentBid + bidIncrement
}
```

**Response** (201 Created):
```typescript
{
  bid: {
    id: string;
    auctionId: string;
    amount: number;
    timestamp: string;
    status: "pending" | "accepted" | "outbid";
  };
  updatedAuction: {
    currentBid: number;
    totalBids: number;
  };
}
```

**Business Rules**:
1. Auction must be "active"
2. Bid must be ≥ currentBid + bidIncrement
3. User must be authenticated
4. User cannot bid on their own auction (if user-submitted auctions exist)
5. Anti-sniping: Extend end time if bid within last 5 minutes

**Error Responses**:
- 400: Invalid bid amount
- 401: Unauthorized
- 403: Auction not active
- 409: Bid too low (someone bid higher)

---

#### GET `/api/auctions/[id]/bids`
**Purpose**: Get bid history

**Headers**: `Authorization: Bearer <token>` (optional for protected details)

**Response** (200 OK):
```typescript
{
  bids: Array<{
    amount: number;
    timestamp: string;
    isYourBid: boolean; // Only if authenticated
  }>;
  yourHighestBid?: number; // Only if authenticated
}
```

---

### 3. News APIs

#### GET `/api/news`
**Purpose**: List news articles

**Query Parameters**:
```typescript
{
  category?: string;
  page?: number;
  limit?: number;
  lang?: "en" | "ar";
}
```

**Response** (200 OK):
```typescript
{
  articles: Array<{
    id: string;
    title: string;
    excerpt: string;
    publishedAt: string;
    author: string;
    category: string;
    imageUrl: string;
    readTime: number; // minutes
  }>;
  pagination: {
    total: number;
    page: number;
    limit: number;
  };
}
```

---

#### GET `/api/news/[id]`
**Purpose**: Get article details

**Response** (200 OK):
```typescript
{
  id: string;
  title: string;
  content: string; // Markdown or HTML
  publishedAt: string;
  updatedAt: string;
  author: {
    name: string;
    avatar?: string;
  };
  category: string;
  tags: string[];
  imageUrl: string;
  relatedArticles: Array<{
    id: string;
    title: string;
    imageUrl: string;
  }>;
}
```

---

### 4. Contact APIs

#### POST `/api/contact`
**Purpose**: Submit contact form

**Request Body**:
```typescript
{
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  department?: "consulting" | "appraisal" | "realestate" | "auctions" | "general";
  language: "en" | "ar";
}
```

**Response** (200 OK):
```typescript
{
  success: true;
  ticketId: string; // For follow-up
  message: string;
}
```

**Backend Actions**:
1. Validate input
2. Save to database
3. Send confirmation email to user
4. Send notification to appropriate department
5. Optional: Create ticket in CRM

**Rate Limiting**: 5 submissions per hour per IP

---

### 5. Content Management APIs

#### GET `/api/content/[section]`
**Purpose**: Get dynamic content for sections

**Path Parameters**:
- `section`: home | about | services | etc.

**Query Parameters**:
```typescript
{
  lang?: "en" | "ar";
}
```

**Response**:
```typescript
{
  section: string;
  content: {
    // Dynamic content based on section
    hero?: {
      title: string;
      subtitle: string;
      ctaText: string;
      backgroundImage: string;
    };
    // ... other section-specific content
  };
}
```

---

## Database Design

### PostgreSQL Schema

```sql
-- Users Table
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    role VARCHAR(20) DEFAULT 'user' CHECK (role IN ('user', 'admin', 'moderator')),
    language VARCHAR(2) DEFAULT 'en' CHECK (language IN ('en', 'ar')),
    email_verified BOOLEAN DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP
);

CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role);

-- Refresh Tokens Table
CREATE TABLE refresh_tokens (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    token VARCHAR(512) UNIQUE NOT NULL,
    expires_at TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    revoked BOOLEAN DEFAULT false
);

CREATE INDEX idx_refresh_tokens_user ON refresh_tokens(user_id);
CREATE INDEX idx_refresh_tokens_token ON refresh_tokens(token);

-- Auctions Table
CREATE TABLE auctions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title_en VARCHAR(255) NOT NULL,
    title_ar VARCHAR(255) NOT NULL,
    description_en TEXT,
    description_ar TEXT,
    long_description_en TEXT,
    long_description_ar TEXT,
    start_date TIMESTAMP NOT NULL,
    end_date TIMESTAMP NOT NULL,
    minimum_bid DECIMAL(15, 2) NOT NULL,
    bid_increment DECIMAL(15, 2) DEFAULT 1000.00,
    current_bid DECIMAL(15, 2),
    status VARCHAR(20) DEFAULT 'upcoming' CHECK (status IN ('upcoming', 'active', 'closed', 'cancelled')),
    location_address VARCHAR(500),
    location_city VARCHAR(100),
    location_lat DECIMAL(10, 8),
    location_lng DECIMAL(11, 8),
    property_size DECIMAL(10, 2), -- sqm
    property_type VARCHAR(50),
    property_features JSONB,
    images JSONB, -- Array of image URLs
    created_by UUID REFERENCES users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_auctions_status ON auctions(status);
CREATE INDEX idx_auctions_dates ON auctions(start_date, end_date);
CREATE INDEX idx_auctions_city ON auctions(location_city);

-- Bids Table
CREATE TABLE bids (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    auction_id UUID REFERENCES auctions(id) ON DELETE CASCADE,
    user_id UUID REFERENCES users(id),
    amount DECIMAL(15, 2) NOT NULL,
    status VARCHAR(20) DEFAULT 'accepted' CHECK (status IN ('pending', 'accepted', 'outbid', 'rejected')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_bids_auction ON bids(auction_id);
CREATE INDEX idx_bids_user ON bids(user_id);
CREATE INDEX idx_bids_amount ON bids(amount DESC);

-- News Articles Table
CREATE TABLE news (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title_en VARCHAR(500) NOT NULL,
    title_ar VARCHAR(500) NOT NULL,
    excerpt_en TEXT,
    excerpt_ar TEXT,
    content_en TEXT NOT NULL,
    content_ar TEXT NOT NULL,
    category VARCHAR(100),
    tags JSONB, -- Array of tags
    author_id UUID REFERENCES users(id),
    author_name VARCHAR(255),
    image_url VARCHAR(500),
    published_at TIMESTAMP,
    status VARCHAR(20) DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
    read_time INT, -- in minutes
    views INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_news_status ON news(status);
CREATE INDEX idx_news_published ON news(published_at DESC);
CREATE INDEX idx_news_category ON news(category);

-- Contact Submissions Table
CREATE TABLE contacts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    subject VARCHAR(500) NOT NULL,
    message TEXT NOT NULL,
    department VARCHAR(50),
    language VARCHAR(2),
    status VARCHAR(20) DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'resolved', 'closed')),
    assigned_to UUID REFERENCES users(id),
    ip_address VARCHAR(45),
    user_agent TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    resolved_at TIMESTAMP
);

CREATE INDEX idx_contacts_status ON contacts(status);
CREATE INDEX idx_contacts_email ON contacts(email);
CREATE INDEX idx_contacts_department ON contacts(department);

-- Content Sections Table (for CMS)
CREATE TABLE content_sections (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    section_key VARCHAR(100) UNIQUE NOT NULL,
    content_en JSONB,
    content_ar JSONB,
    updated_by UUID REFERENCES users(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Audit Log Table
CREATE TABLE audit_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    action VARCHAR(100) NOT NULL,
    entity_type VARCHAR(50),
    entity_id UUID,
    changes JSONB,
    ip_address VARCHAR(45),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX idx_audit_user ON audit_logs(user_id);
CREATE INDEX idx_audit_entity ON audit_logs(entity_type, entity_id);
CREATE INDEX idx_audit_created ON audit_logs(created_at DESC);
```

### Database Triggers

```sql
-- Auto-update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_auctions_updated_at BEFORE UPDATE ON auctions
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_news_updated_at BEFORE UPDATE ON news
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Auto-update auction status based on dates
CREATE OR REPLACE FUNCTION update_auction_status()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.start_date <= CURRENT_TIMESTAMP AND NEW.end_date > CURRENT_TIMESTAMP THEN
        NEW.status = 'active';
    ELSIF NEW.end_date <= CURRENT_TIMESTAMP THEN
        NEW.status = 'closed';
    END IF;
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER check_auction_status BEFORE INSERT OR UPDATE ON auctions
    FOR EACH ROW EXECUTE FUNCTION update_auction_status();
```

---

## Authentication & Authorization

### JWT Implementation

**Token Structure**:
```typescript
// Access Token (15 minutes)
{
  userId: string;
  email: string;
  role: "user" | "admin" | "moderator";
  iat: number;
  exp: number;
}

// Refresh Token (7 days)
{
  userId: string;
  tokenId: string; // References refresh_tokens table
  iat: number;
  exp: number;
}
```

**Security Measures**:
1. **Password Hashing**: bcrypt with salt rounds = 12
2. **Token Signing**: HS256 or RS256
3. **Refresh Token Rotation**: Issue new refresh token on each use
4. **Token Blacklisting**: Store revoked tokens in Redis
5. **Rate Limiting**: Max 5 login attempts per 15 minutes

---

### Middleware Implementation

```typescript
// middleware.ts (Next.js)
import { NextRequest, NextResponse } from 'next/server';
import { verify } from 'jsonwebtoken';

export function middleware(request: NextRequest) {
  const token = request.headers.get('authorization')?.split(' ')[1];
  
  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  try {
    const decoded = verify(token, process.env.JWT_SECRET!);
    // Attach user to request
    return NextResponse.next();
  } catch (error) {
    return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
  }
}

export const config = {
  matcher: ['/api/auctions/:id/bid', '/api/profile/:path*'],
};
```

---

## Real-time Features

### WebSocket Implementation for Auctions

**Technology**: Socket.IO or native WebSockets

**Events**:

```typescript
// Client subscribes to auction
socket.emit('subscribe:auction', { auctionId: 'uuid' });

// Server sends updates
socket.on('bid:placed', (data) => {
  // {
  //   auctionId: string;
  //   currentBid: number;
  //   totalBids: number;
  //   timestamp: string;
  // }
});

socket.on('auction:ending:soon', (data) => {
  // { auctionId: string; secondsRemaining: number; }
});

socket.on('auction:closed', (data) => {
  // { auctionId: string; winningBid: number; }
});
```

**Implementation**:
```typescript
// pages/api/socket.ts (Next.js API Route)
import { Server } from 'socket.io';

export default function handler(req, res) {
  if (res.socket.server.io) {
    res.end();
    return;
  }

  const io = new Server(res.socket.server);
  res.socket.server.io = io;

  io.on('connection', (socket) => {
    socket.on('subscribe:auction', ({ auctionId }) => {
      socket.join(`auction:${auctionId}`);
    });

    socket.on('unsubscribe:auction', ({ auctionId }) => {
      socket.leave(`auction:${auctionId}`);
    });
  });

  res.end();
}
```

---

## File Upload & Storage

### Image Upload API

#### POST `/api/upload/image`

**Request**: FormData with image file

**Validation**:
- Max size: 5MB
- Allowed types: image/jpeg, image/png, image/webp
- Dimensions: Min 800x600, Max 4000x4000

**Process**:
1. Validate file
2. Resize/optimize image
3. Upload to S3/Cloudinary
4. Return URL

**Response**:
```typescript
{
  url: string;
  thumbnail: string;
  width: number;
  height: number;
  size: number;
}
```

### Storage Strategy

**Recommended**: AWS S3 + CloudFront CDN

**Bucket Structure**:
```
amaken-assets/
├── auctions/
│   ├── [auction-id]/
│   │   ├── main.jpg
│   │   ├── gallery/
│   │   └── thumbnails/
├── news/
│   └── [article-id]/
└── uploads/
    └── [user-id]/
```

---

## Email Service

### Email Templates

1. **Welcome Email** (Registration)
2. **Login Notification**
3. **Bid Confirmation**
4. **Outbid Notification**
5. **Auction Won**
6. **Contact Form Confirmation**
7. **News Subscription**

### Implementation

**Service**: SendGrid or AWS SES

```typescript
// lib/email.ts
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function sendBidConfirmation(
  email: string,
  auction: Auction,
  bid: Bid
) {
  const msg = {
    to: email,
    from: 'noreply@amaken.sa',
    templateId: 'd-xxxxx', // SendGrid template
    dynamicTemplateData: {
      auctionTitle: auction.title,
      bidAmount: bid.amount,
      currentBid: auction.currentBid,
    },
  };
  
  await sgMail.send(msg);
}
```

---

## Caching Strategy

### Redis Caching

**Use Cases**:
1. Active auctions list
2. Latest news articles
3. User sessions
4. Rate limiting
5. Token blacklist

**Implementation**:
```typescript
// lib/cache.ts
import Redis from 'ioredis';

const redis = new Redis(process.env.REDIS_URL);

export async function cacheAuctions(auctions: Auction[]) {
  await redis.setex(
    'auctions:active',
    300, // 5 minutes
    JSON.stringify(auctions)
  );
}

export async function getCachedAuctions(): Promise<Auction[] | null> {
  const data = await redis.get('auctions:active');
  return data ? JSON.parse(data) : null;
}
```

**Cache Invalidation**:
- On new bid: Invalidate auction cache
- On new article: Invalidate news cache
- On user update: Invalidate user session

---

## Error Handling

### Error Response Format

```typescript
{
  error: {
    code: string;       // ERROR_CODE
    message: string;    // Human-readable
    details?: any;      // Additional context
    timestamp: string;  // ISO 8601
  }
}
```

### Error Codes

```typescript
enum ErrorCode {
  // Auth
  UNAUTHORIZED = 'UNAUTHORIZED',
  INVALID_CREDENTIALS = 'INVALID_CREDENTIALS',
  TOKEN_EXPIRED = 'TOKEN_EXPIRED',
  
  // Validation
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  INVALID_INPUT = 'INVALID_INPUT',
  
  // Business Logic
  BID_TOO_LOW = 'BID_TOO_LOW',
  AUCTION_NOT_ACTIVE = 'AUCTION_NOT_ACTIVE',
  DUPLICATE_EMAIL = 'DUPLICATE_EMAIL',
  
  // Server
  INTERNAL_ERROR = 'INTERNAL_ERROR',
  DATABASE_ERROR = 'DATABASE_ERROR',
}
```

---

## Monitoring & Logging

### Recommended Tools

1. **Application Monitoring**: Sentry
2. **Performance**: Vercel Analytics / New Relic
3. **Logging**: Winston + CloudWatch
4. **Database**: pgAdmin / DataDog

### Logging Implementation

```typescript
// lib/logger.ts
import winston from 'winston';

export const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

// Usage
logger.info('User logged in', { userId, ip });
logger.error('Database error', { error, query });
```

### Metrics to Track

- API response times
- Database query performance
- Active auction count
- Bid rate per minute
- User registration rate
- Error rate per endpoint
- Cache hit/miss ratio

---

## Deployment Architecture

### Production Environment

```
┌─────────────────────────────────────────────┐
│           Vercel/AWS CloudFront             │
│                  (CDN)                      │
└─────────────────┬───────────────────────────┘
                  │
┌─────────────────▼───────────────────────────┐
│          Next.js Application                │
│         (Frontend + API Routes)             │
└─────────────────┬───────────────────────────┘
                  │
        ├─────────┼─────────┐
        ▼         ▼         ▼
    ┌────────┐ ┌────────┐ ┌────────┐
    │  RDS   │ │ Redis  │ │   S3   │
    │ (DB)   │ │(Cache) │ │(Assets)│
    └────────┘ └────────┘ └────────┘
```

### Environment Variables

```env
# Database
DATABASE_URL=postgresql://user:pass@host:5432/amaken

# Redis
REDIS_URL=redis://host:6379

# JWT
JWT_SECRET=your-secret-key
JWT_REFRESH_SECRET=your-refresh-secret

# Email
SENDGRID_API_KEY=SG.xxxxx

# Storage
AWS_S3_BUCKET=amaken-assets
AWS_ACCESS_KEY_ID=xxxxx
AWS_SECRET_ACCESS_KEY=xxxxx
AWS_REGION=us-east-1

# WebSocket
SOCKET_IO_PORT=3001

# External APIs
GOOGLE_MAPS_API_KEY=xxxxx
```

---

## API Testing Guide

### Postman Collection Structure

```
Amaken API Tests/
├── Auth/
│   ├── Register
│   ├── Login
│   ├── Refresh Token
│   └── Logout
├── Auctions/
│   ├── List Auctions
│   ├── Get Auction Details
│   ├── Place Bid
│   └── Get Bid History
├── News/
│   ├── List Articles
│   └── Get Article
└── Contact/
    └── Submit Form
```

### Sample Test Cases

```typescript
// Test: Place valid bid
describe('POST /api/auctions/:id/bid', () => {
  it('should accept valid bid', async () => {
    const response = await api.post('/api/auctions/123/bid')
      .set('Authorization', `Bearer ${token}`)
      .send({ amount: 100000 });
    
    expect(response.status).toBe(201);
    expect(response.body.bid.amount).toBe(100000);
  });
  
  it('should reject low bid', async () => {
    const response = await api.post('/api/auctions/123/bid')
      .set('Authorization', `Bearer ${token}`)
      .send({ amount: 1000 });
    
    expect(response.status).toBe(400);
    expect(response.body.error.code).toBe('BID_TOO_LOW');
  });
});
```

---

## Migration Plan

### Phase 1: Setup (Week 1)
- [ ] Initialize database
- [ ] Setup Redis
- [ ] Configure S3/storage
- [ ] Deploy infrastructure

### Phase 2: Authentication (Week 2)
- [ ] Implement user registration
- [ ] Implement login/logout
- [ ] JWT token system
- [ ] Password reset flow

### Phase 3: Core Features (Week 3-4)
- [ ] Auctions CRUD
- [ ] Bidding system
- [ ] Real-time updates
- [ ] News management

### Phase 4: Supporting Features (Week 5)
- [ ] Contact form
- [ ] Email notifications
- [ ] File uploads
- [ ] Admin dashboard

### Phase 5: Testing & Launch (Week 6)
- [ ] Integration testing
- [ ] Performance testing
- [ ] Security audit
- [ ] Production deployment

---

**This document provides a complete backend architecture foundation. Adjust based on specific business requirements and scale.**
