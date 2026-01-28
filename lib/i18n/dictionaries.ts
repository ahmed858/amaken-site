export type Locale = "en" | "ar";

export const locales: Locale[] = ["en", "ar"];
export const defaultLocale: Locale = "en";

const dictionariesObj = {
  en: {
    gate: {
      title: "AMAKEN Companies"
    },
    common: {
      brandName: "Amaken",
      brandSubtitle: "International Group",
      learnMore: "Learn More",
      contactUs: "Contact Us",
      viewAll: "View All",
      readMore: "Read More",
      submit: "Submit",
      loading: "Loading...",
      phone: "920003401",
      email: "info@amaken.com.sa",
      since: "Est. 2010",
      phoneLabel: "Phone",
      emailLabel: "Email",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      or: "Or",
    },
    nav: {
      home: "Home",
      appraisal: "Appraisal",
      consulting: "Consulting",
      realEstate: "Real Estate",
      auctions: "Auctions",
      about: "About",
      news: "News",
      contact: "Contact",
      portal: "Client Portal",
      language: "العربية",
    },
    hero: {
      tagline: "Amaken Group",
      subtitle:
        "A Vision Followed by Success",
      buttons: {
        exploreServices: "Explore Services",
        contactUs: "Contact Us",
      }
    },

    consultingServices: {
      badge: "Our Expertise",
      title: "Consulting Services",
      description:
        "Comprehensive consulting solutions tailored to your business needs and growth objectives.",
      services: {
        restructuring: {
          title: "Restructuring",
          description:
            "Organizational and financial restructuring to optimize performance and ensure sustainable growth.",
        },
        feasibility: {
          title: "Feasibility Studies",
          description:
            "Comprehensive project feasibility analysis to support investment decisions and secure financing.",
        },
        market: {
          title: "Market Studies",
          description:
            "In-depth market research and analysis to identify opportunities and understand competitive landscapes.",
        },
        hbu: {
          title: "Highest & Best Use",
          description:
            "Strategic analysis to determine the optimal use of land and properties for maximum value.",
        },
        administrative: {
          title: "Administrative Consulting",
          description:
            "Management consulting to improve operational efficiency and organizational effectiveness.",
        },
        strategic: {
          title: "Strategic Planning",
          description:
            "Long-term strategic planning to align business objectives with market opportunities.",
        },
      },
    },
    highlightedServices: {
      title: "Why Choose Amaken?",
      subtitle: "Comprehensive solutions tailored to your success",
      services: {
        s1: {
          title: "Market Your Property with Amaken",
          description: "Maximize your property's visibility with our strategic marketing campaigns, reaching the right buyers efficiently.",
          cta: "Start Marketing",
        },
        s2: {
          title: "Participate in Our Auctions",
          description: "Access exclusive investment opportunities through our transparent and professional auction platforms.",
          cta: "View Auctions",
        },
        s3: {
          title: "Value Your Property in 4 Hours",
          description: "Get accurate, professional property valuations delivered with speed and precision for urgent decision making.",
          cta: "Get Valuation",
        },
        s4: {
          title: "Make Decisions with Confidence",
          description: "Leverage our professional market studies and feasibility analyzes to minimize risk and maximize returns.",
          cta: "Request Study",
        },
      },
    },
    services: {
      title: "Our Services",
      subtitle: "Three pillars of excellence serving your business needs",
      appraisal: {
        title: "Amaken Appraisal",
        description:
          "Professional valuation services for real estate, facilities, machinery, equipment, and vehicle damage assessment.",
        cta: "Request Appraisal",
      },
      consulting: {
        title: "Amaken Consulting",
        description:
          "Strategic management consulting, restructuring, feasibility studies, and comprehensive market analysis.",
        cta: "Request Consultation",
      },
      realEstate: {
        title: "Real Estate Services",
        description:
          "Complete property solutions including marketing, facility management, development support, and auctions.",

        projects: {
          badge: "Portfolio",
          title: "Managed Projects",
          description:
            "A selection of properties under our professional management across Saudi Arabia.",
          items: {
            alMalqa: {
              title: "Al Malqa Business Park",
              type: "Commercial",
              location: "Riyadh",
              size: "50,000 sqm",
            },
            corniche: {
              title: "Corniche Residential Tower",
              type: "Residential",
              location: "Jeddah",
              size: "120 Units",
            },
            eastern: {
              title: "Eastern Province Retail Center",
              type: "Retail",
              location: "Dammam",
              size: "25,000 sqm",
            },
          },
        },


        cta: "Request Service"

      },
      reMarketing: {
        title: "RE Marketing",
        description:
          "Strategic real estate marketing and digital exposure for premium properties.",
        cta: "Marketing Solutions",
      },
      propertyManagement: {
        title: "Property Management",
        description:
          "Professional management of residential and commercial facilities.",
        cta: "Manage Property",
      },
      reValuation: {
        title: "RE Valuation",
        description:
          "Certified real estate valuation for investments and financing.",
        cta: "Request Valuation",
      },
    },
    stats: {
      years: "Years of Excellence",
      clients: "Satisfied Clients",
      projects: "Projects Completed",
      coverage: "Cities Covered",
    },
    cta: {
      title: "Ready to Get Started?",
      description:
        "Contact our team today to discuss your appraisal, consulting, or real estate needs. We're here to help.",
    },
    auctions: {
      title: "Upcoming Auctions",
      subtitle: "Browse and register for our upcoming auction events",
      previewTitle: "Upcoming Auctions",
      previewSubtitle: "Discover exclusive opportunities through our auction platform",
      startingPrice: "Starting Price",
      viewDetails: "View Details",
      types: {
        online: "Online",
        onsite: "Onsite",
        hybrid: "Hybrid",
      },
      status: {
        all: "All",
        upcoming: "Upcoming",
        live: "Live",
      },
      contact: {
        title: "Send Us a Message",
        subtitle:
          "Fill out the form below and our team will get back to you as soon as possible.",
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email Address",
        phone: "Phone Number",
        department: "Department",
        message: "Message",
        send: "Send Message",
        success: "Message Sent Successfully",
        successDetail:
          "Thank you for contacting us. Our team will review your inquiry and get back to you within 24 hours.",
        another: "Send Another Message",
        headquarters: "Headquarters",
        address: "Address",
        poBox: "P.O. Box",
      },
      newsPreview: {
        title: "Latest News",
        subtitle: "Stay updated with our latest insights and company news",
      },
      servicesSlider: {
        title: "Our Core Expertise",
        subtitle:
          "Specialized real estate solutions tailored to the Saudi market dynamics.",
      },
      clients: {
        title: "Trusted by Industry Leaders",
      },
    },



    consultingPage: {
      hero: {
        badge: "Strategic Advisory",
        title: "Consulting",
        description:
          "Strategic management consulting, restructuring solutions, feasibility studies, and comprehensive market analysis to drive your business forward.",
        points: {
          planning: "Strategic Planning",
          growth: "Growth Advisory",
        },

        secondaryCta: "Feasibility Studies",
        stats: {
          projects: "Projects Delivered",
          satisfaction: "Client Satisfaction",
          industries: "Industries Served",
          consultants: "Expert Consultants",
        },
      },
      caseStudies: {
        badge: "Success Stories",
        title: "Case Studies",
        viewAll: "View All Cases",
        items: {
          retail: {
            title: "Retail Chain Restructuring",
            industry: "Retail",
            result: "30% cost reduction",
            description:
              "Helped a major Saudi retail chain restructure operations, resulting in significant cost savings and improved profitability.",
          },
          industrial: {
            title: "Industrial Complex Feasibility",
            industry: "Manufacturing",
            result: "SAR 500M project approved",
            description:
              "Conducted comprehensive feasibility study for a new industrial complex, securing project financing from multiple banks.",
          },
          hotel: {
            title: "Hotel Development Analysis",
            industry: "Hospitality",
            result: "15% ROI improvement",
            description:
              "Market study and highest & best use analysis for a prime location, optimizing the development program for maximum returns.",
          },
        },
      },
      cta: {
        title: "Ready to Transform Your Business?",
        description:
          "Schedule a consultation with our experts to discuss your challenges and explore strategic solutions.",
        benefits: {
          free: "Free Initial Consultation",
          flexible: "Flexible Scheduling",
        },
        button: "Schedule Consultation",
      },
      process: {
        badge: "How We Work",
        title: "Our Consulting Process",
        description:
          "A proven methodology that delivers results through structured analysis and collaborative execution.",
        steps: {
          s1: {
            title: "Discovery",
            description:
              "We begin by understanding your business, challenges, and objectives through in-depth analysis.",
          },
          s2: {
            title: "Analysis",
            description:
              "Our experts conduct comprehensive research and data analysis to identify key insights.",
          },
          s3: {
            title: "Strategy",
            description:
              "We develop tailored strategies and actionable recommendations based on our findings.",
          },
          s4: {
            title: "Implementation",
            description:
              "We support you through implementation with hands-on guidance and progress monitoring.",
          },
        },
      },
    },
    contactPage: {
      hero: {
        title: "Contact Us",
        description:
          "Get in touch with our team. We're here to help with your appraisal, consulting, and real estate needs.",
        stats: {
          phone: "Phone",
          email: "Email",
          hours: "Working Hours",
          hoursValue: "Sun - Thu: 8:00 AM - 5:00 PM",
        },
      },
    },
    newsPage: {
      hero: {
        badge: "Latest Updates",
        title: "News & Events",
        description:
          "Stay updated with the latest news, insights, and events from Amaken International Group.",
      },
    },
    auctionsPage: {
      hero: {
        badge: "Hybrid Auctions",
        title: "Auctions Hub",
        description:
          "Discover exclusive auction opportunities for real estate, equipment, and vehicles. Participate online or onsite at our professionally managed auctions.",
        stats: {
          events: "Upcoming Events",
          locations: "Multiple Locations",
        },
      },
    },

    about: {
      "about-hero": {
        badge: "Established 2010",
        title: "Our Story",
        description:
          "From a vision to a leading group serving the Kingdom's development. Amaken International Group has been at the forefront of professional appraisal, consulting, and real estate services since 2010.",
      },
      "about-founder": {
        quote:
          "Our vision was simple: to establish a trusted institution that serves the Kingdom's development with the highest standards of professionalism and integrity.",
        name: "Khalid bin Abdulkarim Al-Jasser",
        role: "Founder & Chairman",
      },
      "about-values": {
        badge: "Who We Are",
        title: "Our Core Values",
        description:
          "The principles that guide everything we do at Amaken International Group.",
        integrity: {
          title: "Integrity",
          desc: "We uphold the highest ethical standards in all our dealings and assessments.",
        },
        excellence: {
          title: "Excellence",
          desc: "We strive for excellence in every project, delivering quality that exceeds expectations.",
        },
        clientFocus: {
          title: "Client Focus",
          desc: "We put our clients' needs at the center of everything we do.",
        },
        precision: {
          title: "Precision",
          desc: "We deliver accurate and reliable results through rigorous analysis.",
        },
        innovation: {
          title: "Innovation",
          desc: "We embrace new technologies and methodologies to provide better solutions.",
        },
        commitment: {
          title: "Commitment",
          desc: "We are committed to delivering results on time and with the highest quality.",
        },
      },
    },
    "real-estate": {
      "real-estate-hero": {
        badge: "Complete Property Solutions",
        title: "Services",
        description:
          "Comprehensive real estate solutions including property marketing, facility management, development support, and exclusive auctions.",
        features: {
          management: "Property Management",
          marketing: "Marketing Services",
        },
        cta: "Get Started",
        secondaryCta: "View Auctions",
        stats: {
          managed: "Properties Managed",
          area: "Sqm Under Management",
          auctions: "Successful Auctions",
          development: "Development Projects",
        },
      },
      "real-estate-projects": {
        badge: "Portfolio",
        title: "Managed Projects",
        description:
          "A selection of properties under our professional management across Saudi Arabia.",
        items: {
          alMalqa: {
            title: "Al Malqa Business Park",
            type: "Commercial",
            location: "Riyadh",
            size: "50,000 sqm",
          },
          corniche: {
            title: "Corniche Residential Tower",
            type: "Residential",
            location: "Jeddah",
            size: "120 Units",
          },
          eastern: {
            title: "Eastern Province Retail Center",
            type: "Retail",
            location: "Dammam",
            size: "25,000 sqm",
          },
        },
      },
      "real-estate-cta": {
        title: "Partner with Us for Your Real Estate Needs",
        description:
          "Whether you are looking to sell, lease, or manage your property, our experienced team is ready to help you achieve your goals.",
        button: "Talk to Us",
        quickContact: "Quick Contact",
      },
    },

    realEstateServices: {
      badge: "What We Offer",
      title: "Our Services",
      description:
        "Full-spectrum real estate services tailored to property owners, investors, and developers.",
      services: {
        marketing: {
          title: "Property Marketing",
          description:
            "Strategic marketing campaigns to maximize property exposure and attract qualified buyers or tenants.",
          features: {
            f1: "Digital Marketing",
            f2: "Professional Photography",
            f3: "Market Positioning",
          },
        },
        management: {
          title: "Property Management",
          description:
            "Comprehensive management services for residential, commercial, and mixed-use properties.",
          features: {
            f1: "Tenant Relations",
            f2: "Maintenance Coordination",
            f3: "Financial Reporting",
          },
        },
        facility: {
          title: "Facility Management",
          description:
            "Professional facility management ensuring optimal building operations and tenant satisfaction.",
          features: {
            f1: "Operations Management",
            f2: "Vendor Management",
            f3: "Compliance Monitoring",
          },
        },
        development: {
          title: "Development Support",
          description:
            "End-to-end support for real estate development projects from planning to completion.",
          features: {
            f1: "Project Planning",
            f2: "Contractor Coordination",
            f3: "Quality Assurance",
          },
        },
        auctions: {
          title: "Property Auctions",
          description:
            "Professional auction services for real estate assets, including online and onsite formats.",
          features: {
            f1: "Hybrid Auctions",
            f2: "Marketing Support",
            f3: "Legal Compliance",
          },
        },
        leasing: {
          title: "Leasing Services",
          description:
            "Expert leasing services to find the right tenants and maximize occupancy rates.",
          features: {
            f1: "Tenant Screening",
            f2: "Lease Negotiation",
            f3: "Market Analysis",
          },
        },
      },
    },
    footer: {
      description:
        "Amaken International Group is a leading Saudi company providing professional appraisal, consulting, and real estate services since 2010.",
      quickLinks: "Quick Links",
      services: "Services",
      contact: "Contact",
      headquarters: "Headquarters",
      address: "Exit 14 â€“ Al Rabwah, Riyadh, Saudi Arabia",
      rights: "All rights reserved.",
    },

    appraisalServices: {
      badge: "Our Capabilities",
      title: "Valuation Services",
      description:
        "Comprehensive appraisal solutions across all asset classes, delivered with precision and professionalism.",
      services: {
        realEstate: {
          title: "Real Estate Valuation",
          description:
            "Comprehensive property valuations for residential, commercial, and industrial real estate assets.",
          features: {
            f1: "Market Value Assessment",
            f2: "Investment Analysis",
            f3: "Mortgage Valuations",
          },
        },
        facilities: {
          title: "Facilities Valuation",
          description:
            "Expert assessment of industrial facilities, warehouses, and specialized buildings.",
          features: {
            f1: "Plant & Equipment",
            f2: "Industrial Complexes",
            f3: "Special Purpose Assets",
          },
        },
        machinery: {
          title: "Machinery & Equipment",
          description:
            "Accurate valuation of machinery, equipment, and movable assets for various purposes.",
          features: {
            f1: "Manufacturing Equipment",
            f2: "Heavy Machinery",
            f3: "Technology Assets",
          },
        },
        vehicle: {
          title: "Vehicle Damage Assessment",
          description:
            "Professional assessment of vehicle damage for insurance and legal purposes.",
          features: {
            f1: "Accident Assessment",
            f2: "Insurance Claims",
            f3: "Total Loss Evaluation",
          },
        },

        residential: {
          title: "Residential Appraisal",
          description:
            "Detailed residential property valuations including villas, apartments, and residential complexes.",
          features: {
            f1: "Villa Valuations",
            f2: "Apartment Complexes",
            f3: "Land Assessment",
          },
        },
        commercial: {
          title: "Commercial Appraisal",
          description:
            "Professional valuation for commercial properties, partial and full commercial buildings, and malls.",
          features: {
            f1: "Office Buildings",
            f2: "Retail Centers",
            f3: "Showrooms",
          },
        },
        underConstruction: {
          title: "Projects Under Construction",
          description:
            "Specialized valuation for projects under development, monitoring progress and value creation steps.",
          features: {
            f1: "Progress Monitoring",
            f2: "Cost to Complete",
            f3: "Future Value",
          },
        },
        dataAndInfo: {
          title: "Real Estate Database & Information",
          description:
            "Comprehensive real estate data and market information to conduct accurate studies and valuations.",
          features: {
            f1: "Market Data",
            f2: "Transaction History",
            f3: "Trend Analysis",
          },
        },
        institutional: {
          title: "Institutional Assets",
          description:
            "Specialized valuations for government and institutional properties.",
          features: {
            f1: "Public Infrastructure",
            f2: "Educational Facilities",
            f3: "Healthcare Assets",
          },
        },
      },
      ctaHelper: {
        title: "Need an appraisal or consulting service that suits your project?",
        whatsapp: "Get appraisal via WhatsApp",
        viewAll: "View all services",
      },
    },
    studyProcess: {
      badge: "Consulting Segment",
      title: "Our Study Process",
      subtitle:
        "We offer flexible appraisal study timelines to match your business urgency and project requirements.",
      normal: {
        title: "Normal Service",
        timeframe: "5-7 Business Days",
        description:
          "Our standard comprehensive appraisal study following all international standards and local regulations.",
        feature1: "Full Market Analysis",
        feature2: "On-site Inspection",
        feature3: "Comparison & Cost Approach",
        feature4: "Official Regulatory Review",
      },
      urgent: {
        title: "Urgent Service",
        timeframe: "2-3 Business Days",
        description:
          "Accelerated appraisal for time-sensitive transactions without compromising on quality or accuracy.",
        feature1: "Priority Processing",
        feature2: "Rapid Inspection",
        feature3: "Digital Report Delivery",
        feature4: "Dedicated Project Lead",
      },
      express: {
        title: "24-Hour Service",
        timeframe: "24 Hours Delivery",
        description:
          "Premium express service for critical decisions that require immediate professional valuation.",
        feature1: "Immediate Inspection",
        feature2: "Round-the-clock Team",
        feature3: "Express Verification",
        feature4: "Premium Support",
      },
    },
    appraisalPage: {
      hero: {
        badge: "Certified & Accredited",
        title: "Appraisal",
        description:
          "Professional valuation services for real estate, facilities, machinery, equipment, and vehicle damage assessment. Trusted by leading banks and corporations across Saudi Arabia.",
        badges: {
          taqeem: "TAQEEM Certified",
          rics: "RICS Compliant",
          ivs: "IVS Standards",
        },
        cta: "Request Appraisal",
        secondaryCta: "Valuation Methods",
        stats: {
          appraisers: "Certified Appraisers",
          reports: "Reports Delivered",
          banks: "Bank Partners",
          years: "Years Experience",
        },
      },
    },
    methodsPage: {
      hero: {
        badge: "Professional Standards",
        title: "Valuation Methods",
        description:
          "Our appraisals are conducted using internationally recognized methodologies, ensuring accuracy and reliability for all stakeholders.",
      },
      content: {
        title: "Three Approaches to Value",
        description:
          "Each valuation method provides a unique perspective. We select and weight approaches based on property type and data availability.",
        ui: {
          whenToUse: "When to Use",
          process: "Valuation Process",
          example: "Practical Example",
        },
        methods: {
          cost: {
            title: "Cost Approach",
            subtitle: "Replacement or Reproduction Cost",
            description:
              "The Cost Approach estimates value by calculating the cost to replace or reproduce the asset, minus depreciation. This method is particularly useful for specialized properties and new constructions.",
            whenToUse: {
              i1: "New or recently constructed properties",
              i2: "Specialized or unique assets with no market comparables",
              i3: "Insurance valuations",
              i4: "Assessment of physical deterioration",
            },
            process: {
              s1: "Estimate land value separately",
              s2: "Calculate replacement/reproduction cost",
              s3: "Deduct physical, functional, and economic depreciation",
              s4: "Add land value to depreciated improvement cost",
            },
            example:
              "For a newly built warehouse, we calculate the current cost to construct an identical building ($5M), subtract 10% depreciation ($500K), and add land value ($2M), arriving at a total value of $6.5M.",
          },
          market: {
            title: "Market Approach",
            subtitle: "Sales Comparison Method",
            description:
              "The Market Approach determines value by comparing the subject property to similar properties that have recently sold. Adjustments are made for differences in characteristics.",
            whenToUse: {
              i1: "Residential properties with active markets",
              i2: "Commercial properties with comparable sales",
              i3: "Land valuations",
              i4: "Properties where market data is available",
            },
            process: {
              s1: "Research recent comparable sales",
              s2: "Analyze and verify transaction data",
              s3: "Make adjustments for differences",
              s4: "Reconcile adjusted values for final opinion",
            },
            example:
              "Comparing a villa to three recent sales in the same neighborhood, we adjust for size (+5%), age (-3%), and amenities (+2%), resulting in an indicated value range that supports our conclusion.",
          },
          income: {
            title: "Income Approach",
            subtitle: "Capitalization & DCF Methods",
            description:
              "The Income Approach values property based on its ability to generate income. This method converts anticipated future benefits into a present value indication.",
            whenToUse: {
              i1: "Income-producing commercial properties",
              i2: "Investment analysis",
              i3: "Properties held for rental income",
              i4: "Business valuations",
            },
            process: {
              s1: "Estimate potential gross income",
              s2: "Deduct vacancy and collection losses",
              s3: "Subtract operating expenses",
              s4: "Apply capitalization rate or discount cash flows",
            },
            example:
              "An office building generating SAR 2M annually with a market cap rate of 8% would indicate a value of SAR 25M (2M ÷ 0.08 = 25M).",
          },
        },
      },
      faq: {
        badge: "FAQ",
        title: "Common Questions",
        subtitle:
          "Have questions about our valuation process? Find answers to frequently asked questions below.",
        cta: "Still have questions? Contact us",
        questions: {
          q1: {
            question: "Which valuation method is most accurate?",
            answer:
              "No single method is universally 'most accurate.' The appropriate method depends on the property type, purpose of valuation, and available data. Our appraisers typically use multiple approaches and reconcile the results to arrive at a well-supported value conclusion.",
          },
          q2: {
            question: "How long does a typical appraisal take?",
            answer:
              "Standard residential appraisals are typically completed within 3-5 business days. Commercial and complex properties may require 1-2 weeks depending on the scope and data availability. Rush services are available for urgent needs.",
          },
          q3: {
            question: "Are your appraisals accepted by banks?",
            answer:
              "Yes, our appraisals are accepted by all major banks in Saudi Arabia. We are TAQEEM certified and comply with all regulatory requirements. We have established relationships with over 15 financial institutions.",
          },
          q4: {
            question: "What information do I need to provide?",
            answer:
              "At minimum, we need the property address, deed copy, and purpose of valuation. For commercial properties, additional items like rent rolls, operating statements, and lease agreements may be required.",
          },
          q5: {
            question: "Can you value properties outside major cities?",
            answer:
              "Yes, we provide valuation services across all 13 regions of Saudi Arabia. Our network of certified appraisers ensures nationwide coverage for all property types.",
          },
        },
      },
    },
    portal: {
      login: {
        title: "Client Portal",
        subtitle: "Log in to manage your projects and appraisals",
        email: "Email Address",
        password: "Password",
        signIn: "Sign In",
        forgotPassword: "Forgot password?",
        noAccount: "Don't have an account?",
        backToHome: "Back to Home",
        showPassword: "Show password",
        hidePassword: "Hide password",
      },
      register: {
        title: "Create Account",
        subtitle: "Join Amaken International Group Client Portal",
        firstName: "First Name",
        lastName: "Last Name",
        email: "Email Address",
        password: "Password",
        confirmPassword: "Confirm Password",
        phone: "Phone Number",
        company: "Company Name",
        interest: "What are you interested in?",
        register: "Register",
        haveAccount: "Already have an account?",
        signIn: "Sign In",
        passwordMismatch: "Passwords do not match",
        interestOptions: {
          valuation: "Property Valuation",
          consulting: "Consulting",
          marketing: "Real Estate Marketing",
          management: "Property Management",
        }
      }
    },
    realEstateListing: {
      hero: {
        title: "Find Your Dream Property",
        subtitle: "Browse our exclusive selection of properties for sale and rent.",
      },
      filters: {
        all: "All",
        sale: "For Sale",
        rent: "For Rent",
        type: "Property Type",
        apartment: "Apartment",
        villa: "Villa",
        building: "Building",
        land: "Land",
        search: "Search...",
        marketing_direct: "Direct Marketing"
      },
      card: {
        sar: "SAR",
        area: "sqm",
        viewDetails: "View Details",
        project: "Project",
      },
      details: {
        title: "Property Information",
        description: "Description",
        address: "Address",
        advantages: "Advantages",
        propertyType: "Property Type",
        offerType: "Offer Type",
        refNumber: "Reference Number",
        status: "Construction Status",
        furnishing: "Furnishing",
        addedDate: "Added Date",
        truCheck: "TruCheck",
        ready: "Ready",
        furnished: "Furnished",
        notFurnished: "Unfurnished",
        bedrooms: "Bedrooms",
        bathrooms: "Bathrooms",
        features: {
          balcony: "Balcony or Terrace",
          ac: "Air Conditioning",
          electricity: "Independent Electricity Meter",
          roads: "Near Main Roads",
          water: "Water",
          sanitation: "Sanitation"
        }
      }
    },
    clients: {
      title: "Our Clients",
    },
  },
  ar: {

    gate: {
      title: "مجموعة شركات أماكن"
    },
    common: {
      brandName: "أماكن",
      brandSubtitle: "المجموعة الدولية",
      learnMore: "اعرف المزيد",
      contactUs: "تواصل معنا",
      viewAll: "عرض المزيد",
      readMore: "اقرأ المزيد",
      submit: "إرسال",
      loading: "جارٍ التحميل...",
      phone: "920003401",
      or: "أو",
      email: "info@amaken.com.sa",
      since: "تأسست عام 2010",
      phoneLabel: "الهاتف",
      emailLabel: "البريد الإلكتروني",
      privacy: "سياسة الخصوصية",
      terms: "شروط الاستخدام",
    },

    nav: {
      home: "الرئيسية",
      appraisal: "التقييم",
      consulting: "الاستشارات",
      realEstate: "العقارات",
      auctions: "المزادات",
      about: "من نحن",
      news: "الأخبار",
      contact: "اتصل بنا",
      portal: "بوابة العملاء",
      language: "English",
    },

    hero: {
      tagline: "مجموعة أماكن",
      subtitle:
        "رؤية يتبعها نجاح",

      buttons: {
        exploreServices: "خدماتنا",
        contactUs: "تواصل معنا",
      }
    },

    consultingServices: {
      badge: "خبراتنا",
      title: "الخدمات الاستشارية",
      description:
        "حلول استشارية شاملة ومصممة خصيصًا لتلبية احتياجات أعمالك وأهداف النمو الخاصة بك.",
      services: {
        restructuring: {
          title: "إعادة الهيكلة",
          description:
            "إعادة هيكلة تنظيمية ومالية تهدف إلى تحسين الأداء وضمان نمو مستدام.",
        },
        feasibility: {
          title: "دراسات الجدوى",
          description:
            "تحليل شامل لجدوى المشاريع لدعم قرارات الاستثمار والمساعدة في تأمين التمويل.",
        },
        market: {
          title: "دراسات السوق",
          description:
            "أبحاث وتحليلات سوقية متعمقة لتحديد الفرص وفهم المشهد التنافسي.",
        },
        hbu: {
          title: "أفضل وأعلى استخدام",
          description:
            "تحليل استراتيجي لتحديد الاستخدام الأمثل للأراضي والعقارات بما يحقق أعلى قيمة ممكنة.",
        },
        administrative: {
          title: "الاستشارات الإدارية",
          description:
            "استشارات إدارية لتحسين الكفاءة التشغيلية ورفع فعالية الهيكل التنظيمي.",
        },
        strategic: {
          title: "التخطيط الاستراتيجي",
          description:
            "تخطيط استراتيجي طويل المدى لمواءمة أهداف الأعمال مع فرص السوق.",
        },
      },
    },

    highlightedServices: {
      title: "لماذا تختار أماكن؟",
      subtitle: "حلول شاملة مصممة لنجاحك",
      services: {
        s1: {
          title: "سوق عقارك مع مجموعة أماكن",
          description: "ضاعف فرص ظهور عقارك من خلال حملاتنا التسويقية الاستراتيجية للوصول إلى المشترين المناسبين بكفاءة.",
          cta: "ابدأ التسويق",
        },
        s2: {
          title: "شارك في مزاداتنا",
          description: "اكتشف فرصاً استثمارية حصرية من خلال منصات المزادات الاحترافية والشفافة لدينا.",
          cta: "تصفح المزادات",
        },
        s3: {
          title: "قيم عقارك خلال 4 ساعات",
          description: "احصل على تقييم عقاري دقيق واحترافي بسرعة ودقة عالية لاتخاذ قراراتك العاجلة.",
          cta: "اطلب التقييم",
        },
        s4: {
          title: "خذ قرارك وانت مطمن",
          description: "نقدم لك دراسات للسوق باحترافية لتقليل المخاطر وتعظيم العوائد الاستثمارية.",
          cta: "اطلب دراسة",
        },
      },
    },

    services: {
      title: "خدماتنا",
      subtitle: "ثلاثة محاور للتميّز تخدم أعمالكم",
      appraisal: {
        title: "أماكن للتقييم",
        description:
          "خدمات تقييم احترافية للعقارات والمنشآت والمعدات والآلات وتقدير أضرار المركبات.",
        cta: "طلب تقييم",
      },
      consulting: {
        title: "أماكن للاستشارات",
        description:
          "استشارات إدارية استراتيجية، إعادة هيكلة، دراسات جدوى، وتحليل شامل للأسواق.",
        cta: "طلب استشارة",
      },
      realEstate: {
        title: "الخدمات العقارية",
        description:
          "حلول عقارية متكاملة تشمل التسويق، إدارة المرافق، دعم التطوير، والمزادات.",

        projects: {
          badge: "أعمالنا",
          title: "مشاريع تحت الإدارة",
          description:
            "مجموعة مختارة من العقارات التي نديرها باحترافية في مختلف مناطق المملكة.",
          items: {
            alMalqa: {
              title: "مجمع الملقا للأعمال",
              type: "تجاري",
              location: "الرياض",
              size: "50,000 م²",
            },
            corniche: {
              title: "برج الكورنيش السكني",
              type: "سكني",
              location: "جدة",
              size: "120 وحدة",
            },
            eastern: {
              title: "مركز تجزئة المنطقة الشرقية",
              type: "تجزئة",
              location: "الدمام",
              size: "25,000 م²",
            },
          },
          cta: "اطلب الخدمة",
        },

        cta: {
          title: "شراكة معنا لتلبية احتياجاتك العقارية",
          description:
            "سواء كنت تبحث عن بيع أو تأجير أو إدارة عقارك، فريقنا جاهز لمساعدتك في تحقيق أهدافك.",
          button: "تواصل معنا",
          quickContact: "تواصل سريع",
        },
      },

      reMarketing: {
        title: "التسويق العقاري",
        description:
          "استراتيجيات تسويق عقاري احترافية وحضور رقمي مميز للعقارات المميزة.",
        cta: "حلول التسويق",
      },

      propertyManagement: {
        title: "إدارة الأملاك",
        description: "إدارة احترافية للمجمعات السكنية والتجارية.",
        cta: "إدارة العقار",
      },

      reValuation: {
        title: "التقييم العقاري",
        description: "تقييم عقاري معتمد لأغراض الاستثمار والتمويل.",
        cta: "طلب تقييم",
      },
    },

    stats: {
      years: "سنوات من التميّز",
      clients: "عملاء راضون",
      projects: "مشاريع منجزة",
      coverage: "مدن مخدومة",
    },

    cta: {
      title: "جاهز للبدء؟",
      description:
        "تواصل مع فريقنا اليوم لمناقشة احتياجاتك في التقييم أو الاستشارات أو الخدمات العقارية.",
    },

    auctions: {
      title: "المزادات القادمة",
      subtitle: "تصفح وسجّل في فعاليات المزادات القادمة",
      previewTitle: "مزادات قادمة",
      previewSubtitle: "اكتشف فرصاً حصرية من خلال منصة المزادات الخاصة بنا",
      startingPrice: "السعر الابتدائي",
      viewDetails: "عرض التفاصيل",
      types: {
        online: "إلكتروني",
        onsite: "حضوري",
        hybrid: "هجين",
      },
      status: {
        all: "الكل",
        upcoming: "قادم",
        live: "مباشر",
      },
    },

    contact: {
      title: "أرسل لنا رسالة",
      subtitle: "املأ النموذج وسيتواصل معك فريقنا في أقرب وقت ممكن.",
      firstName: "الاسم الأول",
      lastName: "اسم العائلة",
      email: "البريد الإلكتروني",
      phone: "رقم الهاتف",
      department: "القسم",
      message: "الرسالة",
      send: "إرسال الرسالة",
      success: "تم إرسال الرسالة بنجاح",
      successDetail:
        "شكرًا لتواصلك معنا، سيقوم فريقنا بمراجعة طلبك والرد خلال 24 ساعة.",
      another: "إرسال رسالة أخرى",
      headquarters: "المقر الرئيسي",
      address: "العنوان",
      poBox: "صندوق بريد",
    },
    consultingPage: {
      hero: {
        badge: "الاستشارات الاستراتيجية",
        title: "الاستشارات",
        description:
          "استشارات إدارية استراتيجية، حلول إعادة الهيكلة، دراسات الجدوى، وتحليل شامل للسوق لدفع أعمالك نحو النمو.",
        points: {
          planning: "التخطيط الاستراتيجي",
          growth: "استشارات النمو",
        },

        secondaryCta: "دراسات الجدوى",
        stats: {
          projects: "المشاريع المنجزة",
          satisfaction: "رضا العملاء",
          industries: "القطاعات المخدومة",
          consultants: "مستشارون خبراء",
        },
      },

      caseStudies: {
        badge: "قصص النجاح",
        title: "دراسات الحالة",
        viewAll: "عرض جميع الحالات",
        items: {
          retail: {
            title: "إعادة هيكلة سلسلة متاجر تجزئة",
            industry: "قطاع التجزئة",
            result: "خفض التكاليف بنسبة 30%",
            description:
              "مساعدة إحدى سلاسل التجزئة الكبرى في المملكة العربية السعودية على إعادة هيكلة العمليات، مما أدى إلى توفير كبير في التكاليف وتحسين الربحية.",
          },
          industrial: {
            title: "دراسة جدوى مجمع صناعي",
            industry: "الصناعة",
            result: "الموافقة على مشروع بقيمة 500 مليون ريال",
            description:
              "تنفيذ دراسة جدوى شاملة لمجمع صناعي جديد، مما ساهم في تأمين تمويل المشروع من عدة بنوك.",
          },
          hotel: {
            title: "تحليل تطوير فندق",
            industry: "الضيافة",
            result: "تحسين العائد على الاستثمار بنسبة 15%",
            description:
              "إجراء دراسة سوق وتحليل أعلى وأفضل استخدام لموقع مميز، مع تحسين برنامج التطوير لتحقيق أقصى العوائد.",
          },
        },
      },

      cta: {
        title: "هل أنت مستعد لتحويل أعمالك؟",
        description:
          "احجز جلسة استشارية مع خبرائنا لمناقشة تحدياتك واستكشاف الحلول الاستراتيجية المناسبة.",
        benefits: {
          free: "استشارة أولية مجانية",
          flexible: "مواعيد مرنة",
        },
        button: "حجز استشارة",
      },

      process: {
        badge: "آلية عملنا",
        title: "منهجية الاستشارات لدينا",
        description:
          "منهجية مجرّبة تحقق النتائج من خلال تحليل منظم وتنفيذ تعاوني.",
        steps: {
          s1: {
            title: "الاكتشاف",
            description:
              "نبدأ بفهم أعمالك وتحدياتك وأهدافك من خلال تحليل معمّق.",
          },
          s2: {
            title: "التحليل",
            description:
              "يقوم خبراؤنا بإجراء أبحاث شاملة وتحليل البيانات لاستخلاص أهم الرؤى.",
          },
          s3: {
            title: "الاستراتيجية",
            description:
              "نطوّر استراتيجيات مخصصة وتوصيات قابلة للتنفيذ بناءً على النتائج.",
          },
          s4: {
            title: "التنفيذ",
            description:
              "ندعمك خلال مرحلة التنفيذ بإشراف عملي ومتابعة مستمرة للتقدم.",
          },
        },
      },
    },

    footer: {
      description:
        "مجموعة أماكن الدولية شركة سعودية رائدة في خدمات التقييم والاستشارات والخدمات العقارية منذ عام 2010.",
      quickLinks: "روابط سريعة",
      services: "الخدمات",
      contact: "التواصل",
      headquarters: "المقر الرئيسي",
      address: "مخرج 14 – الربوة، الرياض، المملكة العربية السعودية",
      rights: "جميع الحقوق محفوظة.",
    },
    about: {
      "about-hero": {
        badge: "تأسست عام 2010",
        title: "قصتنا",
        description:
          "من رؤية إلى مجموعة رائدة تخدم تنمية المملكة. كانت مجموعة أماكن الدولية في طليعة خدمات التقييم والاستشارات والخدمات العقارية المهنية منذ عام 2010.",
      },
      "about-founder": {
        quote:
          "كانت رؤيتنا بسيطة: إنشاء مؤسسة موثوقة تخدم تنمية المملكة بأعلى معايير المهنية والنزاهة.",
        name: "خالد بن عبد الكريم الجاسر",
        role: "المؤسس ورئيس مجلس الإدارة",
      },
      "about-values": {
        badge: "من نحن",
        title: "قيمنا الجوهرية",
        description:
          "المبادئ التي توجه كل ما نقوم به في مجموعة أماكن الدولية.",
        integrity: {
          title: "النزاهة",
          desc: "نحن نتمسك بأعلى المعايير الأخلاقية في جميع تعاملاتنا وتقييماتنا.",
        },
        excellence: {
          title: "التميز",
          desc: "نحن نسعى جاهدين للتميز في كل مشروع، وتقديم جودة تتجاوز التوقعات.",
        },
        clientFocus: {
          title: "التركيز على العميل",
          desc: "نحن نضع احتياجات عملائنا في قلب كل ما نقوم به.",
        },
        precision: {
          title: "الدقة",
          desc: "نحن نقدم نتائج دقيقة وموثوقة من خلال التحليل الدقيق.",
        },
        innovation: {
          title: "الابتكار",
          desc: "نحن نتبنى التقنيات والمنهجيات الجديدة لتقديم حلول أفضل.",
        },
        commitment: {
          title: "الالتزام",
          desc: "نحن ملتزمون بتقديم النتائج في الوقت المحدد وبأعلى جودة.",
        },
      },
      "about-timeline": {
        badge: "رحلتنا",
        title: "إنجازات منذ 2010",
        milestones: {
          2010: {
            title: "التأسيس",
            desc: "تأسست مجموعة أماكن الدولية في الرياض برؤية لتقديم خدمات مهنية.",
          },
          2012: {
            title: "اعتماد تقييم",
            desc: "الحصول على الاعتماد الرسمي من الهيئة السعودية للمقيمين المعتمدين (تقييم).",
          },
          2014: {
            title: "التوسع الإقليمي",
            desc: "افتتاح فروع في جدة والدمام، لتمتد خدماتنا في جميع أنحاء المملكة.",
          },
          2016: {
            title: "قسم الاستشارات",
            desc: "إطلاق أماكن للاستشارات لتقديم الخدمات الاستشارية الاستراتيجية ودراسات الجدوى.",
          },
          2018: {
            title: "الخدمات العقارية",
            desc: "التوسع في خدمات إدارة الأملاك والتسويق والمزادات.",
          },
          2020: {
            title: "التحول الرقمي",
            desc: "إطلاق منصات رقمية للمزادات عبر الإنترنت وخدمات بوابة العملاء.",
          },
          2024: {
            title: "تغطية شاملة",
            desc: "تحقيق التواجد في جميع مناطق المملكة الـ 13 مع أكثر من 50 محترفاً معتمداً.",
          },
        },
      },
      "real-estate": {
        "real-estate-hero": {
          badge: "حلول عقارية متكاملة",
          title: "الخدمات",
          description:
            "حلول عقارية شاملة تشمل التسويق العقاري، إدارة المرافق، دعم التطوير، والمزادات الحصرية.",
          features: {
            management: "إدارة الأملاك",
            marketing: "خدمات التسويق",
          },
          cta: "ابدأ الآن",
          secondaryCta: "عرض المزادات",
          stats: {
            managed: "عقارات تحت الإدارة",
            area: "متر مربع تحت الإدارة",
            auctions: "مزادات ناجحة",
            development: "مشاريع تطويرية",
          },
        },
        "real-estate-projects": {
          badge: "أعمالنا",
          title: "مشاريع تحت الإدارة",
          description:
            "مجموعة مختارة من العقارات التي نديرها باحترافية في مختلف مناطق المملكة العربية السعودية.",
          items: {
            alMalqa: {
              title: "مجمع الملقا للأعمال",
              type: "تجاري",
              location: "الرياض",
              size: "50,000 م²",
            },
            corniche: {
              title: "برج الكورنيش السكني",
              type: "سكني",
              location: "جدة",
              size: "120 وحدة",
            },
            eastern: {
              title: "مركز تجزئة المنطقة الشرقية",
              type: "تجزئة",
              location: "الدمام",
              size: "25,000 م²",
            },
          },
        },
        "real-estate-cta": {
          title: "شراكة معنا لتلبية احتياجاتك العقارية",
          description:
            "سواء كنت تبحث عن بيع أو تأجير أو إدارة عقارك، فريقنا ذو الخبرة مستعد لمساعدتك في تحقيق أهدافك.",
          button: "تحدث إلينا",
          quickContact: "تواصل سريع",
        },
      },
    },
    appraisalPage: {
      hero: {
        badge: "معتمد ومرخص",
        title: "التقييم",
        description:
          "خدمات تقييم احترافية للعقارات والمرافق والآلات والمعدات وتقييم أضرار المركبات. موثوق به من قبل البنوك والشركات الكبرى في جميع أنحاء المملكة العربية السعودية.",
        badges: {
          taqeem: "معتمد من تقييم",
          rics: "متوافق مع RICS",
          ivs: "معايير IVS",
        },
        cta: "طلب تقييم",
        secondaryCta: "أساليب التقييم",
        stats: {
          appraisers: "مقيم معتمد",
          reports: "تقرير منجز",
          banks: "شركاء بنكيون",
          years: "سنوات خبرة",
        },
      },
    },
    methodsPage: {
      hero: {
        badge: "معايير مهنية",
        title: "أساليب التقييم",
        description:
          "يتم إجراء تقييماتنا باستخدام منهجيات معترف بها دوليًا، مما يضمن الدقة والموثوقية لجميع أصحاب المصلحة.",
      },
      content: {
        title: "ثلاثة مناهج للتقييم",
        description:
          "يوفر كل نوع من أساليب التقييم منظورًا فريدًا. نختار ونرجح الأساليب بناءً على نوع العقار وتوفر البيانات.",
        ui: {
          whenToUse: "متى يستخدم",
          process: "عملية التقييم",
          example: "مثال عملي",
        },
        methods: {
          cost: {
            title: "أسلوب التكلفة",
            subtitle: "تكلفة الاستبدال أو الإنشاء",
            description:
              "يقدر أسلوب التكلفة القيمة عن طريق حساب تكلفة استبدال أو إعادة إنشاء الأصل، مطروحًا منه الإهلاك. هذه الطريقة مفيدة بشكل خاص للعقارات المتخصصة والإنشاءات الجديدة.",
            whenToUse: {
              i1: "العقارات الجديدة أو التي تم إنشاؤها حديثًا",
              i2: "الأصول المتخصصة أو الفريدة التي ليس لها مقارنات سوقية",
              i3: "تقييمات التأمين",
              i4: "تقييم التدهور المادي",
            },
            process: {
              s1: "تقدير قيمة الأرض بشكل منفصل",
              s2: "حساب تكلفة الاستبدال/الإنشاء",
              s3: "خصم الإهلاك المادي والوظيفي والاقتصادي",
              s4: "إضافة قيمة الأرض إلى تكلفة التحسينات بعد الإهلاك",
            },
            example:
              "بالنسبة لمستودع تم بناؤه حديثًا، نقوم بحساب التكلفة الحالية لإنشاء مبنى مماثل (5 مليون)، وطرح 10٪ إهلاك (500 ألف)، وإضافة قيمة الأرض (2 مليون)، لنصل إلى قيمة إجمالية قدرها 6.5 مليون.",
          },
          market: {
            title: "أسلوب السوق",
            subtitle: "طريقة مقارنة المبيعات",
            description:
              "يحدد أسلوب السوق القيمة من خلال مقارنة العقار المعني بعقارات مماثلة تم بيعها مؤخرًا. يتم إجراء تعديلات لاختلافات الخصائص.",
            whenToUse: {
              i1: "العقارات السكنية ذات الأسواق النشطة",
              i2: "العقارات التجارية ذات المبيعات المماثلة",
              i3: "تقييمات الأراضي",
              i4: "العقارات التي تتوفر لها بيانات سوقية",
            },
            process: {
              s1: "البحث عن مبيعات مماثلة حديثة",
              s2: "تحليل والتحقق من بيانات المعاملات",
              s3: "إجراء تعديلات للاختلافات",
              s4: "التوفيق بين القيم المعدلة للرأي النهائي",
            },
            example:
              "بمقارنة فيلا بثلاث مبيعات حديثة في نفس الحي، نقوم بالتعديل للحجم (+5٪)، والعمر (-3٪)، ووسائل الراحة (+2٪)، مما ينتج عنه نطاق قيمة مؤشر يدعم استنتاجنا.",
          },
          income: {
            title: "أسلوب الدخل",
            subtitle: "طرق الرسملة والتدفقات النقدية المخصومة",
            description:
              "يقيم أسلوب الدخل العقار بناءً على قدرته على توليد الدخل. تحول هذه الطريقة الفوائد المستقبلية المتوقعة إلى مؤشر قيمة حالي.",
            whenToUse: {
              i1: "العقارات التجارية المدرة للدخل",
              i2: "تحليل الاستثمار",
              i3: "العقارات المحتفظ بها لدخل الإيجار",
              i4: "تقييمات الأعمال",
            },
            process: {
              s1: "تقدير الدخل الإجمالي المحتمل",
              s2: "خصم خسائر الشواغر والتحصيل",
              s3: "طرح نفقات التشغيل",
              s4: "تطبيق معدل الرسملة أو خصم التدفقات النقدية",
            },
            example:
              "مبنى مكتبي يولد 2 مليون ريال سنويًا بمعدل رسملة سوقي قدره 8٪ يشير إلى قيمة 25 مليون ريال (2 مليون ÷ 0.08 = 25 مليون).",
          },
        },
      },
      faq: {
        badge: "الأسئلة الشائعة",
        title: "أسئلة شائعة",
        subtitle:
          "هل لديك أسئلة حول عملية التقييم لدينا؟ اعثر على إجابات للأسئلة الشائعة أدناه.",
        cta: "لا تزال لديك أسئلة؟ تواصل معنا",
        questions: {
          q1: {
            question: "أي طريقة تقييم هي الأكثر دقة؟",
            answer:
              "لا توجد طريقة واحدة هي \"الأكثر دقة\" عالميًا. تعتمد الطريقة المناسبة على نوع العقار والغرض من التقييم والبيانات المتاحة. يستخدم مقيمونا عادةً عدة أساليب ويوفقون بين النتائج للوصول إلى استنتاج قيمة مدعوم جيدًا.",
          },
          q2: {
            question: "كم يستغرق التقييم النموذجي؟",
            answer:
              "تكتمل التقييمات السكنية القياسية عادةً في غضون 3-5 أيام عمل. قد تتطلب العقارات التجارية والمعقدة 1-2 أسبوعًا اعتمادًا على النطاق وتوفر البيانات. تتوفر خدمات عاجلة للاحتياجات الطارئة.",
          },
          q3: {
            question: "هل تقييماتكم مقبولة لدى البنوك؟",
            answer:
              "نعم، تقييماتنا مقبولة لدى جميع البنوك الكبرى في المملكة العربية السعودية. نحن معتمدون من (تقييم) ونلتزم بجميع المتطلبات التنظيمية. لدينا علاقات راسخة مع أكثر من 15 مؤسسة مالية.",
          },
          q4: {
            question: "ما المعلومات التي أحتاج لتقديمها؟",
            answer:
              "كحد أدنى، نحتاج إلى عنوان العقار، وصورة الصك، والغرض من التقييم. بالنسبة للعقارات التجارية، قد تكون هناك حاجة لعناصر إضافية مثل قوائم الإيجار، وبيانات التشغيل، وعقود الإيجار.",
          },
          q5: {
            question: "هل يمكنكم تقييم عقارات خارج المدن الرئيسية؟",
            answer:
              "نعم، نقدم خدمات التقييم في جميع مناطق المملكة الـ 13. تضمن شبكتنا من المقيمين المعتمدين تغطية وطنية لجميع أنواع العقارات.",
          },
        },
      },
    },
    appraisalServices: {
      badge: "قدراتنا",
      title: "خدمات التقييم",
      description: "حلول تقييم شاملة عبر جميع فئات الأصول، تقدم بدقة واحترافية.",
      services: {
        realEstate: {
          title: "التقييم العقاري",
          description: "تقييمات شاملة للعقارات السكنية والتجارية والصناعية.",
          features: {
            f1: "تقدير القيمة السوقية",
            f2: "تحليل الاستثمار",
            f3: "تقييمات الرهن العقاري",
          },
        },
        facilities: {
          title: "تقييم المرافق",
          description: "تقييم خبير للمرافق الصناعية والمستودعات والمباني المتخصصة.",
          features: {
            f1: "المصانع والمعدات",
            f2: "المجمعات الصناعية",
            f3: "الأصول ذات الغرض الخاص",
          },
        },
        machinery: {
          title: "الآلات والمعدات",
          description: "تقييم دقيق للآلات والمعدات والأصول المنقولة لأغراض مختلفة.",
          features: {
            f1: "معدات التصنيع",
            f2: "المعدات الثقيلة",
            f3: "أصول التكنولوجيا",
          },
        },
        vehicle: {
          title: "تقييم أضرار المركبات",
          description: "تقييم مهني لأضرار المركبات لأغراض التأمين والقانون.",
          features: {
            f1: "تقييم الحوادث",
            f2: "مطالبات التأمين",
            f3: "تقييم الخسارة الكلية",
          },
        },

        residential: {
          title: "التقييم السكني",
          description: "تقييمات عقارية سكنية مفصلة تشمل الفلل والشقق والمجمعات السكنية.",
          features: {
            f1: "تقييمات الفلل",
            f2: "المجمعات السكنية",
            f3: "تقييم الأراضي",
          },
        },
        commercial: {
          title: "التقييم التجاري",
          description: "تقييم احترافي للعقارات التجارية والمباني التجارية الجزئية والكاملة والمراكز التجارية.",
          features: {
            f1: "المباني المكتبية",
            f2: "مراكز التجزئة",
            f3: "المعارض",
          },
        },
        underConstruction: {
          title: "تقييم المشاريع تحت الإنشاء",
          description: "تقييم متخصص للمشاريع قيد التطوير، ومتابعة سير العمل ومراحل خلق القيمة.",
          features: {
            f1: "متابعة التقدم",
            f2: "تكلفة الإكمال",
            f3: "القيمة المستقبلية",
          },
        },
        dataAndInfo: {
          title: "قاعدة البيانات والمعلومات العقارية",
          description: "بيانات عقارية شاملة ومعلومات سوقية لإجراء دراسات وتقييمات دقيقة.",
          features: {
            f1: "بيانات السوق",
            f2: "تاريخ المعاملات",
            f3: "تحليل الاتجاهات",
          },
        },
        institutional: {
          title: "الأصول المؤسسية",
          description: "تقييمات متخصصة للعقارات الحكومية والمؤسسية.",
          features: {
            f1: "البنية التحتية العامة",
            f2: "المرافق التعليمية",
            f3: "الأصول الصحية",
          },
        },
      },
      ctaHelper: {
        title: "تحتاج إلى خدمة تقييم أو استشارة تناسب مشروعك؟",
        whatsapp: "احصل على تقييم عبر واتساب",
        viewAll: "عرض جميع الخدمات",
      },
    },
    studyProcess: {
      badge: "قطاع الاستشارات",
      title: "عملية الدراسة لدينا",
      subtitle: "نقدم جداول زمنية مرنة لدراسات التقييم لتتناسب مع إلحاح عملك ومتطلبات المشروع.",
      normal: {
        title: "الخدمة العادية",
        timeframe: "5-7 أيام عمل",
        description: "دراسة تقييم شاملة قياسية تتبع جميع المعايير الدولية واللوائح المحلية.",
        feature1: "تحليل كامل للسوق",
        feature2: "معاينة ميدانية",
        feature3: "أسلوب المقارنة والتكلفة",
        feature4: "مراجعة تنظيمية رسمية",
      },
      urgent: {
        title: "خدمة عاجلة",
        timeframe: "2-3 أيام عمل",
        description: "تقييم سريع للمعاملات الحساسة للوقت دون المساومة على الجودة أو الدقة.",
        feature1: "أولوية المعالجة",
        feature2: "معاينة سريعة",
        feature3: "تسليم التقرير رقميًا",
        feature4: "مدير مشروع مخصص",
      },
      express: {
        title: "خدمة 24 ساعة",
        timeframe: "تسليم خلال 24 ساعة",
        description: "خدمة سريعة مميزة للقرارات الحاسمة التي تتطلب تقييمًا مهنيًا فوريًا.",
        feature1: "معاينة فورية",
        feature2: "فريق على مدار الساعة",
        feature3: "تحقق سريع",
        feature4: "دعم متميز",
      },
    },
    portal: {
      login: {
        title: "بوابة العملاء",
        subtitle: "سجل الدخول لإدارة مشاريعك وتقييماتك",
        email: "البريد الإلكتروني",
        password: "كلمة المرور",
        signIn: "تسجيل الدخول",
        forgotPassword: "نسيت كلمة المرور؟",
        noAccount: "ليس لديك حساب؟",
        backToHome: "العودة للرئيسية",
        showPassword: "إظهار كلمة المرور",
        hidePassword: "إخفاء كلمة المرور",
      },
      register: {
        title: "إنشاء حساب",
        subtitle: "انضم إلى بوابة عملاء مجموعة أماكن الدولية",
        firstName: "الاسم الأول",
        lastName: "اسم العائلة",
        email: "البريد الإلكتروني",
        password: "كلمة المرور",
        confirmPassword: "تأكيد كلمة المرور",
        phone: "رقم الهاتف",
        company: "اسم الشركة",
        interest: "بماذا أنت مهتم؟",
        register: "تسجيل",
        haveAccount: "لديك حساب بالفعل؟",
        signIn: "تسجيل الدخول",
        passwordMismatch: "كلمات المرور غير متطابقة",
        interestOptions: {
          valuation: "تقييم عقاري",
          consulting: "استشارات",
          marketing: "تسويق عقاري",
          management: "إدارة أملاك",
        }
      }
    },
    realEstateListing: {
      hero: {
        title: "اكتشف عقارك المثالي",
        subtitle: "تصفح مجموعتنا الحصرية من العقارات للبيع والإيجار.",
      },
      filters: {
        all: "الكل",
        sale: "للبيع",
        rent: "للإيجار",
        type: "نوع العقار",
        apartment: "شقة",
        villa: "فيلا",
        building: "عمارة",
        land: "أرض",
        search: "بحث...",
        marketing_direct: "تسويق مباشر"
      },
      card: {
        sar: "ر.س",
        area: "م²",
        viewDetails: "عرض التفاصيل",
        project: "المشروع",
      },
      details: {
        title: "معلومات العقار",
        description: "الوصف",
        address: "العنوان",
        advantages: "المزايا والخدمات",
        propertyType: "نوع العقار",
        offerType: "نوع العرض",
        refNumber: "رقم بيوت المرجعي",
        status: "حالة البناء",
        furnishing: "التأثيث",
        addedDate: "تاريخ الإضافة",
        truCheck: "في TruCheck™",
        ready: "جاهز",
        furnished: "مفروش",
        notFurnished: "غير مفروش",
        bedrooms: "غرف نوم",
        bathrooms: "دورتين مياه",
        features: {
          balcony: "شرفة أو تراس",
          ac: "مكيف",
          electricity: "عداد كهرباء مستقل",
          roads: "قريب من الطرق الرئيسية",
          water: "مياه",
          sanitation: "صرف صحي"
        }
      }
    },
    clients: {
      title: "عملاؤنا المتميزين",
    },
  },
};

export const getDictionary = (locale: Locale) => dictionariesObj[locale as keyof typeof dictionariesObj] as any;

export const getDirection = (locale: Locale) =>
  locale === "ar" ? "rtl" : "ltr";

export type Dictionary = any;
