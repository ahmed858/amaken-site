"use client";

import React, { useState, useEffect } from "react";
const MODELS = {
  A: {
    area: "268.28 م²",
    image: "/group/ramlia/model-a.png",
    list: [
      "2 غرف نوم ماستر + 2 غرفة",
      "مسطح بناء الفيلا (228 + 40.28)م²",
      "تأسيس مصعد",
    ],
  },
  B: {
    area: "245.53 م²",
    image: "/group/ramlia/model-b.png",
    list: [
      "2 غرف نوم ماستر + 2 غرفة",
      "مسطح بناء الفيلا (199.83 + 45.7)م²",
    ],
  },
  C: {
    area: "371.56 م²",
    image: "/group/ramlia/model-c.png",
    list: [
      "2 غرف نوم ماستر + 2 غرفة",
      "مسطح بناء الفيلا (284.06 + 87.5)م²",
      "تأسيس مصعد",
    ],
  },
  D: {
    area: "314.02 م²",
    image: "/group/ramlia/model-d.png",
    list: [
      "2 غرف نوم ماستر + 2 غرفة",
      "مسطح بناء الفيلا (242.82 + 71.20)م²",
      "تأسيس مصعد",
    ],
  },
  E: {
    area: "255.1 م²",
    image: "/group/ramlia/model-e.png",
    list: [
      "1 غرف نوم ماستر + 2 غرفة",
      "مسطح بناء الفيلا (199.10 + 26)م²",
    ],
  },
};

