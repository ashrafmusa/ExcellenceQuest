const translations = {
  title: {
    ar: "الأسئلة الشائعة | ExcellenceQuest",
    en: "FAQ | ExcellenceQuest"
  },
  mainTitle: {
    ar: "شركة ExcellenceQuest للاستشارات",
    en: "ExcellenceQuest Consultancy"
  },
  subtitle: {
    ar: "التميز المؤسسي يبدأ من هنا",
    en: "Organizational excellence starts here"
  },
  alert: {
    ar: "🎉 الآن نقدم استشارات OSAHI مجانًا لأول 3 عملاء هذا الشهر!",
    en: "🎉 Free OSAHI consultations for the first 3 clients this month!"
  },
  navHome: { ar: "الرئيسية", en: "Home" },
  navAbout: { ar: "من نحن", en: "About" },
  navServices: { ar: "الخدمات", en: "Services" },
  navAssess: { ar: "التقييم الذاتي", en: "Self-Assessment" },
  navWhy: { ar: "لماذا نحن؟", en: "Why Us?" },
  navBlog: { ar: "المدونة", en: "Blog" },
  navFaq: { ar: "الأسئلة الشائعة", en: "FAQ" },
  navContact: { ar: "اتصل بنا", en: "Contact" },
  welcomeTitle: {
    ar: "مرحبًا بكم في ExcellenceQuest",
    en: "Welcome to ExcellenceQuest"
  },
  welcomeDesc: {
    ar: "نحن شركة استشارية متخصصة في الجودة، الاعتماد والتحسين المستمر للمؤسسات الصحية والخدمية عبر حلول احترافية عن بُعد.",
    en: "We are a consultancy specialized in quality, accreditation, and continuous improvement for healthcare and service organizations through professional remote solutions."
  },
  ctaLink: {
    ar: "استعرض خدماتنا",
    en: "Explore Our Services"
  },
  testimonialTitle: {
    ar: "آراء عملائنا",
    en: "What Our Clients Say"
  },
  test1: {
    ar: "خدمة ممتازة ودعم مستمر حتى بعد الاعتماد. أوصي بشدة بـ ExcellenceQuest.",
    en: "Excellent service and ongoing support even after accreditation. Highly recommend ExcellenceQuest."
  },
  test2: {
    ar: "فريق احترافي ساعدنا على فهم وتطبيق معايير الجودة بكفاءة.",
    en: "A professional team helped us understand and apply quality standards efficiently."
  },
  bookTitle: {
    ar: "احجز استشارتك المجانية الآن",
    en: "Book Your Free Consultation Now"
  },
  inputName: {
    ar: "الاسم الكامل",
    en: "Full Name"
  },
  inputEmail: {
    ar: "البريد الإلكتروني",
    en: "Email Address"
  },
  inputPhone: {
    ar: "رقم الهاتف (اختياري)",
    en: "Phone (optional)"
  },
  bookBtn: {
    ar: "احجز الآن",
    en: "Book Now"
  },
  formConfirm: {
    ar: "✅ تم إرسال النموذج بنجاح!",
    en: "✅ Form submitted successfully!"
  },
  rights: {
    ar: "جميع الحقوق محفوظة",
    en: "All rights reserved"
  },
  wa: {
    ar: "تواصل واتساب",
    en: "WhatsApp Contact"
  },
  faqTitle: {
    ar: "الأسئلة الشائعة",
    en: "Frequently Asked Questions"
  },
  faqSubtitle: {
    ar: "إجابات لأهم استفساراتكم",
    en: "Answers to your most common questions"
  },
  q1: {
    ar: "ما هي خدمات ExcellenceQuest؟",
    en: "What services does ExcellenceQuest offer?"
  },
  a1: {
    ar: "نحن نقدم استشارات جودة، اعتماد، تقييم ذاتي، تطوير إداري، وتدريب عن بُعد للمؤسسات الصحية والخدمية.",
    en: "We offer quality, accreditation, self-assessment, management development, and remote training for healthcare and service institutions."
  },
  q2: {
    ar: "هل الاستشارة الأولى مجانية؟",
    en: "Is the first consultation free?"
  },
  a2: {
    ar: "نعم، أول استشارة مجانية لأول 3 عملاء كل شهر.",
    en: "Yes, the first consultation is free for the first 3 clients each month."
  },
  q3: {
    ar: "هل تدعمون المعايير المحلية مثل OSAHI؟",
    en: "Do you support local standards like OSAHI?"
  },
  a3: {
    ar: "نعم، ندعم OSAHI، CBAHI، وISO، بالإضافة إلى CAP للمختبرات.",
    en: "Yes, we support OSAHI, CBAHI, ISO, and CAP for laboratories."
  }
};

const currentLang = localStorage.getItem("lang") || "ar";
document.documentElement.lang = currentLang;
document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";

// تحديث النصوص
document.querySelectorAll("[data-i18n]").forEach(el => {
  const key = el.getAttribute("data-i18n");
  if (translations[key]) {
    el.innerHTML = translations[key][currentLang];
  }
});

// تحديث الحقول ذات placeholder
document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
  const key = el.getAttribute("data-i18n-placeholder");
  if (translations[key]) {
    el.setAttribute("placeholder", translations[key][currentLang]);
  }
});

// تحديث عنوان الصفحة
if (translations.title) {
  document.title = translations.title[currentLang];
}

// زر اللغة
const langBtn = document.getElementById("lang-btn");
if (langBtn) {
  langBtn.textContent = currentLang === "ar" ? "English" : "العربية";
  langBtn.addEventListener("click", () => {
    const newLang = currentLang === "ar" ? "en" : "ar";
    localStorage.setItem("lang", newLang);
    location.reload();
  });
}
