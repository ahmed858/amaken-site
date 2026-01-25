const fs = require('fs');
const filePath = 'd:/04- amaken/amaken-website/lib/i18n/dictionaries.ts';
const content = fs.readFileSync(filePath, 'utf8');
const lines = content.split(/\r?\n/);

// Define the missing blocks
const enAppraisalServices = `      appraisalServices: {
        badge: "Our Capabilities",
        title: "Valuation Services",
        description: "Comprehensive appraisal solutions across all asset classes, delivered with precision and professionalism.",
        services: {
          realEstate: {
            title: "Real Estate Valuation",
            description: "Comprehensive property valuations for residential, commercial, and industrial real estate assets.",
            features: {
              f1: "Market Value Assessment",
              f2: "Investment Analysis",
              f3: "Mortgage Valuations",
            },
          },
          facilities: {
            title: "Facilities Valuation",
            description: "Expert assessment of industrial facilities, warehouses, and specialized buildings.",
            features: {
              f1: "Plant & Equipment",
              f2: "Industrial Complexes",
              f3: "Special Purpose Assets",
            },
          },
          machinery: {
            title: "Machinery & Equipment",
            description: "Accurate valuation of machinery, equipment, and movable assets for various purposes.",
            features: {
              f1: "Manufacturing Equipment",
              f2: "Heavy Machinery",
              f3: "Technology Assets",
            },
          },
          vehicle: {
            title: "Vehicle Damage Assessment",
            description: "Professional assessment of vehicle damage for insurance and legal purposes.",
            features: {
              f1: "Accident Assessment",
              f2: "Insurance Claims",
              f3: "Total Loss Evaluation",
            },
          },
          residential: {
            title: "Residential Appraisal",
            description: "Detailed residential property valuations for individuals and institutions.",
            features: {
              f1: "Villa Valuations",
              f2: "Apartment Complexes",
              f3: "Land Assessment",
            },
          },
          institutional: {
            title: "Institutional Assets",
            description: "Specialized valuations for government and institutional properties.",
            features: {
              f1: "Public Infrastructure",
              f2: "Educational Facilities",
              f3: "Healthcare Assets",
            },
          },
        },
      },
      studyProcess: {
        badge: "Consulting Segment",
        title: "Our Study Process",
        subtitle: "We offer flexible appraisal study timelines to match your business urgency and project requirements.",
        normal: {
            title: "Normal Service",
            timeframe: "5-7 Business Days",
            description: "Our standard comprehensive appraisal study following all international standards and local regulations.",
            feature1: "Full Market Analysis",
            feature2: "On-site Inspection",
            feature3: "Comparison & Cost Approach",
            feature4: "Official Regulatory Review",
        },
        urgent: {
            title: "Urgent Service",
            timeframe: "2-3 Business Days",
            description: "Accelerated appraisal for time-sensitive transactions without compromising on quality or accuracy.",
            feature1: "Priority Processing",
            feature2: "Rapid Inspection",
            feature3: "Digital Report Delivery",
            feature4: "Dedicated Project Lead",
        },
        express: {
            title: "24-Hour Service",
            timeframe: "24 Hours Delivery",
            description: "Premium express service for critical decisions that require immediate professional valuation.",
            feature1: "Immediate Inspection",
            feature2: "Round-the-clock Team",
            feature3: "Express Verification",
            feature4: "Premium Support",
        },
      },`;

const arAppraisalServices = `    appraisalServices: {
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
            description: "تقييمات عقارية سكنية مفصلة للأفراد والمؤسسات.",
            features: {
              f1: "تقييمات الفلل",
              f2: "المجمعات السكنية",
              f3: "تقييم الأراضي",
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
      },`;

// Find insertion point for EN (before 'ar: {')
const arIndex = lines.findIndex(line => line.trim() === 'ar: {');
if (arIndex > 0) {
    // Check if appraisalServices exists in EN
    let enExists = false;
    for (let i = 0; i < arIndex; i++) {
        if (lines[i].includes("appraisalServices:")) enExists = true;
    }

    if (!enExists) {
        // Insert before the closing brace of EN (which is usually arIndex - 1)
        lines.splice(arIndex - 1, 0, enAppraisalServices);
        console.log("Added EN appraisalServices");
    } else {
        console.log("EN appraisalServices already exists (skipping)");
    }
}

// Find insertion point for AR (end of AR object)
// We know methodsPage is in AR. Find end of methodsPage.
let methodsPageStart = -1;
let methodsPageEnd = -1;
for (let i = arIndex; i < lines.length; i++) {
    if (lines[i].includes('methodsPage: {')) {
        methodsPageStart = i;
        break;
    }
}

if (methodsPageStart > -1) {
    // Find matching brace?
    // Assume it ends before 'portal:' or 'real-estate' or 'clients' or whatever follows.
    // Or just insert it after methodsPageStart + 100? No.
    // Let's count braces? Expensive.
    // Just find the next top-level key in AR or end of AR.
    // AR has `about-timeline`, `real-estate`, `methodsPage`...
    // I entered `methodsPage` last (after `appraisalPage` and `about`).

    // I'll insert it AFTER `methodsPage` block.
    // I'll scan for `    },` at the same indentation level as `methodsPage: {`.
    // methodsPage is 4 spaces.
    for (let i = methodsPageStart + 1; i < lines.length; i++) {
        if (lines[i].startsWith('    },')) {
            // This presumably closes methodsPage (or appraisalPage if strictly sequential).
            // But methodsPage has nested objects (hero, content, methods...).
            // Inspect lines[i+1]. If it is a key like `portal:` it's too far.
            // If it starts with `    key:` it is a sibling.
            // If I find `    },` and next line is `  portal: {` or `  },` ...

            // Let's check indentation.
            // If I see `    },` (4 spaces).
            // And next line is `    portal: {` (4 spaces, if I fixed it) or `  portal: {`.
            // I'll assume it's the end of methodsPage.

            // Actually, the previous script ensures unique keys.
            // So I can just search for the LAST `    },` that closes a sibling.
            // Or simply append to the end of AR object (before `  },` that closes AR).
            // Find line `  },` that closes AR.
            // It's the one before `portal` (if portal is outside) or end of file.
            // In Step 89, I might have `portal` inside `ar`.
            // Let's check where `portal` is.

        }
    }

    // Simplest: Find `methodsPage: {` ... lookup `faq: {` ... lookup closing brace.
    let faqStart = -1;
    for (let i = methodsPageStart; i < lines.length; i++) {
        if (lines[i].includes('faq: {')) {
            faqStart = i;
            break;
        }
    }
    if (faqStart > -1) {
        // Find end of FAQ.
        let faqEnd = -1;
        // Assume faq content indentation is 8 spaces. Closing brace is 6 spaces.
        // FAQ is inside methodsPage (6 spaces? No 4 spaces key, 6 spaces content? No.)
        // methodsPage (4) -> faq (6) -> questions (8).
        for (let i = faqStart + 1; i < lines.length; i++) {
            if (lines[i].startsWith('      },')) { // 6 spaces
                faqEnd = i;
                // matches faq end.
                // methodsPage end should follow (4 spaces).
                if (lines[i + 1] && lines[i + 1].startsWith('    },')) {
                    methodsPageEnd = i + 1;
                    break;
                }
            }
        }
    }

    if (methodsPageEnd > -1) {
        // Insert after methodsPageEnd
        lines.splice(methodsPageEnd + 1, 0, arAppraisalServices);
        console.log("Added AR appraisalServices");
    } else {
        console.log("Could not find end of methodsPage in AR");
    }
}

fs.writeFileSync(filePath, lines.join('\n'));
