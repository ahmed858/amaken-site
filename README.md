# Amaken Unified Website | أماكن - النظام الموحد

[English](#english) | [العربية](#arabic)

---

<a name="english"></a>

## 🌐 Project Overview (English)

The official web platform for **Amaken International Group**, built with **Next.js 16** (App Router) and powered by **ERPNext (Frappe)**. This unified portal integrates three core business divisions—Real Estate Group, Appraisal Services, and Consultation—into a single, high-performance experience.

### 🏗️ Technical Architecture

This project follows a modern **Headless CMS** pattern where Next.js serves as the frontend "Head" communicating with an **ERPNext** backend via a secure proxy layer.

- **Frontend**: React 19, Next.js 16, TypeScript 5.9
- **Styling**: Tailwind CSS 4 (utilizing CSS variables for dynamic themes)
- **UI Components**: Radix UI, shadcn/ui base primitives, Framer Motion 12 for micro-animations
- **Bilingual**: custom i18n system supporting Arabic (RTL) and English (LTR)
- **Monitoring**: Datadog Browser Logs & Vercel Analytics

---

### 📂 Folder Analysis

| Directory | Purpose |
|-----------|---------|
| `app/` | **Routes & Controllers**: Contains the application routes, layouts, and internal API proxies. |
| `components/` | **UI Architecture**: Organized by feature (Appraisal, Group, Consultation) and `ui/` for core primitives. |
| `lib/` | **Internal Core**: Business logic, ERPNext API wrappers (`lib/api.ts`), and i18n context logic. |
| `ERPNext docs/`| **Backend Schemas**: JSON definitions of ERPNext DocTypes and customer registration scripts used for integration. |
| `hooks/` | **Custom Lifecycle**: Specialized hooks like `use-countdown` for live auctions and mobile detection. |
| `types/` | **Type Safety**: Centralized domain models (Auction, Project, Unit) ensuring consistency across the app. |
| `public/` | **Static Assets**: Logos, icons, and fonts optimized for the web. |

---

### 🚀 Quick Start

1. **Setup**: `npm install`
2. **Environment**: Configure `.env.local` using `.env.example`.
3. **Run**: `npm run dev`

---

<a name="arabic"></a>

## 🇸🇦 نظرة عامة على المشروع (العربية)

المنصة الرقمية الرسمية لـ **مجموعة أماكن الدولية**، تم تطويرها باستخدام تقنية **Next.js 16** مع ربط كامل بنظام **ERPNext (Frappe)**. يجمع النظام بين ثلاثة قطاعات حيوية: المجموعة العقارية، خدمات التثمين، والاستشارات الإدارية.

### 🏗️ الهندسة التقنية

يعتمد المشروع على نمط الـ **Headless CMS** المتطور، حيث يعمل نظام Next.js كواجهة أمامية تتواصل بشكل آمن مع نظام ERPNext لإدارة البيانات والعمليات.

- **الواجهة الأمامية**: React 19, Next.js 16, TypeScript 5.9
- **التصميم**: Tailwind CSS 4 (دعم كامل للخصائص المنطقية CSS و RTL)
- **المكونات**: Radix UI مع استخدام Framer Motion للتحليقات والرسوم المتحركة التفاعلية.
- **تعدد اللغات**: نظام ترجمة مخصص يدعم العربية والإنجليزية بشكل متكامل.

---

### 📂 تحليل المجلدات

| المجلد | الوظيفة |
|--------|---------|
| `app/` | **المسارات والواجهات**: يحتوي على مسارات الموقع، منطق الصفحات، وبوابات الـ API الداخلية. |
| `components/` | **مكونات الواجهة**: مقسمة حسب قطاعات العمل بالإضافة لمحفظة المكونات الأساسية (UI Kit). |
| `lib/` | **النظام الأساسي**: يحتوي على منطق الربط مع ERPNext، ونظام الترجمة الدولي (i18n). |
| `ERPNext docs/`| **بيانات الخلفية**: تعريفات الـ DocTypes والسكربتات المستخدمة في الربط مع النظام المحاسبي. |
| `hooks/` | **الارتباطات المخصصة**: وظائف خاصة مثل العداد التنازلي للمزادات ونظام التنبيهات. |
| `types/` | **نماذج البيانات**: تعريفات TypeScript لضمان دقة البيانات عبر كافة أجزاء التطبيق. |

---

### 💎 ميزات متقدمة

*   **Appraisal Wizard**: معالج طلبات تثمين ذكي وسلس.
*   **Live Auctions**: نظام مزادات حي مع تحديثات فورية.
*   **Bilingual Experience**: تنقل فوري وكامل بين اللغتين العربية والإنجليزية.
*   **Enterprise Integration**: ربط مباشر وحي مع ERPNext للمبيعات وطلبات العملاء.

---

**Built with Precision by the Amaken Engineering Team.**
**تم التطوير بدقة من قبل الفريق الهندسي لأماكن.**
