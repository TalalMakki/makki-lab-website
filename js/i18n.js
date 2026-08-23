(function(){
  "use strict";

  var translations = {
    ar: {
      meta_title: "معمل مكي للتحاليل الطبية | دقة تشخيصية تستحق ثقتكم",
      meta_desc: "معمل مكي للتحاليل الطبية — نتائج دقيقة وموثوقة، فريق طبي متخصص، وأحدث الأجهزة، بثلاثة أفرع تخدمكم في الرحاب ومدينتي والزيتون.",

      brand_name: "معمل مكي",
      brand_sub: "للتحاليل الطبية",
      brand_logo_alt: "شعار معمل مكي للتحاليل الطبية",
      nav_home: "الرئيسية",
      nav_about: "من نحن",
      nav_services: "خدماتنا",
      nav_why: "لماذا نحن",
      nav_branches: "الأفرع",
      nav_contact: "تواصل معنا",
      header_call: "اتصل الآن",
      nav_toggle_aria: "فتح القائمة",
      mobile_close_aria: "إغلاق القائمة",

      hero_eyebrow: "افهم صحتك، تحليلًا بعد تحليل",
      hero_h1: "دقة تشخيصية <em>تستحق ثقتكم</em> في كل نتيجة",
      hero_p: "نقدّم خدمات التحاليل الطبية بأعلى معايير الجودة والدقة العلمية، عبر فريق طبي متخصص وأحدث الأجهزة التحليلية، لنكون سندًا موثوقًا لصحتكم وصحة أسرتكم في كل فرع من أفرعنا.",
      hero_cta1: "احجز تحليلك الآن",
      hero_cta2: "أقرب فرع لك",
      hero_trust1: "دقة وموثوقية<small>معايير جودة صارمة</small>",
      hero_trust2: "فريق طبي متخصص<small>خبرة وكفاءة</small>",
      hero_trust3: "3 أفرع بالقاهرة<small>الرحاب · مدينتي · الزيتون</small>",
      chip1: "نتائج معتمدة",
      chip2: "تسليم سريع",
      chip3: "خصوصية تامة",

      stat1_title: "3 أفرع",
      stat1_sub: "الرحاب · مدينتي · الزيتون",
      stat2_title: "فريق طبي متخصص",
      stat2_sub: "إشراف على مدار العمل",
      stat3_title: "أجهزة حديثة",
      stat3_sub: "تقنيات تحليل متطورة",
      stat4_title: "سرية وخصوصية",
      stat4_sub: "حماية كاملة لبياناتكم",

      about_eyebrow: "من نحن",
      about_h2: "شريككم الطبي الموثوق في التحاليل المخبرية",
      about_p1: "معمل مكي للتحاليل الطبية هو صرح طبي متخصص يقدّم خدمات التحاليل المخبرية بمختلف أنواعها، انطلاقًا من إيماننا بأن النتيجة الدقيقة هي حجر الأساس لأي قرار طبي سليم. نجمع بين الخبرة العلمية لفريقنا الطبي والتقني، وبين أحدث الأجهزة والتقنيات المعتمدة عالميًا، لنقدّم لعملائنا تجربة مخبرية دقيقة وسريعة وآمنة.",
      about_p2: "حرصًا منّا على تسهيل وصول خدماتنا لأكبر عدد من الأسر، توسّعنا لنغطي بثلاثة أفرع رئيسية أبرز مناطق القاهرة الجديدة والقاهرة، مع الحفاظ على نفس المستوى من الجودة والاحترافية في كل فرع.",
      about_mission: "<strong>رسالتنا</strong><span>تقديم نتائج تحاليل دقيقة وموثوقة تدعم القرار الطبي السليم لكل مريض.</span>",
      about_vision: "<strong>رؤيتنا</strong><span>أن نكون الاختيار الأول للتحاليل الطبية بفضل الدقة والاحترافية والانتشار.</span>",
      about_values: "<strong>قيمنا</strong><span>الدقة العلمية، احترام خصوصية المريض، والالتزام بأعلى معايير الجودة.</span>",

      services_eyebrow: "خدماتنا الرئيسية",
      services_h2: "أبرز فئات التحاليل الطبية",
      services_p: "نغطي مجموعة واسعة من التخصصات المخبرية لنكون مرجعكم الشامل في كل ما يخص التحاليل الطبية.",
      service1_title: "الكيمياء الإكلينيكية",
      service1_body: "راقب مستويات سكر الدم، والكوليسترول، ووظائف الكلى والكبد لتقييم صحتك العامة والمساعدة في الكشف المبكر عن المشكلات الصحية.",
      service2_title: "أمراض الدم والدمويات",
      service2_body: "تحليل خلايا الدم للمساعدة في تشخيص الأنيميا، والعدوى، واضطرابات التجلط، وغيرها من الحالات التي تؤثر على الدم والجهاز المناعي.",
      service3_title: "تحاليل الهرمونات",
      service3_body: "تابع مستويات هرمونات الغدة الدرقية والكورتيزول والهرمونات التناسلية لفهم تأثيرها على الطاقة، والمزاج، وعملية التمثيل الغذائي.",
      service4_title: "المناعة والأمصال",
      service4_body: "تقييم استجابة الجهاز المناعي والكشف عن الأجسام المضادة للمساعدة في تشخيص أمراض المناعة الذاتية، والحساسية، والأمراض المعدية.",
      service5_title: "علم الفيروسات",
      service5_body: "الكشف عن العدوى الفيروسية باستخدام أحدث تقنيات الفحوصات الجزيئية وتحاليل الأجسام المضادة، لضمان تشخيص دقيق ورعاية صحية فعّالة.",
      service6_title: "الميكروبيولوجي (علم الأحياء الدقيقة)",
      service6_body: "الكشف عن البكتيريا والفطريات والتغيرات غير الطبيعية في الأنسجة للمساعدة في تشخيص العدوى ووضع الخطة العلاجية المناسبة لكل حالة.",

      facilities_eyebrow: "مرافقنا وتجهيزاتنا",
      facilities_h2: "تجهيزات مخبرية على أعلى مستوى",
      facilities_p: "نستثمر باستمرار في مرافقنا وأجهزتنا لضمان تجربة تحليل دقيقة وآمنة من اللحظة الأولى حتى استلام النتيجة.",
      facilities_li1: "أحدث أجهزة المعامل الطبية المؤتمتة بالكامل",
      facilities_li2: "جودة وفقًا لمعايير ISO العالمية",
      facilities_li3: "فريق من المتخصصين ذوي الخبرة",
      facilities_img1_alt: "فريق معمل مكي أثناء العمل على التحاليل المخبرية",
      facilities_img2_alt: "أدوات وأجهزة معملية دقيقة في معمل مكي",

      why_eyebrow: "لماذا معمل مكي",
      why_h2: "عمل احترافي تثقون به",
      why_p: "نجمع بين الخبرة الطبية والتقنية الحديثة لنمنحكم تجربة تحاليل طبية مريحة، دقيقة، وسريعة في كل زيارة.",
      feature1_title: "نتائج دقيقة وموثوقة",
      feature1_body: "يتم التحقق من كل عينة بعناية قبل إصدار النتائج، مع توفير معظم النتائج خلال 24 ساعة وفقًا لنوع التحليل.",
      feature2_title: "فريق عمل مؤهل",
      feature2_body: "فنيون مرخصون ومدربون على أحدث بروتوكولات التشخيص، بإشراف أطباء باثولوجيا وخبرة معتمدة.",
      feature3_title: "معمل بمعايير جودة عالية",
      feature3_body: "أجهزة تشخيصية مؤتمتة بالكامل، تتم معايرتها وصيانتها بانتظام وفقًا لمعايير الجودة العالمية ISO.",
      feature4_title: "سحب العينات من المنزل",
      feature4_body: "خدمة زيارة منزلية لسحب العينات لمن يفضّل إجراء تحليله دون مغادرة المنزل.",
      feature5_title: "خصوصية وسرية تامة",
      feature5_body: "نتعامل مع بيانات ونتائج كل مريض بأعلى درجات السرية والاحترافية.",
      feature6_title: "انتشار يخدمكم",
      feature6_body: "ثلاثة أفرع في مواقع مختارة بعناية لتكونوا دائمًا على مقربة من خدماتنا.",

      branches_eyebrow: "أفرعنا",
      branches_h2: "أقرب فرع دائمًا في خدمتكم",
      branches_p: "تفضّلوا بزيارة أقرب أفرعنا إليكم، أو تواصلوا معنا مباشرة لحجز موعدكم.",
      branch1_name: "فرع الرحاب",
      branch1_addr: "المركز الطبي 1، الدور الثاني، عيادة 201 — مدينة الرحاب، القاهرة الجديدة",
      branch2_name: "فرع مدينتي",
      branch2_addr: "أول سيزون بارك، الدور الأول، عيادة رقم F7+F6 — مدينتي، القاهرة الجديدة",
      branch3_name: "فرع الزيتون",
      branch3_addr: "مستشفى السلام، 141 شارع طومان باي — حلمية الزيتون، القاهرة",
      btn_call: "اتصال",
      btn_whatsapp: "واتساب",
      btn_directions: "الاتجاهات",

      testi_eyebrow: "آراء عملائنا",
      testi_h2: "لماذا يثق بنا عملاؤنا؟",
      testi_p: "نلتزم بتقديم تحاليل دقيقة، وخدمة متميزة، وتجربة مريحة لكل مريض، لأن صحتكم ورضاكم هما أولويتنا.",
      testi1_quote: "\"معمل ممتاز وطاقم عمل اكثر من رائع، التزام بالمواعيد ووقت اقل ونتائج مضبوطة 100%، واسعارهم رمزية مقارنة بالمعامل اللي حواليهم.\"",
      testi1_who: "أحد عملائنا<small>فرع الرحاب</small>",
      testi2_quote: "\"الراحة في التعامل والاهتمام الإداري والطبي بيشجع المراجع يستمر ويكرر زيارته، أسعاركم مدروسة وأنا متابعة معاكم من سنتين ونص وعطول بنصح فيكم. شكرًا لكم على الخدمة الراقية.\"",
      testi2_who: "ولاء خضري<small>عميلة دائمة</small>",
      testi3_quote: "\"أشارك الجميع تجربتي مع معمل مكي، فرع الرحاب، لمدة أربعة سنوات. معاملة ممتازة وقمة في الرقي تشعرك بالثقة والطمأنينة، بالإضافة إلى دقة نتائج الفحوصات وأسعار مناسبة للجميع مع تخفيضات في كل المواسم.\"",
      testi3_who: "د. عواطف آدم عبدالله<small>عميلة منذ 4 سنوات</small>",

      cta_h2: "هل أنتم مستعدون لإجراء تحاليلكم؟",
      cta_p: "تواصلوا معنا الآن لحجز موعدكم أو الاستفسار عن أي تحليل، فريقنا جاهز لخدمتكم بكل احترافية.",
      cta_wa: "راسلنا واتساب",

      contact_eyebrow: "تواصل معنا",
      contact_h2: "ابقوا على تواصل دائم معنا",
      contact_p: "تابعونا على منصات التواصل الاجتماعي، أو تواصلوا معنا مباشرة عبر الهاتف أو واتساب.",
      card_call_title: "اتصل بنا",
      card_wa_title: "واتساب",
      card_fb_title: "فيسبوك",
      card_ig_title: "إنستغرام",
      card_email_title: "راسلنا",

      footer_desc: "صرح طبي متخصص في التحاليل المخبرية، يجمع بين الدقة العلمية وأحدث الأجهزة وفريق طبي متمكن، بثلاثة أفرع تخدم القاهرة الجديدة والقاهرة.",
      footer_quicklinks_title: "روابط سريعة",
      footer_contact_title: "تواصل معنا",
      footer_copyright: "معمل مكي للتحاليل الطبية. جميع الحقوق محفوظة.",

      fab_wa_aria: "تواصل عبر واتساب"
    },

    en: {
      meta_title: "Makki Lab Medical Laboratories | Diagnostic Accuracy You Can Trust",
      meta_desc: "Makki Lab Medical Laboratories — accurate, reliable results, a specialized medical team, and modern equipment, with three branches serving you in Al Rehab, Madinaty, and Zeitoun.",

      brand_name: "Makki Lab",
      brand_sub: "Medical Laboratories",
      brand_logo_alt: "Makki Lab Medical Laboratories logo",
      nav_home: "Home",
      nav_about: "About",
      nav_services: "Services",
      nav_why: "Why Us",
      nav_branches: "Branches",
      nav_contact: "Contact",
      header_call: "Call Now",
      nav_toggle_aria: "Open menu",
      mobile_close_aria: "Close menu",

      hero_eyebrow: "Understand your health, one test at a time",
      hero_h1: "Diagnostic accuracy <em>you can trust</em> in every result",
      hero_p: "We provide medical laboratory services to the highest standards of quality and scientific precision, through a specialized medical team and the latest testing equipment — a reliable support for your health and your family's health at every branch.",
      hero_cta1: "Book Your Test Now",
      hero_cta2: "Nearest Branch",
      hero_trust1: "Accuracy & Reliability<small>Strict quality standards</small>",
      hero_trust2: "Specialized Medical Team<small>Experience & expertise</small>",
      hero_trust3: "3 Branches in Cairo<small>Al Rehab · Madinaty · Zeitoun</small>",
      chip1: "Certified Results",
      chip2: "Fast Turnaround",
      chip3: "Full Privacy",

      stat1_title: "3 Branches",
      stat1_sub: "Al Rehab · Madinaty · Zeitoun",
      stat2_title: "Specialized Medical Team",
      stat2_sub: "Continuous supervision",
      stat3_title: "Modern Equipment",
      stat3_sub: "Advanced testing technology",
      stat4_title: "Confidentiality & Privacy",
      stat4_sub: "Full protection of your data",

      about_eyebrow: "About Us",
      about_h2: "Your Trusted Medical Partner in Laboratory Testing",
      about_p1: "Makki Lab Medical Laboratories is a specialized medical institution providing laboratory testing services of all kinds, driven by our belief that an accurate result is the foundation of every sound medical decision. We combine our medical and technical team's scientific expertise with the latest globally-certified equipment and technologies, to deliver an accurate, fast, and safe laboratory experience for our clients.",
      about_p2: "To make our services accessible to as many families as possible, we have expanded to three main branches across the most prominent areas of New Cairo and Cairo, while maintaining the same level of quality and professionalism at every branch.",
      about_mission: "<strong>Our Mission</strong><span>To deliver accurate, reliable test results that support sound medical decisions for every patient.</span>",
      about_vision: "<strong>Our Vision</strong><span>To be the first choice for medical testing thanks to our accuracy, professionalism, and reach.</span>",
      about_values: "<strong>Our Values</strong><span>Scientific accuracy, respect for patient privacy, and commitment to the highest quality standards.</span>",

      services_eyebrow: "Our Main Services",
      services_h2: "Key Medical Test Categories",
      services_p: "We cover a wide range of laboratory specialties to be your comprehensive reference for everything related to medical testing.",
      service1_title: "Clinical Chemistry",
      service1_body: "Monitor blood sugar, cholesterol, and kidney and liver function to assess your general health and support early detection of health issues.",
      service2_title: "Hematology",
      service2_body: "Analysis of blood cells to help diagnose anemia, infections, clotting disorders, and other conditions affecting the blood and immune system.",
      service3_title: "Hormone Testing",
      service3_body: "Track thyroid hormone, cortisol, and reproductive hormone levels to understand their effect on energy, mood, and metabolism.",
      service4_title: "Immunology & Serology",
      service4_body: "Assessment of immune system response and detection of antibodies to help diagnose autoimmune diseases, allergies, and infectious diseases.",
      service5_title: "Virology",
      service5_body: "Detection of viral infections using the latest molecular testing techniques and antibody analysis, ensuring accurate diagnosis and effective care.",
      service6_title: "Microbiology",
      service6_body: "Detection of bacteria, fungi, and abnormal tissue changes to help diagnose infections and determine the appropriate treatment plan for each case.",

      facilities_eyebrow: "Our Facilities & Equipment",
      facilities_h2: "Top-Tier Laboratory Equipment",
      facilities_p: "We continuously invest in our facilities and equipment to ensure an accurate and safe testing experience from the first moment to receiving your result.",
      facilities_li1: "The latest fully-automated medical laboratory equipment",
      facilities_li2: "Quality in line with international ISO standards",
      facilities_li3: "A team of experienced specialists",
      facilities_img1_alt: "Makki Lab team at work on laboratory testing",
      facilities_img2_alt: "Precise laboratory tools and equipment at Makki Lab",

      why_eyebrow: "Why Makki Lab",
      why_h2: "Professional Work You Can Trust",
      why_p: "We combine medical expertise with modern technology to give you a comfortable, accurate, and fast testing experience on every visit.",
      feature1_title: "Accurate, Reliable Results",
      feature1_body: "Every sample is carefully verified before results are issued, with most results delivered within 24 hours depending on the test type.",
      feature2_title: "Qualified Team",
      feature2_body: "Licensed technicians trained in the latest diagnostic protocols, supervised by certified pathologists.",
      feature3_title: "High Quality Standards",
      feature3_body: "Fully-automated diagnostic equipment, regularly calibrated and maintained in line with international ISO quality standards.",
      feature4_title: "Home Sample Collection",
      feature4_body: "A home visit service for sample collection, for those who prefer to have their test done without leaving home.",
      feature5_title: "Complete Privacy & Confidentiality",
      feature5_body: "We handle every patient's data and results with the highest level of confidentiality and professionalism.",
      feature6_title: "Reach That Serves You",
      feature6_body: "Three branches in carefully selected locations, so we're always close to you.",

      branches_eyebrow: "Our Branches",
      branches_h2: "The Nearest Branch, Always at Your Service",
      branches_p: "Feel free to visit whichever of our branches is nearest to you, or contact us directly to book your appointment.",
      branch1_name: "Al Rehab Branch",
      branch1_addr: "Medical Center 1, 2nd Floor, Clinic 201 — Al Rehab City, New Cairo",
      branch2_name: "Madinaty Branch",
      branch2_addr: "All Seasons Park, 1st Floor, Clinic F7+F6 — Madinaty, New Cairo",
      branch3_name: "Zeitoun Branch",
      branch3_addr: "Al Salam Hospital, 141 Toman Bay St — Helmeyet El-Zaytoun, Cairo",
      btn_call: "Call",
      btn_whatsapp: "WhatsApp",
      btn_directions: "Directions",

      testi_eyebrow: "Client Reviews",
      testi_h2: "Why Our Clients Trust Us",
      testi_p: "We are committed to delivering accurate testing, outstanding service, and a comfortable experience for every patient, because your health and satisfaction are our priority.",
      testi1_quote: "\"An excellent lab and a wonderful team — appointments kept on time, less waiting, and results that are 100% accurate, with prices that are reasonable compared to labs nearby.\"",
      testi1_who: "A satisfied client<small>Al Rehab Branch</small>",
      testi2_quote: "\"The ease of dealing with them and the care from both administrative and medical staff make you want to keep coming back. Your prices are fair — I've been with you for two and a half years and always recommend you. Thank you for the excellent service.\"",
      testi2_who: "Walaa Khodary<small>Loyal client</small>",
      testi3_quote: "\"I'd like to share my experience with Makki Lab, Al Rehab branch, over four years. Excellent, top-tier treatment that makes you feel confident and at ease, along with accurate test results and prices suitable for everyone, plus seasonal discounts.\"",
      testi3_who: "Dr. Awatef Adam Abdallah<small>Client for 4 years</small>",

      cta_h2: "Ready to Get Your Tests Done?",
      cta_p: "Contact us now to book your appointment or ask about any test — our team is ready to serve you professionally.",
      cta_wa: "Message Us on WhatsApp",

      contact_eyebrow: "Contact Us",
      contact_h2: "Stay in Touch With Us",
      contact_p: "Follow us on social media, or contact us directly by phone or WhatsApp.",
      card_call_title: "Call Us",
      card_wa_title: "WhatsApp",
      card_fb_title: "Facebook",
      card_ig_title: "Instagram",
      card_email_title: "Email Us",

      footer_desc: "A specialized medical institution for laboratory testing, combining scientific accuracy, modern equipment, and a skilled medical team, with three branches serving New Cairo and Cairo.",
      footer_quicklinks_title: "Quick Links",
      footer_contact_title: "Contact Us",
      footer_copyright: "Makki Lab Medical Laboratories. All rights reserved.",

      fab_wa_aria: "Contact us on WhatsApp"
    }
  };

  var STORAGE_KEY = "makki-lang";
  var htmlEl = document.documentElement;

  function getStoredLang(){
    try { return localStorage.getItem(STORAGE_KEY); } catch(e){ return null; }
  }
  function storeLang(lang){
    try { localStorage.setItem(STORAGE_KEY, lang); } catch(e){}
  }

  function applyLanguage(lang){
    var dict = translations[lang] || translations.ar;

    htmlEl.setAttribute("lang", lang);
    htmlEl.setAttribute("dir", lang === "en" ? "ltr" : "rtl");

    if (dict.meta_title) document.title = dict.meta_title;
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && dict.meta_desc) metaDesc.setAttribute("content", dict.meta_desc);

    document.querySelectorAll("[data-i18n]").forEach(function(el){
      var key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function(el){
      var key = el.getAttribute("data-i18n-html");
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    document.querySelectorAll("[data-i18n-attr]").forEach(function(el){
      el.getAttribute("data-i18n-attr").split(";").forEach(function(pair){
        var parts = pair.split(":");
        var attr = parts[0] && parts[0].trim();
        var key = parts[1] && parts[1].trim();
        if (attr && key && dict[key] !== undefined) el.setAttribute(attr, dict[key]);
      });
    });

    var deskLabel = document.getElementById("langSwitchLabel");
    var mobileLabel = document.getElementById("mobileLangSwitchLabel");
    if (lang === "ar") {
      if (deskLabel) deskLabel.textContent = "EN";
      if (mobileLabel) mobileLabel.textContent = "English";
    } else {
      if (deskLabel) deskLabel.textContent = "AR";
      if (mobileLabel) mobileLabel.textContent = "العربية";
    }

    htmlEl.setAttribute("data-lang", lang);
    window.dispatchEvent(new CustomEvent("makkilang:change", { detail: { lang: lang } }));
  }

  function currentLang(){
    return htmlEl.getAttribute("lang") === "en" ? "en" : "ar";
  }

  function toggleLanguage(){
    var next = currentLang() === "ar" ? "en" : "ar";
    storeLang(next);
    applyLanguage(next);
  }

  window.MakkiI18n = {
    translations: translations,
    applyLanguage: applyLanguage,
    toggleLanguage: toggleLanguage,
    currentLang: currentLang
  };

  document.addEventListener("DOMContentLoaded", function(){
    var initial = getStoredLang() || "ar";
    applyLanguage(initial);

    var langSwitch = document.getElementById("langSwitch");
    var mobileLangSwitch = document.getElementById("mobileLangSwitch");
    if (langSwitch) langSwitch.addEventListener("click", toggleLanguage);
    if (mobileLangSwitch) mobileLangSwitch.addEventListener("click", toggleLanguage);
  });
})();
