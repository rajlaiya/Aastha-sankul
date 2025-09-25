// Initialize Locomotive Scroll when DOM is ready
(function () {
  // --- Language switching logic ---
  function setLanguage(lang) {
    // Update html lang attribute
    document.documentElement.setAttribute("lang", lang);
    // Font switching
    if (typeof setLangFont === "function") setLangFont(lang);
    // Save to localStorage
    localStorage.setItem("language", lang);
    // Update textual translations without breaking nested markup
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var dict = translations[lang] || {};
      if (dict[key] != null) {
        // If the element is intended to contain plain text, set textContent
        // Many places we wrapped text in <span data-i18n>..</span>
        el.textContent = dict[key];
      }
    });
    // Attribute translations: placeholder, aria-label, title
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      var val = translations[lang] && translations[lang][key];
      if (val != null) el.setAttribute("placeholder", val);
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria-label");
      var val = translations[lang] && translations[lang][key];
      if (val != null) el.setAttribute("aria-label", val);
    });
    document.querySelectorAll("[data-i18n-title]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-title");
      var val = translations[lang] && translations[lang][key];
      if (val != null) el.setAttribute("title", val);
    });
  }

  // On page load, set language from localStorage or default to English
  document.addEventListener("DOMContentLoaded", function () {
    var lang = localStorage.getItem("language") || "en";
    var select = document.getElementById("language-select");
    if (select) {
      select.value = lang;
      select.addEventListener("change", function () {
        setLanguage(this.value);
      });
    }
    setLanguage(lang);
  });
  // --- Multi-language translations ---
  const translations = {
    en: {
      schoolName: "Aastha Sankul",
      followUs: "Follow Us",
      emailAddress: "Email address",
      home: "Home",
      about: "About",
      academics: "Academics",
      admissions: "Admissions",
      gallery: "Gallery",
      events: "Events & Notices",
      contact: "Contact Us",
      applyNow: "Apply Now",
      learnMore: "Learn More",
      admissionsOpen: "Admissions Open",
      applyForYear: "Apply for 2025–26",
      start: "Start",
      hotline: "Hotline:",
      callUs: "Call us",
      noticeBoard: "Notice Board:",
      latestUpdates: "Latest updates",
      overview: "Overview",
      curriculum: "Curriculum",
      faculty: "Faculty",
      timetable: "Timetable",
      testimonials: "Testimonials",
      quickLinks: "Quick Links",
      subscribe: "Subscribe",
      newsletter: "Newsletter",
      newsletterIntro: "Get updates about admissions, events, and notices.",
      newsletterPlaceholder: "Enter your email",
      allRightsReserved: "All rights reserved.",
      all: "All",
      primary: "Primary (1–5)",
      middle: "Middle (6–8)",
      secondary: "Secondary (9–10)",
      seniorSci: "Senior Science (11–12)",
      seniorCom: "Senior Commerce (11–12)",
      aboutUs: "About Us",
      ourMission: "Our Mission",
      missionText:
        "To empower every learner with knowledge, character, and creativity through inspiring pedagogy and a caring community.",
      ourVision: "Our Vision",
      visionText:
        "To be a benchmark institution that nurtures curious minds and responsible citizens ready to shape a better world.",
      principalsMessage: "Principal’s Message",
      principalMessageText:
        "At Aastha, learning is joyful and purposeful. We invite you to explore our vibrant campus and discover a home for lifelong growth.",
      academicsOverview: "Academics Overview",
      academicsOverviewText: "A snapshot of programs and standards.",
      grade1: "Grade 1",
      grade5: "Grade 5",
      grade10: "Grade 10",
      leadership: "Leadership",
      facultyDirectory: "Faculty Directory",
      downloadTimetablesMobile: "Download timetables on mobile:",
      grade1Timetable: "Grade 1 Timetable",
      grade5Timetable: "Grade 5 Timetable",
      grade10Timetable: "Grade 10 Timetable",
      time: "Time",
      mon: "Mon",
      tue: "Tue",
      wed: "Wed",
      thu: "Thu",
      fri: "Fri",
      break: "Break",
      admissionsIntro:
        "Follow the steps below to apply for the academic year 2025–26.",
      downloadProspectus: "Download Prospectus",
      enquiry: "Enquiry",
      enquiryText: "Submit an enquiry or visit our campus for a guided tour.",
      application: "Application",
      applicationText:
        "Fill the online admission form and attach required documents.",
      assessment: "Assessment",
      assessmentText: "Attend a short interaction/assessment as applicable.",
      confirmation: "Confirmation",
      confirmationText: "On selection, confirm admission by paying the fees.",
      annualFeeStructure: "Annual Fee Structure",
      class: "Class",
      annualFees: "Annual Fees (₹)",
      std1to10: "Standard 1–10",
      std11to12Com: "Standard 11–12 Commerce",
      std11to12Sci: "Standard 11–12 Science",
      faqTitle: "Frequently Asked Questions",
      faq1q: "When was Astha School established in Rajkot?",
      faq1a:
        "Astha School has been educating children since 2013 and has gained a good reputation in the education industry.",
      faq2q: "What are the different education boards in India?",
      faq2a:
        "The different education boards of schools are CBSE, ICSE, IGCSE, IB, SSC, etc.",
      faq3q: "Do Astha School offer pick-up and drop services?",
      faq3a:
        "Most schools offer bus services for students who stay far away. We suggest you get in touch with Astha School for more details.",
      faq4q: "How can I enquire about the admission process at Astha School?",
      faq4a:
        "To enquire about the admission process at Astha School, you can call the number provided or visit the campus personally.",
      faq5q: "What are the other subjects taught at Astha School?",
      faq5a:
        "Astha School teaches subjects such as Maths, Science, History, Hindi, etc. However, subjects may vary according to the school board. Please connect with Astha School for detailed information.",
      eventsTab: "Events",
      noticesTab: "Notices",
      details: "Details",
      posted: "Posted",
      tagline: "Nurturing minds, inspiring futures.",
      contactViaGoogleForm: "Contact via Google Form",
      contactIntro:
        "Have a question about admissions, academics, or visiting our campus? Please use our Google Form and our office will get back to you.",
      openGoogleForm: "Open Google Form",
      openGoogleFormAria: "Open Google Form in a new tab",
      opensInNewTab: "This opens in a new tab.",
      schoolOffice: "School Office",
    },
    hi: {
      schoolName: "आस्था संकुल",
      followUs: "हमसे जुड़ें",
      emailAddress: "ईमेल पता",
      home: "होम",
      about: "परिचय",
      academics: "शैक्षणिक",
      admissions: "प्रवेश",
      gallery: "गैलरी",
      events: "कार्यक्रम और सूचनाएँ",
      contact: "संपर्क करें",
      applyNow: "अभी आवेदन करें",
      learnMore: "और जानें",
      admissionsOpen: "प्रवेश खुले हैं",
      applyForYear: "शैक्षणिक वर्ष 2025–26 के लिए आवेदन करें",
      start: "शुरू करें",
      hotline: "हॉटलाइन:",
      callUs: "कॉल करें",
      noticeBoard: "सूचना पट:",
      latestUpdates: "ताज़ा अपडेट",
      overview: "सारांश",
      curriculum: "पाठ्यक्रम",
      faculty: "शिक्षकगण",
      timetable: "समय सारणी",
      testimonials: "प्रशंसापत्र",
      quickLinks: "त्वरित लिंक",
      subscribe: "सदस्यता लें",
      newsletter: "न्यूज़लेटर",
      newsletterIntro:
        "प्रवेश, कार्यक्रम और सूचनाओं के बारे में अपडेट प्राप्त करें।",
      newsletterPlaceholder: "अपना ईमेल दर्ज करें",
      allRightsReserved: "सर्वाधिकार सुरक्षित।",
      all: "सभी",
      primary: "प्राथमिक (1–5)",
      middle: "मिडिल (6–8)",
      secondary: "सेकेंडरी (9–10)",
      seniorSci: "सीनियर विज्ञान (11–12)",
      seniorCom: "सीनियर कॉमर्स (11–12)",
      aboutUs: "हमारे बारे में",
      ourMission: "हमारा मिशन",
      missionText:
        "प्रत्येक शिक्षार्थी को प्रेरक शिक्षाशास्त्र और देखभाल करने वाले समुदाय के माध्यम से ज्ञान, चरित्र और रचनात्मकता से सशक्त बनाना।",
      ourVision: "हमारा विज़न",
      visionText:
        "एक मानक संस्थान बनना जो जिज्ञासु दिमाग और जिम्मेदार नागरिकों को एक बेहतर दुनिया बनाने के लिए तैयार करता है।",
      principalsMessage: "प्रधानाचार्य का संदेश",
      principalMessageText:
        "आस्था में, सीखना आनंददायक और सार्थक है। हम आपको हमारे जीवंत परिसर का अन्वेषण करने और आजीवन विकास के लिए एक घर खोजने के लिए आमंत्रित करते हैं।",
      academicsOverview: "शैक्षणिक अवलोकन",
      academicsOverviewText: "कार्यक्रमों और मानकों का संक्षिप्त विवरण।",
      grade1: "कक्षा 1",
      grade5: "कक्षा 5",
      grade10: "कक्षा 10",
      leadership: "नेतृत्व",
      facultyDirectory: "शिक्षक निर्देशिका",
      downloadTimetablesMobile: "मोबाइल पर समय सारणी डाउनलोड करें:",
      grade1Timetable: "कक्षा 1 समय सारणी",
      grade5Timetable: "कक्षा 5 समय सारणी",
      grade10Timetable: "कक्षा 10 समय सारणी",
      time: "समय",
      mon: "सोम",
      tue: "मंगल",
      wed: "बुध",
      thu: "गुरु",
      fri: "शुक्र",
      break: "विराम",
      admissionsIntro:
        "शैक्षणिक वर्ष 2025–26 के लिए आवेदन करने के लिए नीचे दिए गए चरणों का पालन करें।",
      downloadProspectus: "प्रोस्पेक्टस डाउनलोड करें",
      enquiry: "पूछताछ",
      enquiryText:
        "कृपया पूछताछ करें या एक निर्देशित दौरे के लिए हमारे परिसर का दौरा करें।",
      application: "आवेदन",
      applicationText:
        "ऑनलाइन प्रवेश फॉर्म भरें और आवश्यक दस्तावेज़ संलग्न करें।",
      assessment: "मूल्यांकन",
      assessmentText:
        "जैसा लागू हो, एक संक्षिप्त इंटरैक्शन/मूल्यांकन में भाग लें।",
      confirmation: "पुष्टि",
      confirmationText:
        "चयन होने पर, फीस का भुगतान करके प्रवेश की पुष्टि करें।",
      annualFeeStructure: "वार्षिक शुल्क संरचना",
      class: "कक्षा",
      annualFees: "वार्षिक शुल्क (₹)",
      std1to10: "कक्षा 1–10",
      std11to12Com: "कक्षा 11–12 वाणिज्य",
      std11to12Sci: "कक्षा 11–12 विज्ञान",
      faqTitle: "अक्सर पूछे जाने वाले प्रश्न",
      faq1q: "आस्था स्कूल की स्थापना राजकोट में कब हुई?",
      faq1a:
        "आस्था स्कूल 2013 से बच्चों को शिक्षित कर रहा है और शिक्षा क्षेत्र में अच्छी प्रतिष्ठा प्राप्त की है।",
      faq2q: "भारत में अलग-अलग शिक्षा बोर्ड कौन-कौन से हैं?",
      faq2a:
        "स्कूलों के विभिन्न शिक्षा बोर्ड CBSE, ICSE, IGCSE, IB, SSC आदि हैं।",
      faq3q: "क्या आस्था स्कूल पिक-अप और ड्रॉप सेवाएँ प्रदान करता है?",
      faq3a:
        "अधिकांश स्कूल दूर रहने वाले छात्रों के लिए बस सेवाएँ प्रदान करते हैं। अधिक जानकारी के लिए कृपया आस्था स्कूल से संपर्क करें।",
      faq4q:
        "मैं आस्था स्कूल में प्रवेश प्रक्रिया के बारे में कैसे पूछताछ कर सकता/सकती हूँ?",
      faq4a:
        "आस्था स्कूल में प्रवेश प्रक्रिया के बारे में पूछताछ करने के लिए, आप दिए गए नंबर पर कॉल कर सकते हैं या व्यक्तिगत रूप से परिसर का दौरा कर सकते हैं।",
      faq5q: "आस्था स्कूल में पढ़ाए जाने वाले अन्य विषय कौन-कौन से हैं?",
      faq5a:
        "आस्था स्कूल में गणित, विज्ञान, इतिहास, हिंदी आदि विषय पढ़ाए जाते हैं। हालांकि, विषय स्कूल बोर्ड के अनुसार भिन्न हो सकते हैं। विस्तृत जानकारी के लिए कृपया आस्था स्कूल से संपर्क करें।",
      eventsTab: "कार्यक्रम",
      noticesTab: "सूचनाएँ",
      details: "विवरण",
      posted: "प्रकाशित",
      tagline: "मस्तिष्कों को पोषित करना, भविष्य को प्रेरित करना।",
      contactViaGoogleForm: "गूगल फ़ॉर्म द्वारा संपर्क करें",
      contactIntro:
        "प्रवेश, शैक्षणिक या हमारे परिसर की यात्रा के बारे में कोई प्रश्न है? कृपया हमारा गूगल फ़ॉर्म उपयोग करें और हमारा कार्यालय आपसे संपर्क करेगा।",
      openGoogleForm: "गूगल फ़ॉर्म खोलें",
      openGoogleFormAria: "नए टैब में गूगल फ़ॉर्म खोलें",
      opensInNewTab: "यह नए टैब में खुलता है।",
      schoolOffice: "स्कूल कार्यालय",
    },
    gu: {
      schoolName: "આસ્થા સંકુલ",
      followUs: "અમને અનુસરો",
      emailAddress: "ઇમેઇલ સરનામું",
      home: "હોમ",
      about: "પરિચય",
      academics: "શૈક્ષણિક",
      admissions: "પ્રવેશ",
      gallery: "ગેલેરી",
      events: "પ્રસંગો અને સૂચનાઓ",
      contact: "સંપર્ક કરો",
      applyNow: "હમણાં અરજી કરો",
      learnMore: "વધુ જાણો",
      admissionsOpen: "પ્રવેશ ખુલ્લા છે",
      applyForYear: "શૈક્ષણિક વર્ષ 2025–26 માટે અરજી કરો",
      start: "શરૂઆત",
      hotline: "હોટલાઇન:",
      callUs: "કૉલ કરો",
      noticeBoard: "નોટિસ બોર્ડ:",
      latestUpdates: "નવીનતમ અપડેટ્સ",
      overview: "ઝાંખી",
      curriculum: "પાઠ્યક્રમ",
      faculty: "શિક્ષકમંડળ",
      timetable: "સમયપત્રક",
      testimonials: "પ્રશંસાપત્રો",
      quickLinks: "ઝડપી લિંક્સ",
      subscribe: "સબ્સ્ક્રાઇબ કરો",
      newsletter: "ન્યૂઝલેટર",
      newsletterIntro: "પ્રવેશ, પ્રસંગો અને સૂચનાઓ વિશે અપડેટ્સ મેળવો.",
      newsletterPlaceholder: "તમારો ઇમેલ દાખલ કરો",
      allRightsReserved: "સર્વ હકો અધિકૃત.",
      all: "બધા",
      primary: "પ્રાથમિક (1–5)",
      middle: "મિડલ (6–8)",
      secondary: "સેકન્ડરી (9–10)",
      seniorSci: "સીનિયર સાયન્સ (11–12)",
      seniorCom: "સીનિયર કોમર્સ (11–12)",
      aboutUs: "અમારા વિશે",
      ourMission: "અમારું મિશન",
      missionText:
        "દરેક શીખનારને પ્રેરણાદાયક શિક્ષણ અને કાળજીભર્યા સમુદાય દ્વારા જ્ઞાન, સ્વભાવ અને સર્જનાત્મકતા સાથે સશક્ત બનાવવું.",
      ourVision: "અમારું વિઝન",
      visionText:
        "એક બેંચમાર્ક સંસ્થા બનવી જે ઉત્સુક માનસ અને જવાબદાર નાગરિકોને ઉત્તમ વિશ્વ ઘડવા તૈયાર કરે.",
      principalsMessage: "પ્રિન્સિપાલનો સંદેશ",
      principalMessageText:
        "આસ્થામાં, શીખવું આનંદદાયક અને હેતુપૂર્ણ છે. અમે તમને અમારા જીવંત કેમ્પસની મુલાકાત લેવા અને આયુષ્યભર શીખવા માટેનું ઘર શોધવા આમંત્રિત કરીએ છીએ.",
      academicsOverview: "શૈક્ષણિક ઝાંખી",
      academicsOverviewText: "કાર્યક્રમો અને ધોરણોની ઝલક.",
      grade1: "ધોરણ 1",
      grade5: "ધોરણ 5",
      grade10: "ધોરણ 10",
      leadership: "નેતૃત્વ",
      facultyDirectory: "શિક્ષક નિયામાવલી",
      downloadTimetablesMobile: "મોબાઇલ પર સમયપત્રક ડાઉનલોડ કરો:",
      grade1Timetable: "ધોરણ 1 સમયપત્રક",
      grade5Timetable: "ધોરણ 5 સમયપત્રક",
      grade10Timetable: "ધોરણ 10 સમયપત્રક",
      time: "સમય",
      mon: "સોમ",
      tue: "મંગળ",
      wed: "બુધ",
      thu: "ગુરુ",
      fri: "શુક્ર",
      break: "વિરામ",
      admissionsIntro:
        "શૈક્ષણિક વર્ષ 2025–26 માટે અરજી કરવા માટે નીચેના પગલાં અનુસરો.",
      downloadProspectus: "પ્રોસ્પેક્ટસ ડાઉનલોડ કરો",
      enquiry: "પૂછપરછ",
      enquiryText:
        "કૃપા કરીને પૂછપરછ કરો અથવા માર્ગદર્શિત પ્રવાસ માટે અમારા કેમ્પસની મુલાકાત લો.",
      application: "અરજી",
      applicationText: "ઓનલાઇન પ્રવેશ ફોર્મ ભરો અને જરૂરી દસ્તાવેજો જોડો.",
      assessment: "મૂલ્યાંકન",
      assessmentText: "લાગુ પડે ત્યાં ટૂંકા ઇન્ટરેક્ટશન/મૂલ્યાંકનમાં ભાગ લો.",
      confirmation: "પુષ્ટિ",
      confirmationText: "પસંદગી થયા બાદ, ફી ચૂકવીને પ્રવેશની પુષ્ટિ કરો.",
      annualFeeStructure: "વાર્ષિક ફી માળખું",
      class: "વર્ગ",
      annualFees: "વાર્ષિક ફી (₹)",
      std1to10: "ધોરણ 1–10",
      std11to12Com: "ધોરણ 11–12 કોમર્સ",
      std11to12Sci: "ધોરણ 11–12 સાયન્સ",
      faqTitle: "વારંવાર પૂછાતા પ્રશ્નો",
      faq1q: "આસ્થા સ્કૂલની સ્થાપના રાજકોટમાં ક્યારે થઈ?",
      faq1a:
        "આસ્થા સ્કૂલે 2013 થી બાળકોને શિક્ષિત કર્યા છે અને શિક્ષણ ક્ષેત્રમાં સારી પ્રતિષ્ઠા મેળવી છે.",
      faq2q: "ભારતમાં અલગ-અલગ શિક્ષણ બોર્ડ કયા છે?",
      faq2a: "શાળાના વિવિધ શિક્ષણ બોર્ડ CBSE, ICSE, IGCSE, IB, SSC વગેરે છે.",
      faq3q: "શું આસ્થા સ્કૂલ પિક-અપ અને ડ્રોપ સેવાઓ આપે છે?",
      faq3a:
        "ઘણા સ્કૂલો દૂર રહેતા વિદ્યાર્થીઓ માટે બસ સેવાઓ આપે છે. વધુ વિગતો માટે કૃપા કરીને આस्था સ્કૂલનો સંપર્ક કરો.",
      faq4q:
        "હું આસ્થા સ્કૂલમાં પ્રવેશ પ્રક્રિયા વિશે કેવી રીતે પૂછપરછ કરી શકું?",
      faq4a:
        "આસ્થા સ્કૂલમાં પ્રવેશ પ્રક્રિયા વિશે પૂછપરછ કરવા માટે, તમે આપેલ નંબર પર કૉલ કરી શકો છો અથવા વ્યક્તિગત રીતે કેમ્પસની મુલાકાત લઈ શકો છો.",
      faq5q: "આસ્થા સ્કૂલમાં શીખવાતા અન્ય વિષયો કયા છે?",
      faq5a:
        "આથા સ્કૂલમાં ગણિત, વિજ્ઞાન, ઇતિહાસ, હિન્દી વગેરે વિષયો શીખવાય છે. તેમ છતાં, વિષયો શાળા બોર્ડ અનુસાર બદલાઈ શકે છે. કૃપા કરીને વિગતવાર માહિતી માટે આસ્થા સ્કૂલનો સંપર્ક કરો.",
      eventsTab: "પ્રસંગો",
      noticesTab: "સૂચનાઓ",
      details: "વિગતો",
      posted: "પ્રકાશિત",
      tagline: "મનોમંદિરોને પોષણ આપવું, ભવિષ્યને પ્રેરિત કરવું.",
      contactViaGoogleForm: "ગૂગલ ફોર્મ દ્વારા સંપર્ક કરો",
      contactIntro:
        "પ્રવેશ, શૈક્ષણિક અથવા અમારા કેમ્પસની મુલાકાત વિશે કોઇ પ્રશ્ન છે? કૃપા કરીને અમારું ગૂગલ ફોર્મ ઉપયોગ કરો અને અમારું કચેરી તમને સંપર્ક કરશે.",
      openGoogleForm: "ગૂગલ ફોર્મ ખોલો",
      openGoogleFormAria: "નવા ટેબમાં ગૂગલ ફોર્મ ખોલો",
      opensInNewTab: "આ નવું ટેબમાં ખૂલશે.",
      schoolOffice: "સ્કૂલ ઓફિસ",
    },
  };
  function initLoco() {
    if (!window.LocomotiveScroll) {
      console.warn("[LocomotiveScroll] not found. Check CDN.");
      return;
    }

    const container = document.querySelector("[data-scroll-container]");
    if (!container) {
      console.warn(
        "[LocomotiveScroll] No element with [data-scroll-container]"
      );
      return;
    }

    // eslint-disable-next-line no-undef
    const scroll = new LocomotiveScroll({
      el: container,
      smooth: true,
      multiplier: 1,
      smartphone: { smooth: true },
      tablet: { smooth: true },
    });

    // Example: clicking anchors with data-scroll-to will scroll to target
    const getNavOffset = () => {
      const nav = document.querySelector(".site-nav");
      return nav ? nav.offsetHeight : 0;
    };

    document.querySelectorAll("[data-scroll-to]").forEach((link) => {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");
        if (href && href.startsWith("#")) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            scroll.scrollTo(target, { offset: -getNavOffset() });
            // close mobile menu after selection
            const menu = document.getElementById("nav-menu");
            if (menu && menu.classList.contains("open")) {
              menu.classList.remove("open");
              const toggle = document.querySelector(".nav-toggle");
              toggle && toggle.setAttribute("aria-expanded", "false");
            }
          }
        }
      });
    });

    // Expose for debugging
    window.__loco = scroll;

    // Update after all assets load to ensure correct measurements (e.g., hero image)
    window.addEventListener("load", () => {
      try {
        scroll.update();
      } catch (e) {}
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initLoco);
  } else {
    initLoco();
  }

  // Admissions form + FAQ
  function initAdmissions() {
    const form = document.getElementById("admission-form");
    if (form) {
      const status = form.querySelector(".form-status");
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        let valid = true;
        const name = form.querySelector("#applicant-name");
        const email = form.querySelector("#applicant-email");
        const klass = form.querySelector("#apply-class");
        const file = form.querySelector("#docs");

        // helper
        const setError = (el, msg) => {
          const err = el.parentElement.querySelector(".error-text");
          el.classList.add("error");
          if (err) err.textContent = msg || "Required field";
        };
        const clearError = (el) => {
          const err = el.parentElement.querySelector(".error-text");
          el.classList.remove("error");
          if (err) err.textContent = "";
        };

        // Name
        if (!name.value.trim()) {
          setError(name, "Please enter full name");
          valid = false;
        } else {
          clearError(name);
        }
        // Email
        const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim() || !emailRe.test(email.value)) {
          setError(email, "Enter a valid email");
          valid = false;
        } else {
          clearError(email);
        }
        // Class
        if (!klass.value) {
          setError(klass, "Select a class");
          valid = false;
        } else {
          clearError(klass);
        }
        // File
        if (!file.files || !file.files.length) {
          setError(file, "Please upload a document");
          valid = false;
        } else {
          clearError(file);
        }

        if (!valid) {
          status &&
            (status.textContent = "Please correct the highlighted fields.");
          return;
        }

        status && (status.textContent = "Submitting...");
        // Simulate submission
        setTimeout(() => {
          status &&
            (status.textContent =
              "Application submitted successfully. We will contact you soon.");
          form.reset();
          if (window.__loco && typeof window.__loco.update === "function")
            window.__loco.update();
        }, 600);
      });
    }

    // FAQ accordion
    document.querySelectorAll(".faq-q").forEach((btn) => {
      btn.addEventListener("click", () => {
        const expanded = btn.getAttribute("aria-expanded") === "true";
        const contentId = btn.getAttribute("aria-controls");
        const content = contentId && document.getElementById(contentId);
        btn.setAttribute("aria-expanded", String(!expanded));
        if (content) content.toggleAttribute("hidden", expanded);
        if (window.__loco && typeof window.__loco.update === "function") {
          // Wait for CSS to settle
          setTimeout(() => window.__loco.update(), 50);
        }
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAdmissions);
  } else {
    initAdmissions();
  }

  // Nav interactions (outside of loco init)
  function initNav() {
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.getElementById("nav-menu");
    const themeToggle = document.querySelector(".theme-toggle");
    const dropdownParent = document.querySelector(".has-dropdown");
    const dropdownBtn = dropdownParent?.querySelector(".dropdown-toggle");

    // Mobile menu toggle
    if (navToggle && navMenu) {
      navToggle.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("open");
        navToggle.setAttribute("aria-expanded", String(isOpen));
        // Body scroll lock when overlay menu is open
        if (isOpen) {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "";
        }
      });
    }

    // Dropdown toggle
    if (dropdownParent && dropdownBtn) {
      dropdownBtn.addEventListener("click", (e) => {
        const nowOpen = dropdownParent.classList.toggle("open");
        dropdownBtn.setAttribute("aria-expanded", String(nowOpen));
      });

      // Close dropdown when clicking outside
      document.addEventListener("click", (e) => {
        if (!dropdownParent.contains(e.target)) {
          dropdownParent.classList.remove("open");
          dropdownBtn.setAttribute("aria-expanded", "false");
        }
      });
    }

    // Close mobile menu when clicking any nav link (overlay style)
    document.querySelectorAll("#nav-menu a[data-scroll-to]").forEach((a) => {
      a.addEventListener("click", () => {
        if (navMenu && navMenu.classList.contains("open")) {
          navMenu.classList.remove("open");
          navToggle && navToggle.setAttribute("aria-expanded", "false");
          document.body.style.overflow = "";
        }
      });
    });

    // Close when clicking outside the menu items (overlay area)
    if (navMenu) {
      navMenu.addEventListener("click", (e) => {
        // If the click target is the container itself, not a link/button
        const target = e.target;
        const isInteractive = target.closest("a, button, .dropdown");
        if (!isInteractive && navMenu.classList.contains("open")) {
          navMenu.classList.remove("open");
          navToggle && navToggle.setAttribute("aria-expanded", "false");
          document.body.style.overflow = "";
        }
      });
    }

    // Theme toggle
    const root = document.documentElement;
    const applyTheme = (theme) => {
      root.setAttribute("data-theme", theme);
      // Icons are handled via CSS based on [data-theme]
    };
    const stored = localStorage.getItem("theme") || "dark";
    applyTheme(stored);
    if (themeToggle) {
      themeToggle.addEventListener("click", () => {
        const current = root.getAttribute("data-theme") || "dark";
        const next = current === "light" ? "dark" : "light";
        localStorage.setItem("theme", next);
        applyTheme(next);
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initNav);
  } else {
    initNav();
  }

  // Curriculum tabs
  function initTabs() {
    const tabs = document.querySelectorAll(".tabs");
    if (!tabs.length) return;

    tabs.forEach((tabsEl) => {
      const tabButtons = tabsEl.querySelectorAll('[role="tab"]');
      const panels = tabsEl.querySelectorAll('[role="tabpanel"]');

      function selectTab(targetId) {
        tabButtons.forEach((btn) => {
          const selected = btn.getAttribute("aria-controls") === targetId;
          btn.setAttribute("aria-selected", String(selected));
        });
        panels.forEach((p) => {
          const isTarget = p.id === targetId;
          p.toggleAttribute("hidden", !isTarget);
        });
        // refresh locomotive if present
        if (window.__loco && typeof window.__loco.update === "function") {
          window.__loco.update();
        }
      }

      tabButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
          const targetId = btn.getAttribute("aria-controls");
          if (targetId) selectTab(targetId);
        });
        btn.addEventListener("keydown", (e) => {
          // simple left/right arrow navigation
          if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
            const arr = Array.from(tabButtons);
            const i = arr.indexOf(btn);
            const nextIndex =
              e.key === "ArrowRight"
                ? (i + 1) % arr.length
                : (i - 1 + arr.length) % arr.length;
            const next = arr[nextIndex];
            next.focus();
          }
        });
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTabs);
  } else {
    initTabs();
  }

  // Testimonials Swiper
  function initTestimonials() {
    if (!window.Swiper) return;
    const el = document.querySelector(".testimonial-swiper");
    if (!el) return;
    const swiper = new Swiper(el, {
      slidesPerView: 1,
      spaceBetween: 16,
      loop: true,
      autoplay: { delay: 4500, disableOnInteraction: false },
      pagination: { el: ".swiper-pagination", clickable: true },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: { 768: { slidesPerView: 2 }, 1100: { slidesPerView: 3 } },
      on: {
        slideChange: () => {
          if (window.__loco && typeof window.__loco.update === "function") {
            setTimeout(() => window.__loco.update(), 50);
          }
        },
      },
    });
    // expose for debugging
    window.__swiperTestimonials = swiper;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTestimonials);
  } else {
    initTestimonials();
  }

  // Contact form validation
  function initContact() {
    const form = document.getElementById("contact-form");
    if (!form) return;
    const status = form.querySelector(".form-status");

    const setError = (el, msg) => {
      const err = el.parentElement.querySelector(".error-text");
      el.classList.add("error");
      if (err) err.textContent = msg || "Required field";
    };
    const clearError = (el) => {
      const err = el.parentElement.querySelector(".error-text");
      el.classList.remove("error");
      if (err) err.textContent = "";
    };

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = form.querySelector("#contact-name");
      const email = form.querySelector("#contact-email");
      const phone = form.querySelector("#contact-phone");
      const msg = form.querySelector("#contact-message");
      let valid = true;

      // Name
      if (!name.value.trim()) {
        setError(name, "Please enter your name");
        valid = false;
      } else {
        clearError(name);
      }
      // Email
      const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value.trim() || !emailRe.test(email.value)) {
        setError(email, "Enter a valid email address");
        valid = false;
      } else {
        clearError(email);
      }
      // Phone (basic validation for 10+ digits, allows + and spaces)
      const phoneDigits = phone.value.replace(/[^\d]/g, "");
      if (!phone.value.trim() || phoneDigits.length < 10) {
        setError(phone, "Enter a valid phone number");
        valid = false;
      } else {
        clearError(phone);
      }
      // Message
      if (!msg.value.trim() || msg.value.trim().length < 10) {
        setError(msg, "Please enter at least 10 characters");
        valid = false;
      } else {
        clearError(msg);
      }

      if (!valid) {
        status &&
          (status.textContent = "Please correct the highlighted fields.");
        return;
      }

      status && (status.textContent = "Sending message...");
      setTimeout(() => {
        status && (status.textContent = "Thanks! Your message has been sent.");
        form.reset();
        if (window.__loco && typeof window.__loco.update === "function")
          window.__loco.update();
      }, 600);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initContact);
  } else {
    initContact();
  }

  // Faculty filter
  function initFacultyFilter() {
    const bar = document.querySelector("#faculty .filter-bar");
    const grid = document.getElementById("faculty-grid");
    if (!bar || !grid) return;
    const buttons = bar.querySelectorAll("[data-filter]");
    const cards = grid.querySelectorAll(".teacher-card");

    function applyFilter(key) {
      cards.forEach((card) => {
        const group = card.getAttribute("data-group") || "all";
        const show = key === "all" || group === key;
        card.style.display = show ? "" : "none";
      });
      if (window.__loco && typeof window.__loco.update === "function") {
        setTimeout(() => window.__loco.update(), 50);
      }
    }

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        buttons.forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");
        const key = btn.getAttribute("data-filter") || "all";
        applyFilter(key);
      });
    });
  }
  // Timetable filter
  function initTimetableFilter() {
    const section = document.getElementById("timetable");
    if (!section) return;
    const bar = section.querySelector(".filter-bar");
    const setsWrap = section.querySelector("#timetable-sets");
    if (!bar || !setsWrap) return;
    const buttons = bar.querySelectorAll("[data-filter]");
    const sets = setsWrap.querySelectorAll(".timetable-set");

    function showSet(key) {
      sets.forEach((set) => {
        const group = set.getAttribute("data-group");
        set.classList.toggle("is-active", group === key);
      });
      if (window.__loco && typeof window.__loco.update === "function") {
        setTimeout(() => window.__loco.update(), 50);
      }
    }

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        buttons.forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");
        const key = btn.getAttribute("data-filter");
        showSet(key);
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTimetableFilter);
  } else {
    initTimetableFilter();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initFacultyFilter);
  } else {
    initFacultyFilter();
  }

  // Event details modal
  function initEventModal() {
    const overlay = document.querySelector(".event-modal-overlay");
    const modal = document.querySelector(".event-modal");
    if (!overlay || !modal) return;
    const titleEl = document.getElementById("event-modal-title");
    const imgs = overlay.querySelectorAll(".event-modal-gallery img");
    const p1 = overlay.querySelector(".event-modal-text .p1");
    const p2 = overlay.querySelector(".event-modal-text .p2");
    const closeBtn = modal.querySelector(".event-modal-close");

    const open = (data) => {
      if (titleEl) titleEl.textContent = data.title || "";
      if (imgs && imgs.length >= 3) {
        imgs[0].src = data.img1 || "";
        imgs[1].src = data.img2 || "";
        imgs[2].src = data.img3 || "";
      }
      if (p1) p1.textContent = data.p1 || "";
      if (p2) p2.textContent = data.p2 || "";
      overlay.classList.add("open");
      overlay.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      closeBtn && closeBtn.focus();
    };

    const close = () => {
      overlay.classList.remove("open");
      overlay.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    };

    closeBtn && closeBtn.addEventListener("click", close);
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) close();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && overlay.classList.contains("open")) close();
    });

    document
      .querySelectorAll("#events .event-card .event-cta")
      .forEach((btn) => {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          const card = btn.closest(".event-card");
          if (!card) return;
          open({
            title: card.getAttribute("data-title"),
            img1: card.getAttribute("data-img1"),
            img2: card.getAttribute("data-img2"),
            img3: card.getAttribute("data-img3"),
            p1: card.getAttribute("data-p1"),
            p2: card.getAttribute("data-p2"),
          });
        });
      });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initEventModal);
  } else {
    initEventModal();
  }

  // Gallery: lightbox and media handling
  function initGallery() {
    const gallery = document.querySelector("#gallery .masonry");
    const overlay = document.querySelector(".lightbox-overlay");
    const mediaWrap = document.querySelector(".lightbox-media");
    const titleEl = document.querySelector(".lightbox-title");
    const closeBtn = document.querySelector(".lightbox-close");
    if (!gallery || !overlay || !mediaWrap || !titleEl || !closeBtn) return;

    const openLightbox = (type, src, title) => {
      mediaWrap.innerHTML = "";
      let el;
      if (type === "image") {
        el = new Image();
        el.src = src;
        el.alt = title || "Gallery image";
        el.addEventListener("load", () => {
          if (window.__loco && typeof window.__loco.update === "function")
            window.__loco.update();
        });
      } else if (type === "youtube") {
        // Convert to embed URL - support multiple URL formats
        const getYouTubeId = (url) => {
          try {
            const u = new URL(url);
            // Standard watch?v=
            if (u.searchParams.get("v")) return u.searchParams.get("v");
            // youtu.be/<id>
            if (u.hostname.includes("youtu.be"))
              return u.pathname.split("/").filter(Boolean)[0];
            // /shorts/<id>
            if (u.pathname.startsWith("/shorts/"))
              return u.pathname.split("/")[2];
            // /embed/<id>
            if (u.pathname.startsWith("/embed/"))
              return u.pathname.split("/")[2];
          } catch (e) {
            // Fallback to regex
            const m = url.match(
              /(?:v=|youtu\.be\/|shorts\/|embed\/)([\w-]{6,})/
            );
            return m && m[1];
          }
        };
        const id = getYouTubeId(src);
        const embed = id
          ? `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&playsinline=1&autoplay=1`
          : src;
        el = document.createElement("iframe");
        el.src = embed;
        el.allow =
          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        el.allowFullscreen = true;
        el.title = title || "YouTube video";
        el.addEventListener("load", () => {
          if (window.__loco && typeof window.__loco.update === "function")
            window.__loco.update();
        });
      } else if (type === "video") {
        el = document.createElement("video");
        el.src = src;
        el.controls = true;
        el.autoplay = true;
        el.playsInline = true;
        el.addEventListener("loadeddata", () => {
          if (window.__loco && typeof window.__loco.update === "function")
            window.__loco.update();
        });
      } else if (type === "insta") {
        // Instagram Reel embed via /embed endpoint
        const getInstaEmbedUrl = (url) => {
          try {
            const u = new URL(url);
            // Normalize to /reel/<id>/embed or /p/<id>/embed
            const parts = u.pathname.split("/").filter(Boolean);
            const typePart = parts[0];
            const idPart = parts[1];
            if (typePart && idPart) {
              const kind =
                typePart === "p" || typePart === "reel" ? typePart : "reel";
              return `https://www.instagram.com/${kind}/${idPart}/embed`;
            }
          } catch (e) {
            // Fallback try to regex extract id
            const m = url.match(/instagram\.com\/(?:reel|p)\/([\w-]+)/);
            if (m && m[1])
              return `https://www.instagram.com/reel/${m[1]}/embed`;
          }
          return url; // last resort
        };
        const embed = getInstaEmbedUrl(src);
        el = document.createElement("iframe");
        el.src = embed;
        el.allow =
          "autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share";
        el.allowFullscreen = true;
        el.title = title || "Instagram Reel";
        // Recommended attributes for responsive height
        el.style.width = "min(90vw, 720px)";
        el.style.aspectRatio = "9 / 16";
        el.addEventListener("load", () => {
          if (window.__loco && typeof window.__loco.update === "function")
            window.__loco.update();
        });
      }
      if (!el) return;
      el.style.maxHeight = "78vh";
      mediaWrap.appendChild(el);
      titleEl.textContent = title || "";
      overlay.classList.add("open");
      document.body.style.overflow = "hidden"; // prevent body scroll under overlay
    };

    const closeLightbox = () => {
      overlay.classList.remove("open");
      mediaWrap.innerHTML = "";
      titleEl.textContent = "";
      document.body.style.overflow = "";
    };

    gallery.addEventListener("click", (e) => {
      const link = e.target.closest(".masonry-item");
      if (!link) return;
      // Do not open lightbox for directly embedded media
      if (link.classList.contains("is-embed")) return;
      e.preventDefault();
      const type = link.getAttribute("data-type") || "image";
      const src = link.getAttribute("data-src");
      const title = link.getAttribute("data-title") || "";
      if (src) openLightbox(type, src, title);
    });

    // Hover-to-play (and tap-to-play) for performance
    const toEmbedSrc = {
      youtube: (url) => {
        // convert to embed with autoplay/mute/loop
        const getId = (u) => {
          try {
            const x = new URL(u);
            if (x.searchParams.get("v")) return x.searchParams.get("v");
            if (x.hostname.includes("youtu.be"))
              return x.pathname.split("/").filter(Boolean)[0];
            if (x.pathname.startsWith("/shorts/"))
              return x.pathname.split("/")[2];
            if (x.pathname.startsWith("/embed/"))
              return x.pathname.split("/")[2];
          } catch (e) {
            const m = u.match(/(?:v=|youtu\.be\/|shorts\/|embed\/)([\w-]{6,})/);
            return m && m[1];
          }
        };
        const id = getId(url);
        return id
          ? `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&playsinline=1&autoplay=1&mute=1&loop=1&playlist=${id}`
          : url;
      },
      insta: (url) => {
        try {
          const u = new URL(url);
          const parts = u.pathname.split("/").filter(Boolean);
          const typePart = parts[0];
          const idPart = parts[1];
          if (typePart && idPart) {
            const kind =
              typePart === "p" || typePart === "reel" ? typePart : "reel";
            return `https://www.instagram.com/${kind}/${idPart}/embed`;
          }
        } catch (e) {
          const m = url.match(/instagram\.com\/(?:reel|p)\/([\w-]+)/);
          if (m && m[1]) return `https://www.instagram.com/reel/${m[1]}/embed`;
        }
        return url;
      },
    };

    const createIframe = (type, src, title, ratioEl) => {
      const iframe = document.createElement("iframe");
      iframe.src = toEmbedSrc[type] ? toEmbedSrc[type](src) : src;
      iframe.title =
        title || (type === "youtube" ? "YouTube video" : "Instagram Reel");
      iframe.allow =
        type === "youtube"
          ? "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          : "autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share";
      iframe.allowFullscreen = true;
      iframe.setAttribute("data-embed", "true");
      ratioEl.classList.add("is-embed");
      // Ensure aspect ratio via CSS class on figure already present (ratio-9x16 or ratio-16x9)
      ratioEl.innerHTML = ""; // clear skeleton and badge
      ratioEl.appendChild(iframe);
      return iframe;
    };

    const destroyIframe = (figureEl) => {
      const iframe = figureEl.querySelector("iframe[data-embed]");
      if (iframe) iframe.remove();
      figureEl.classList.remove("is-embed");
      // Restore skeleton + badge for visual consistency
      const skel = document.createElement("div");
      skel.className = "video-skeleton";
      const badge = document.createElement("div");
      badge.className = "play-badge";
      badge.innerHTML = '<i class="fa-solid fa-play"></i>';
      figureEl.appendChild(skel);
      figureEl.appendChild(badge);
    };

    const onEnter = (tile) => {
      const type = tile.getAttribute("data-type");
      if (!(type === "youtube" || type === "insta")) return;
      const src = tile.getAttribute("data-src");
      const title = tile.getAttribute("data-title") || "";
      const fig = tile.querySelector("figure");
      if (!fig || fig.querySelector("iframe[data-embed]")) return;
      createIframe(type, src, title, fig);
    };
    const onLeave = (tile) => {
      const fig = tile.querySelector("figure");
      if (!fig) return;
      destroyIframe(fig);
    };

    // Attach hover listeners (mouse) and tap (touchstart) to toggle play
    gallery.querySelectorAll(".masonry-item.video").forEach((tile) => {
      tile.addEventListener("mouseenter", () => onEnter(tile));
      tile.addEventListener("mouseleave", () => onLeave(tile));
      // For touch devices: first tap plays, second tap stops
      tile.addEventListener(
        "touchstart",
        (e) => {
          const fig = tile.querySelector("figure");
          if (!fig) return;
          const has = !!fig.querySelector("iframe[data-embed]");
          if (!has) onEnter(tile);
          else onLeave(tile);
          // prevent 300ms delays and synthetic mouse events
          e.preventDefault();
        },
        { passive: false }
      );
    });

    closeBtn.addEventListener("click", closeLightbox);
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeLightbox();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && overlay.classList.contains("open")) {
        closeLightbox();
      }
    });

    // Update Locomotive after images load to correct layout
    document.querySelectorAll("#gallery img[loading='lazy']").forEach((img) => {
      img.addEventListener("load", () => {
        if (window.__loco && typeof window.__loco.update === "function") {
          window.__loco.update();
        }
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initGallery);
  } else {
    initGallery();
  }

  // Footer: year + newsletter
  function initFooter() {
    const yearEl = document.getElementById("year");
    if (yearEl) {
      yearEl.textContent = String(new Date().getFullYear());
    }

    const form = document.getElementById("newsletter-form");
    if (!form) return;
    const email = form.querySelector("#newsletter-email");
    const error = form.querySelector(".error-text");
    const status = form.querySelector(".form-status");
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      error && (error.textContent = "");
      status && (status.textContent = "");
      if (!email.value.trim() || !emailRe.test(email.value)) {
        if (error) error.textContent = "Please enter a valid email address";
        email.classList.add("error");
        return;
      }
      email.classList.remove("error");
      status && (status.textContent = "Subscribing...");
      setTimeout(() => {
        status && (status.textContent = "You're subscribed! Welcome.");
        form.reset();
      }, 600);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initFooter);
  } else {
    initFooter();
  }

  // Highlights: mobile swiper + media load updates
  function initHighlights() {
    // Update loco when posters load
    document
      .querySelectorAll('.highlights img[loading="lazy"], .highlights video')
      .forEach((m) => {
        m.addEventListener("load", () => {
          if (window.__loco && typeof window.__loco.update === "function")
            window.__loco.update();
        });
        // video 'loadeddata' for initial frame
        m.addEventListener &&
          m.addEventListener("loadeddata", () => {
            if (window.__loco && typeof window.__loco.update === "function")
              window.__loco.update();
          });
      });

    // Initialize Swiper only when visible (mobile)
    const swiperEl = document.querySelector(".highlights .highlights-swiper");
    if (
      swiperEl &&
      window.getComputedStyle(swiperEl).display !== "none" &&
      window.Swiper
    ) {
      const swiper = new Swiper(swiperEl, {
        slidesPerView: 1.1,
        spaceBetween: 12,
        centeredSlides: true,
        pagination: { el: ".highlights .swiper-pagination", clickable: true },
        on: {
          slideChange: () => {
            if (window.__loco && typeof window.__loco.update === "function")
              setTimeout(() => window.__loco.update(), 50);
          },
        },
      });
      window.__swiperHighlights = swiper;
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initHighlights);
  } else {
    initHighlights();
  }

  // Highlights hero background slider
  function initHighlightsHero() {
    const el = document.getElementById("highlights-swiper");
    if (!el || !window.Swiper) return;
    const swiper = new Swiper(el, {
      effect: "fade",
      fadeEffect: { crossFade: true },
      loop: true,
      autoplay: { delay: 3500, disableOnInteraction: false },
      speed: 800,
      allowTouchMove: false,
      on: {
        slideChangeTransitionStart: () => {
          // pause all videos
          el.querySelectorAll("video").forEach((v) => {
            try {
              v.pause();
              v.currentTime = 0;
            } catch (e) {}
          });
        },
        slideChangeTransitionEnd: () => {
          // play video if active slide has one
          const active = el.querySelector(".swiper-slide-active");
          const video = active && active.querySelector("video");
          if (video) {
            try {
              video.play();
            } catch (e) {}
          }
          if (window.__loco && typeof window.__loco.update === "function") {
            setTimeout(() => window.__loco.update(), 50);
          }
        },
      },
    });
    window.__swiperHighlightsHero = swiper;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initHighlightsHero);
  } else {
    initHighlightsHero();
  }
})();