export default function RamliaPage() {
  const [selectedModel, setSelectedModel] = useState<"A" | "B" | "C" | "D" | "E">("A");
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [phoneError, setPhoneError] = useState("");
  const interiorImages = [
    "/group/ramlia/entry01.png",
    "/group/ramlia/entry03.png",
    "/group/ramlia/entry04.png",
    "/group/ramlia/entry05.png",
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % interiorImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + interiorImages.length) % interiorImages.length);
  useEffect(() => {
    // Scroll Reveal Animation
    function reveal() {
      const reveals = document.querySelectorAll(".reveal");
      const windowHeight = window.innerHeight;
      const elementVisible = 150;
      reveals.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
          el.classList.add("active");
        }
      });
    }

    // Scroll listener for header visibility
    function handleScroll() {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", reveal);
    window.addEventListener("scroll", handleScroll);

    // Initial calls
    reveal();
    handleScroll();

    return () => {
      window.removeEventListener("scroll", reveal);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="ramlia-page-container bg-background text-on-background font-body-md selection:bg-primary/20 selection:text-primary min-h-screen relative" dir="rtl">
      {/* Styles injection to preserve the exact style system */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@700;800&family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@600&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');

        .ramlia-page-container {
          /* Exact Theme Colors from design */
          --secondary-fixed: #e6e2dd;
          --on-primary-container: #fffbff;
          --on-error: #ffffff;
          --surface-container-low: #fff1eb;
          --primary: #97430e;
          --primary-fixed: #ffdbcb;
          --primary-fixed-dim: #ffb692;
          --on-error-container: #93000a;
          --on-surface: #231a15;
          --primary-container: #b75a26;
          --inverse-surface: #392e29;
          --error-container: #ffdad6;
          --error: #ba1a1a;
          --surface-container-high: #f7e4dd;
          --secondary-container: #e6e2dd;
          --surface-variant: #f1dfd7;
          --on-surface-variant: #55433a;
          --on-secondary: #ffffff;
          --on-secondary-fixed-variant: #484743;
          --tertiary-container: #7b7469;
          --secondary-fixed-dim: #c9c6c1;
          --on-primary-fixed: #341100;
          --tertiary: #625b51;
          --inverse-primary: #ffb692;
          --tertiary-fixed-dim: #cfc5b9;
          --surface-dim: #e8d6cf;
          --on-tertiary-container: #fffbff;
          --tertiary-fixed: #ebe1d4;
          --on-tertiary-fixed-variant: #4c463c;
          --on-secondary-container: #666460;
          --on-primary-fixed-variant: #793000;
          --outline-variant: #dcc1b5;
          --outline: #897268;
          --on-tertiary: #ffffff;
          --on-secondary-fixed: #1c1c19;
          --background: #fff8f6;
          --surface-container-highest: #f1dfd7;
          --surface-bright: #fff8f6;
          --inverse-on-surface: #ffede6;
          --on-tertiary-fixed: #1f1b13;
          --on-primary: #ffffff;
          --surface: #fff8f6;
          --surface-container-lowest: #ffffff;
          --surface-container: #fdeae3;
          --secondary: #605e5a;
          --surface-tint: #9b4511;
          --on-background: #231a15;

          /* Spacing overrides */
          --section-gap-desktop: 120px;
          --container-max-width: 1280px;
          --grid-gutter: 24px;
          --base: 8px;
          --section-gap-mobile: 64px;
        }

        /* Material symbols utilities */
        .ramlia-page-container .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
          vertical-align: middle;
          font-family: 'Material Symbols Outlined';
        }

        /* Custom backgrounds & transitions */
        .ramlia-page-container .najdi-pattern {
          background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0l20 20-20 20L0 20z' fill='%2397430e' fill-opacity='0.03'/%3E%3C/svg%3E");
        }
        .ramlia-page-container .glass-nav {
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
        .ramlia-page-container .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease-out;
        }
        .ramlia-page-container .reveal.active {
          opacity: 1;
          transform: translateY(0);
        }

        /* Typography Mapping to guarantee exact sizes & font pairings */
        .ramlia-page-container .font-headline-md {
          font-family: "IBM Plex Sans Arabic", sans-serif;
        }
        .ramlia-page-container .text-headline-md {
          font-size: 32px;
          line-height: 40px;
          font-weight: 700;
        }
        .ramlia-page-container .font-label-sm {
          font-family: "Plus Jakarta Sans", sans-serif;
        }
        .ramlia-page-container .text-label-sm {
          font-size: 14px;
          line-height: 20px;
          font-weight: 600;
        }
        .ramlia-page-container .font-display-lg-mobile {
          font-family: "Bricolage Grotesque", sans-serif;
        }
        .ramlia-page-container .text-display-lg-mobile {
          font-size: 40px;
          line-height: 48px;
          font-weight: 800;
        }
        .ramlia-page-container .font-body-lg {
          font-family: "IBM Plex Sans Arabic", sans-serif;
        }
        .ramlia-page-container .text-body-lg {
          font-size: 18px;
          line-height: 28px;
          font-weight: 400;
        }
        .ramlia-page-container .font-display-lg {
          font-family: "Bricolage Grotesque", sans-serif;
        }
        .ramlia-page-container .text-display-lg {
          font-size: 64px;
          line-height: 72px;
          letter-spacing: -0.02em;
          font-weight: 800;
        }
        .ramlia-page-container .font-body-md {
          font-family: "IBM Plex Sans Arabic", sans-serif;
        }
        .ramlia-page-container .text-body-md {
          font-size: 16px;
          line-height: 24px;
          font-weight: 400;
        }

        /* Apply custom spacing & variables using utilities if needed */
        .ramlia-page-container .py-section-gap-desktop {
          padding-top: var(--section-gap-desktop);
          padding-bottom: var(--section-gap-desktop);
        }
        .ramlia-page-container .max-w-container-max-width {
          max-width: var(--container-max-width);
        }
        .ramlia-page-container .gap-grid-gutter {
          gap: var(--grid-gutter);
        }

        /* Direct color styles for elements where Tailwind v4 variables might be shadowed */
        .ramlia-page-container {
          background-color: var(--background);
          color: var(--on-background);
        }
        .ramlia-page-container header {
          background-color: rgba(255, 248, 246, 0.8);
        }
        .ramlia-page-container header nav div.text-primary {
          color: var(--primary);
        }
        .ramlia-page-container header nav a.text-on-surface-variant:hover {
          color: var(--primary);
        }
        .ramlia-page-container button.bg-primary, .ramlia-page-container a.bg-primary {
          background-color: var(--primary);
          color: var(--on-primary);
        }
        .ramlia-page-container button.bg-primary:hover, .ramlia-page-container a.bg-primary:hover {
          background-color: var(--primary-container);
        }
        .ramlia-page-container .text-primary {
          color: var(--primary) !important;
        }
        .ramlia-page-container .bg-primary {
          background-color: var(--primary) !important;
        }
        .ramlia-page-container .bg-surface-container-low {
          background-color: var(--surface-container-low);
        }
        .ramlia-page-container .bg-surface-container-lowest {
          background-color: var(--surface-container-lowest);
        }
        .ramlia-page-container .border-outline-variant {
          border-color: var(--outline-variant);
        }
        .ramlia-page-container .border-outline-variant\\/20 {
          border-color: rgba(220, 193, 181, 0.2);
        }
        .ramlia-page-container .border-outline-variant\\/30 {
          border-color: rgba(220, 193, 181, 0.3);
        }
        .ramlia-page-container .border-outline-variant\\/10 {
          border-color: rgba(220, 193, 181, 0.1);
        }
        .ramlia-page-container .focus\\:ring-primary:focus {
          --tw-ring-color: var(--primary);
          border-color: var(--primary);
        }
        .ramlia-page-container .focus\\:border-primary:focus {
          border-color: var(--primary);
        }
      ` }} />

      {/* Top Navigation Bar */}
      <header className={`fixed top-0 w-full z-50 glass-nav border-b border-outline-variant/30 transition-all duration-300 ${isScrolled ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-full pointer-events-none invisible"}`}>
        <nav className="flex justify-between items-center px-8 h-20 max-w-container-max-width mx-auto">
          <div className="font-headline-md text-headline-md font-bold text-primary">

            <img
              src="/group/ramlia/brown_logo_without_slug.png"
              alt="رمليّة - مكان نبني فيه أحلامك"
              className="mx-auto w-10 md:w-25 h-auto object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)]"
            />

          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a className="text-on-surface-variant hover:text-primary transition-colors font-label-sm text-label-sm" href="#location">الموقع</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors font-label-sm text-label-sm" href="#masterplan">المخطط</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors font-label-sm text-label-sm" href="#amenities">المميزات</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors font-label-sm text-label-sm" href="#models">النماذج</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors font-label-sm text-label-sm" href="#contact">تواصل معنا</a>
          </div>
          <a href="#contact" className="bg-primary text-on-primary px-6 py-2 rounded-full font-label-sm text-label-sm hover:bg-primary-container active:scale-95 transition-all">
            احجز الآن
          </a>
        </nav>
      </header>
      {/* Amaken Group Logo Badge */}
      <div className="absolute top-6 left-6 z-50  ">
        <img
          src="/amaken-logo_white.png"
          alt="مجموعة أماكن"
          className="w-70  h-auto object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]"
        />
      </div>
      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div
              className="w-full h-full bg-cover bg-center scale-105 "
              style={{
                backgroundImage:
                  "url('/group/ramlia/landing.png')",
              }}
            />
            {/* <div className="absolute inset-0 bg-gradient-to-b from-on-background/5 via-transparent to-on-background/10"></div> */}
          </div>
          <div className="relative z-10 text-center text-white px-6  ">
            <img
              src="/group/ramlia/white_logo.png"
              alt="رمليّة - مكان نبني فيه أحلامك"
              className="mx-auto mb-15 w-72 md:w-1/2 h-250 object-contain drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)]"
            />


          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <span className="material-symbols-outlined text-white text-4xl">keyboard_double_arrow_down</span>
          </div>
        </section>

        {/* About Section */}
        <section className="py-section-gap-desktop px-8 max-w-container-max-width mx-auto  ">

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5 reveal">
              <span className="text-primary font-label-sm tracking-widest block mb-4 uppercase">عن رملية</span>
              <h2 className="font-headline-md text-headline-md mb-6 leading-tight">صياغة جديدة لمفهوم السكن الفاخر</h2>
              <p className="text-on-surface-variant font-body-lg text-body-lg mb-8 leading-relaxed">
                مشروع رمليّة هو ثمرة تعاون بين <span className="font-medium">شركة الإعمار للتطوير</span> و <span className="font-medium">مجموعة هشام بن عبد العزيز الموسى للإستثمار</span>، يهدف إلى خلق بيئة سكنية تجمع بين الخصوصية التامة والجمال المعماري المستوحى من جذورنا.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-surface-container-low rounded-xl border border-outline-variant/20">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    <span className="material-symbols-outlined">home</span>
                  </div>
                  <div>
                    <h4 className="font-bold">سكني</h4>
                    <p className="text-sm opacity-70">بيئة عائلية آمنة وهادئة</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-surface-container-low rounded-xl border border-outline-variant/20">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    <span className="material-symbols-outlined">star</span>
                  </div>
                  <div>
                    <h4 className="font-bold">نوعي</h4>
                    <p className="text-sm opacity-70">تصاميم فريدة وتشطيبات فاخرة</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-surface-container-low rounded-xl border border-outline-variant/20">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    <span className="material-symbols-outlined">diamond</span>
                  </div>
                  <div>
                    <h4 className="font-bold">لا مثيل له</h4>
                    <p className="text-sm opacity-70">تجربة عيش استثنائية بكل تفاصيلها</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-7 grid grid-cols-2 gap-4 reveal">
              <div className="space-y-4 pt-12">
                <div
                  className="h-80 bg-cover bg-center rounded-2xl"
                  style={{
                    backgroundImage:
                      "url('/group/ramlia/05.png')",
                  }}
                />
                <div
                  className="h-64 bg-cover bg-center rounded-2xl"
                  style={{
                    backgroundImage:
                      "url('/group/ramlia/03.png')",
                  }}
                />
              </div>
              <div className="space-y-4">
                <div
                  className="h-64 bg-cover bg-center rounded-2xl"
                  style={{
                    backgroundImage:
                      "url('/group/ramlia/07.png')",
                  }}
                />
                <div
                  className="h-80 bg-cover bg-center rounded-2xl"
                  style={{
                    backgroundImage:
                      "url('/group/ramlia/08.png')",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        {/* <section className="bg-primary text-white py-20">
          <div className="max-w-container-max-width mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div className="reveal">
              <div className="font-display-lg text-5xl mb-2 text-white">١٧,٣٠٢</div>
              <div className="font-label-sm text-sm opacity-80 uppercase tracking-widest text-white">متر مربع مساحة الأرض</div>
            </div>
            <div className="reveal">
              <div className="font-display-lg text-5xl mb-2 text-white">٦</div>
              <div className="font-label-sm text-sm opacity-80 uppercase tracking-widest text-white">مجمعات سكنية</div>
            </div>
            <div className="reveal">
              <div className="font-display-lg text-5xl mb-2 text-white">١٠٨</div>
              <div className="font-label-sm text-sm opacity-80 uppercase tracking-widest text-white">فيلا فاخرة</div>
            </div>
            <div className="reveal">
              <div className="font-display-lg text-5xl mb-2 text-white">٢٠٠-٣٧٠</div>
              <div className="font-label-sm text-sm opacity-80 uppercase tracking-widest text-white">متر مربع المساحات</div>
            </div>
          </div>
        </section> */}

        {/* Location Section */}
        <section className="py-section-gap-desktop bg-surface-container-lowest" id="location">
          <div className="max-w-container-max-width mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 reveal">
              <div className="aspect-square bg-surface-container-high rounded-3xl overflow-hidden shadow-2xl shadow-primary/5 border border-outline-variant/30 relative">
                <div className="absolute inset-0 bg-secondary-fixed/30 flex items-center justify-center">
                  <a href="https://maps.app.goo.gl/48HADyPKiGiKF9Vb9?g_st=iwb" target="_blank"><img
                    className="w-full h-full object-cover   "
                    alt="Riyadh, Abu Bakr Road"
                    src="/group/ramlia/locationphoto.png"
                  />
                  </a>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none"></div>
                </div>

              </div>
            </div>
            <div className="order-1 md:order-2 reveal">
              <span className="text-primary font-label-sm tracking-widest block mb-4">الموقع</span>
              <h2 className="font-headline-md text-headline-md mb-6">في قلب شمال الرياض</h2>
              <p className="text-on-surface-variant font-body-lg mb-10 leading-relaxed">
                يقع المشروع ضمن مجتمع ضاحية
                مشارف هيلز الواقعة على طريق
                ابو بكر الصديق شمال طريق الملك
                سلمان في مدينة الرياض.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary mt-1">shopping_cart</span>
                  <div>
                    <h4 className="font-bold text-lg">مكتبة جرير</h4>
                    <p className="text-sm opacity-70">1 دقائق</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary mt-1">medical_services</span>
                  <div>
                    <h4 className="font-bold text-lg">مستشفى الحبيب</h4>
                    <p className="text-sm opacity-70">1 دقائق</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary mt-1">school</span>
                  <div>
                    <h4 className="font-bold text-lg">مدارس عالمية</h4>
                    <p className="text-sm opacity-70">٥ دقائق</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary mt-1">park</span>
                  <div>
                    <h4 className="font-bold text-lg">حدائق عامة</h4>
                    <p className="text-sm opacity-70">دقيقتين</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Masterplan Section */}
        <section className="py-section-gap-desktop max-w-container-max-width mx-auto px-8" id="masterplan">
          <div className="text-center mb-16 reveal">
            <h2 className="font-headline-md text-headline-md mb-4">مخطط المشروع</h2>
            <p className="text-on-surface-variant max-w-2xl mx-auto">توزيع مدروس للمباني يضمن الخصوصية التامة لكل وحدة سكنية مع توفير ممرات مشاة واسعة ومساحات خضراء موزعة بعناية.</p>
          </div>
          <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl shadow-on-surface/5 border border-outline-variant/30 reveal">
            <div
              className="w-full aspect-[21/9] bg-contain bg-no-repeat bg-center"
              style={{
                backgroundImage:
                  "url('/group/ramlia/plan-photo.png')"
              }}
            />
          </div>
        </section>

        {/* Amenities Section */}
        <section className="py-section-gap-desktop bg-surface-container-low" id="amenities">
          <div className="max-w-container-max-width mx-auto px-8 grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-8 reveal">
              <h2 className="font-headline-md text-headline-md mb-12">مميزات المشروع</h2>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="p-6 bg-white rounded-2xl hover:shadow-lg transition-shadow border border-outline-variant/10">
                  <span className="material-symbols-outlined text-primary text-4xl mb-4">gate</span>
                  <h4 className="font-bold">بوابات إلكترونية</h4>
                </div>
                <div className="p-6 bg-white rounded-2xl hover:shadow-lg transition-shadow border border-outline-variant/10">
                  <span className="material-symbols-outlined text-primary text-4xl mb-4">nature_people</span>
                  <h4 className="font-bold">لاند اسكيب خارجي</h4>
                </div>
                <div className="p-6 bg-white rounded-2xl hover:shadow-lg transition-shadow border border-outline-variant/10">
                  <span className="material-symbols-outlined text-primary text-4xl mb-4">foundation</span>
                  <h4 className="font-bold">واجهات حجرية</h4>
                </div>
                <div className="p-6 bg-white rounded-2xl hover:shadow-lg transition-shadow border border-outline-variant/10">
                  <span className="material-symbols-outlined text-primary text-4xl mb-4">elevator</span>
                  <h4 className="font-bold">تأسيس مصعد</h4>
                </div>
                <div className="p-6 bg-white rounded-2xl hover:shadow-lg transition-shadow border border-outline-variant/10">
                  <span className="material-symbols-outlined text-primary text-4xl mb-4">security</span>
                  <h4 className="font-bold">أنظمة سلامة</h4>
                </div>
                <div className="p-6 bg-white rounded-2xl hover:shadow-lg transition-shadow border border-outline-variant/10">
                  <span className="material-symbols-outlined text-primary text-4xl mb-4">videocam</span>
                  <h4 className="font-bold">كاميرات مراقبة</h4>
                </div>
                <div className="p-6 bg-white rounded-2xl hover:shadow-lg transition-shadow border border-outline-variant/10">
                  <span className="material-symbols-outlined text-primary text-4xl mb-4">smartphone</span>
                  <h4 className="font-bold">أنظمة ذكية</h4>
                </div>
                <div className="p-6 bg-white rounded-2xl hover:shadow-lg transition-shadow border border-outline-variant/10">
                  <span className="material-symbols-outlined text-primary text-4xl mb-4">local_parking</span>
                  <h4 className="font-bold">مواقف خاصة</h4>
                </div>
                <div className="p-6 bg-white rounded-2xl hover:shadow-lg transition-shadow border border-outline-variant/10">
                  <span className="material-symbols-outlined text-primary text-4xl mb-4">energy_savings_leaf</span>
                  <h4 className="font-bold">تكييف مخفي</h4>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 reveal">
              <div
                className="w-full h-full min-h-[500px] rounded-[2rem] bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('/group/ramlia/02.png')",
                }}
              />
            </div>
          </div>
        </section>

        {/* Villa Models Section */}
        <section className="py-section-gap-desktop max-w-container-max-width mx-auto px-8" id="models">
          <div className="text-center mb-16 reveal">
            <h2 className="font-headline-md text-headline-md mb-4">نماذج الفلل</h2>
            <p className="text-on-surface-variant">اختر المساحة التي تناسب تطلعات عائلتك</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-12 reveal">
            {(["A", "B", "C", "D", "E"] as const).map((modelId) => (
              <button
                key={modelId}
                className={`model-tab px-8 py-3 rounded-full border transition-all ${selectedModel === modelId
                  ? "bg-primary text-white border-primary"
                  : "border-outline-variant text-on-surface-variant hover:border-primary hover:text-primary"
                  }`}
                onClick={() => setSelectedModel(modelId)}
              >
                نموذج {modelId}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-surface-container-lowest p-8 md:p-12 rounded-[2rem] border border-outline-variant/20 reveal" id="model-content">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-6xl font-display-lg text-primary">{selectedModel}</span>
                <div className="h-10 w-[2px] bg-outline-variant"></div>
                <div>
                  <p className="font-bold text-2xl">{MODELS[selectedModel].area}</p>
                  <p className="text-sm opacity-60">مساحة البناء الإجمالية</p>
                </div>
              </div>
              <ul className="space-y-4 mb-10 text-on-surface-variant">
                {MODELS[selectedModel].list.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">check_circle</span> {item}
                  </li>
                ))}
              </ul>
              {/* <button className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-primary-container transition-colors">تحميل المخطط التفصيلي</button> */}
            </div>
            <div className="relative group">
              <div
                key={selectedModel}
                className="h-[280px] md:h-[450px] bg-contain bg-no-repeat bg-center rounded-2xl transition-opacity duration-300 bg-white"
                style={{
                  backgroundImage: `url('${MODELS[selectedModel].image}')`,
                }}
              />
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
            </div>
          </div>
        </section>

        {/* Interior Showcase Section */}
        <section className="py-section-gap-desktop bg-on-background text-white">
          <div className="max-w-container-max-width mx-auto px-8">
            <div className="flex justify-between items-end mb-12 reveal">
              <div>
                <h2 className="font-headline-md text-headline-md mb-4 text-primary">الفلل من الداخــل</h2>
                {/* <p className="opacity-60 max-w-xl text-zinc-400">تصاميم داخلية تعكس الرقي بأسلوب "مينيماليزم" دافئ يستخدم أرقى الخامات الطبيعية.</p> */}
              </div>
              {/* <button className="hidden md:flex items-center gap-2 text-primary hover:underline">
                مشاهدة المعرض الكامل <span className="material-symbols-outlined">arrow_back</span>
              </button> */}
            </div>
            <div className="relative reveal">
              <div className="overflow-hidden rounded-3xl">
                <div
                  className="flex transition-transform "
                  style={{ transform: `translateX(${currentSlide * 100}%)` }}
                >
                  {interiorImages.map((src, idx) => (
                    <div key={idx} className="w-full flex-shrink-0">
                      <img
                        src={src}
                        alt="تفاصيل داخلية"
                        className="w-full h-[70vh] md:h-[600px] object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Nav Arrows */}
              <button
                onClick={prevSlide}
                aria-label="السابق"
                className="absolute top-1/2 -translate-y-1/2 right-4 w-12 h-12 rounded-full bg-white/90 text-primary flex items-center justify-center hover:bg-white transition-colors shadow-lg"
              >
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <button
                onClick={nextSlide}
                aria-label="التالي"
                className="absolute top-1/2 -translate-y-1/2 left-4 w-12 h-12 rounded-full bg-white/90 text-primary flex items-center justify-center hover:bg-white transition-colors shadow-lg"
              >
                <span className="material-symbols-outlined">arrow_back</span>
              </button>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-6">
                {interiorImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`الانتقال للصورة ${idx + 1}`}
                    className={`h-2 rounded-full transition-all ${idx === currentSlide ? "w-8 bg-primary" : "w-2 bg-white/40"
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Warranties Section */}
        {/* <section className="py-section-gap-desktop max-w-container-max-width mx-auto px-8 najdi-pattern">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <h2 className="font-headline-md text-headline-md mb-8">ضمانات تمتد لسنوات</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="text-primary mt-1">
                    <span className="material-symbols-outlined text-4xl">verified</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">١٠ سنوات هيكل إنشائي</h4>
                    <p className="text-on-surface-variant text-sm">ضمان شامل على الهيكل الإنشائي للمبنى لراحة بال تامة.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-primary mt-1">
                    <span className="material-symbols-outlined text-4xl">shield</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">١٠ سنوات عزل حراري ومائي</h4>
                    <p className="text-on-surface-variant text-sm">استخدام أفضل مواد العزل المعتمدة عالمياً.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-primary mt-1">
                    <span className="material-symbols-outlined text-4xl">electric_bolt</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">سنتان تمديدات كهربائية</h4>
                    <p className="text-on-surface-variant text-sm">ضمان على جميع التمديدات والمفاتيح الكهربائية.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-primary mt-1">
                    <span className="material-symbols-outlined text-4xl">plumbing</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">سنتان تمديدات صحية</h4>
                    <p className="text-on-surface-variant text-sm">ضمان على تمديدات المياه والصرف والمضخات.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="reveal">
              <div
                className="w-full aspect-[3/4] bg-cover bg-center rounded-[2rem] shadow-2xl"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBZZoQoH3ecLUgCGO09AlolQlDdmojOZ7Xq-1hm2qyXIoQY3-qBrHjCx_OTt2wvjSArMMFtdZyCR4kII0cBdtIMypbXKkr2b_3IJATgNs-An1D9bvgrST1CorGiyizfOcleeOqUJRwhw9mbQeW0szvE6pRLb8QWMrXiXrtPPv0MoG_p3_U3bVrgyL690IO4VN35SLxIWNlaBFWiTEyWbu6PXUiFNFLFuSweXlhd2ClCx7_jtsCbw_KxqtL4On231FCgaY91tqUxPJ0')",
                }}
              />
            </div>
          </div>
        </section> */}

        {/* Partners Section */}
        {/* <section className="py-20 border-y border-outline-variant/30">
          <div className="max-w-container-max-width mx-auto px-8 text-center">
            <p className="text-primary font-label-sm mb-10 tracking-widest">شركاء النجاح في التوريد</p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale">
              <span className="font-bold text-xl">الخزف السعودي</span>
              <span className="font-bold text-xl">حديد الراجحي</span>
              <span className="font-bold text-xl">GROHE</span>
              <span className="font-bold text-xl">شركة الفنار</span>
              <span className="font-bold text-xl">جوتن</span>
              <span className="font-bold text-xl">أسلاك السعودية</span>
            </div>
          </div>
        </section> */}

        {/* Lead Capture Section */}
        <section className="py-section-gap-desktop bg-primary relative overflow-hidden" id="contact">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -ml-48 -mb-48"></div>
          <div className="max-w-4xl mx-auto px-8 relative z-10 text-center text-white">
            <h2 className="font-headline-md text-headline-md mb-6 text-white">هل أنت جاهز لتجربة رمليّة؟</h2>
            <p className="opacity-80 mb-12 font-body-lg text-white">اترك بياناتك وسيقوم مستشارنا العقاري بالتواصل معك لتحديد موعد معاينة خاصة.</p>
            <form
              className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl text-on-surface text-right grid grid-cols-1 md:grid-cols-2 gap-6 reveal"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const phoneInput = form.elements.namedItem("phone") as HTMLInputElement;
                const phoneValue = phoneInput.value.trim();
                const saudiPhoneRegex = /^05\d{8}$/;

                if (!saudiPhoneRegex.test(phoneValue)) {
                  setPhoneError("رقم الجوال غير صحيح، لازم يبدأ بـ 05 ويتكون من 10 أرقام");
                  phoneInput.focus();
                  return;
                }

                setPhoneError("");
                alert("تم إرسال طلبك بنجاح!");
              }}
            >
              <div className="space-y-2">
                <label className="font-bold text-sm text-primary text-on-surface">الاسم بالكامل</label>
                <input className="w-full px-6 py-4 text-primary rounded-xl border border-outline-variant focus:ring-primary focus:border-primary bg-white text-on-surface" placeholder="مثال: محمد محسن" type="text" name="name" required />
              </div>
              <div className="space-y-2">
                <label className="font-bold text-sm text-primary text-on-surface">رقم الجوال</label>
                <input
                  className={`w-full px-6 py-4 text-primary rounded-xl border ${phoneError ? "border-error" : "border-outline-variant"} focus:ring-primary focus:border-primary bg-white text-on-surface`}
                  placeholder="05xxxxxxxx"
                  type="tel"
                  name="phone"
                  inputMode="numeric"
                  pattern="05[0-9]{8}"
                  maxLength={10}
                  title="رقم جوال سعودي يبدأ بـ 05 ومكون من 10 أرقام"
                  required
                  onChange={(e) => {
                    const digitsOnly = e.target.value.replace(/\D/g, "").slice(0, 10);
                    e.target.value = digitsOnly;
                    if (phoneError) setPhoneError("");
                  }}
                />
                {phoneError && (
                  <p className="text-error text-sm mt-1">{phoneError}</p>
                )}
              </div>

              <div className="md:col-span-2 space-y-2">
                <label className="font-bold text-sm text-primary text-on-surface  ">النموذج المهتم به</label>
                <select className="w-full px-6 py-4 text-primary rounded-xl border border-outline-variant focus:ring-primary focus:border-primary bg-white text-on-surface">
                  <option>نموذج A</option>
                  <option>نموذج B</option>
                  <option>نموذج C</option>
                  <option>نموذج D</option>
                  <option>نموذج E</option>
                </select>
              </div>
              <button className="md:col-span-2 bg-primary text-white py-5 rounded-xl font-bold hover:bg-primary-container transition-all text-xl" type="submit">إرسال الطلب</button>
              <div className="md:col-span-2 flex items-center justify-center gap-6 mt-6 pt-6 border-t border-outline-variant/30">
                <a className="flex items-center gap-2 text-primary font-bold" href="tel:920003401">
                  <span className="material-symbols-outlined">call</span> 920003401
                </a>
                <div className="w-px h-6 bg-outline-variant"></div>
                <a className="flex items-center gap-2 text-primary font-bold" href="https://maps.app.goo.gl/zaMdBAXjUxp4n7st9" target="_blank" rel="noopener noreferrer">
                  <span className="text-2xl material-symbols-outlined">location_on</span>

                  <div className="block">
                    <div className="text-xl">مجموعة أماكن الدولية </div>

                    <div className="text-sm">الرياض, الريان, الدائري الشرقي الفرعي، مخرج 13</div>
                  </div>
                </a>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      {/* <footer className="bg-surface-container-low dark:bg-surface-container-lowest w-full rounded-t-xl border-t border-outline-variant/20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-grid-gutter px-8 py-section-gap-desktop max-w-container-max-width mx-auto">
          <div className="space-y-6">
            <div className="font-headline-md text-headline-md font-bold text-primary">رمليّة</div>
            <p className="text-on-surface-variant leading-relaxed">
              تحالف عقاري يجمع الخبرة بالتنفيذ المتقن لنقدم لك مسكناً يليق بتطلعاتك.
            </p>
            <div className="flex gap-4">
              <a className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-primary hover:bg-primary hover:text-white transition-all shadow-sm" href="#">
                <span className="material-symbols-outlined">public</span>
              </a>
              <a className="w-10 h-10 flex items-center justify-center bg-white rounded-full text-primary hover:bg-primary hover:text-white transition-all shadow-sm" href="#">
                <span className="material-symbols-outlined">alternate_email</span>
              </a>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold text-lg text-on-surface">روابط سريعة</h4>
            <ul className="space-y-3">
              <li><a className="text-on-surface-variant hover:text-primary transition-colors" href="#location">الموقع الجغرافي</a></li>
              <li><a className="text-on-surface-variant hover:text-primary transition-colors" href="#masterplan">المخطط العام</a></li>
              <li><a className="text-on-surface-variant hover:text-primary transition-colors" href="#models">نماذج الفلل</a></li>
              <li><a className="text-on-surface-variant hover:text-primary transition-colors" href="#contact">تواصل معنا</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold text-lg text-on-surface">المطورين والمسوقين</h4>
            <div className="flex flex-wrap gap-4 items-center">
              <div className="bg-white p-3 rounded-lg shadow-sm border border-outline-variant/10 font-bold text-primary">Al-Emmar</div>
              <div className="bg-white p-3 rounded-lg shadow-sm border border-outline-variant/10 font-bold text-primary">AMAKEN</div>
            </div>
            <p className="text-xs text-on-surface-variant/70 leading-loose">
              جميع المخططات والصور لأغراض تسويقية، وقد يطرأ عليها بعض التعديلات أثناء التنفيذ وفقاً للاشتراطات الفنية.
            </p>
          </div>
        </div>
        <div className="border-t border-outline-variant/10 py-8 px-8 max-w-container-max-width mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-on-surface-variant/60">
          <div>جميع الحقوق محفوظة لشركة رملية العقارية © ٢٠٢٤</div>
          <div className="flex gap-6">
            <a className="hover:text-primary transition-colors" href="#">الخصوصية</a>
            <a className="hover:text-primary transition-colors" href="#">الشروط والأحكام</a>
            <a className="hover:text-primary transition-colors" href="#">خريطة الموقع</a>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
