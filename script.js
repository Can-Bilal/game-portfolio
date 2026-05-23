const header = document.querySelector("[data-header]");
const revealItems = document.querySelectorAll("[data-reveal]");
const tiltItems = document.querySelectorAll(".mission-card, .lab-card, .focus-card, .hud-panel");
const yearNode = document.querySelector("[data-year]");
const languageButtons = document.querySelectorAll("[data-lang-button]");
const metaDescription = document.querySelector("#meta-description");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const translations = {
  tr: {
    metaTitle: "Can Bilal Sipahi | Game Dev Portfolio",
    metaDescription:
      "Can Bilal Sipahi'nin oyun geliştirme, AI prototipleme ve Unity odaklı pixel-HUD estetiğindeki portfolyo sitesi.",
    brandRole: "Unity Developer / AI Builder",
    navProjects: "Projeler",
    navTimeline: "Timeline",
    navFocus: "Odak",
    navContact: "İletişim",
    heroLabel: "Player One / Portfolio",
    heroTitle: "Portfolyom",
    heroCopy:
      "Ben <strong>Can Bilal Sipahi</strong>. Unity ile oynanış prototipleri, Python ile AI araçları ve gerçek problemi çözen yazılım sistemleri geliştiriyorum. Bu sayfada itch.io oyunlarımı, CV'mdeki projeleri ve GitHub üretim çizgimi daha oyun hissi taşıyan bir arayüzle topladım.",
    heroPrimaryCta: "Projeleri aç",
    heroSecondaryCta: "CV indir",
    heroTagOne: "Unity prototipleri",
    heroTagTwo: "itch.io yayınları",
    heroTagThree: "AI ve veri odaklı projeler",
    playerInfo: "Oyuncu Bilgisi",
    activeBuild: "Aktif Build",
    energyLabel: "Enerji seviyesi",
    unityGameplay: "Unity Gameplay",
    generativeAi: "Generative AI",
    problemSolving: "Problem Çözme",
    chipLocation: "İstanbul / Avcılar",
    chipLanguage: "İngilizce B1",
    chipTarget: "Staj / Junior",
    chipStack: "Unity + Python",
    projectsLabel: "Mission Select",
    projectsTitle: "Projeler",
    gamesLabel: "Game Track",
    gamesTitle: "Oyun Projeleri",
    gamesIntro: "itch.io ve jam tarafındaki yayınlanmış ya da oynanabilir oyun projelerim.",
    g1MetaOne: "Android",
    g1MetaTwo: "Action Prototype",
    g1Desc:
      "Tek elle oynanabilen, hızlı tempolu bir bullet-heaven denemesi. Hayatta kalma döngüsü ve sci-fi yetenek hissine odaklanıyor.",
    g2MetaOne: "Windows",
    g2MetaTwo: "Team Build",
    g2Desc:
      "Takım halinde geliştirilen macera oyunu. Kısa sürede oynanabilir bir build çıkarma ve ekip içi karar alma pratiği kazandırdı.",
    g3MetaOne: "Windows",
    g3MetaTwo: "Level Design",
    g3Desc:
      "Yayınlanmış ekip projesi. 3D level design akışı ve oynanabilir hissi güçlendirme tarafında çalıştım.",
    g4MetaOne: "Puzzle",
    g4MetaTwo: "School Project",
    g4Title: "Kriptografi Oyunu",
    g4Desc:
      "Kriptoloji temasını oynanabilir ve didaktik olmayan bir puzzle deneyimine dönüştüren okul projesi.",
    viewOnItchio: "itch.io sayfası",
    openGamePage: "Oyun sayfası",
    openProject: "Projeyi aç",
    gamesArchiveMetaOne: "Game Library",
    gamesArchiveMetaTwo: "itch.io",
    gamesArchiveTitle: "itch.io Arşivi",
    gamesArchiveDesc:
      "Tüm oyun prototiplerini ve yayınları tek akışta görmek için ana oyun sayfama geçebilirsin.",
    openArchive: "Starter's Pack sayfası",
    otherLabel: "Other Track",
    otherTitle: "Diğer Projeler",
    otherIntro: "Oyun dışında çalıştığım AI, veri ve yazılım odaklı üretimler burada.",
    o1MetaOne: "Applied AI",
    o1MetaTwo: "Product System",
    o1Title: "TraktorGPS",
    o1Desc:
      "Toprak görseli analizi, veri birleştirme ve GPS tabanlı saha takibini aynı sistemde buluşturan gerçek dünya çözümü.",
    o1PointOne: "Toprak tipini görüntüden yorumlayan modül geliştirildi.",
    o1PointTwo: "Kullanıcı verisi ile eksiklik tespiti birleştirildi.",
    o1PointThree: "GPS ile traktör ve alan tarama takibi kuruldu.",
    openGithubProfile: "GitHub profilini aç",
    o2MetaOne: "AI Tooling",
    o2MetaTwo: "Unity Research",
    o2Desc:
      "Unity için 2D level üretmeye odaklanan GAN deneyi. Procedural content ile level design düşüncesini bir araya getiriyor.",
    o3MetaOne: "Image Generation",
    o3MetaTwo: "Experiment",
    o3Desc: "Anime tarzı görseller üreten, deneysel image-generation uygulaması.",
    o4MetaOne: "Market Data",
    o4MetaTwo: "Python Tool",
    o4Desc: "Veri odaklı düşünme ve otomasyon yaklaşımını denediğim Python aracı.",
    openRepo: "Repo linki",
    reviewOnGithub: "GitHub'da incele",
    timelineLabel: "Timeline",
    timelineTitle: "Kısa zaman çizgisi",
    timelineIntro:
      "Bu bölüm korunarak daha oyun arayüzü havasına taşındı. Jam temposu, AI deneyleri ve üniversite süreci aynı çizgide akıyor.",
    t1Title: "Kriptografi Oyunu ve yeni itch.io yayınları",
    t1Desc:
      "Puzzle eksenli bir kriptoloji oyunu çıkardım; aynı dönemde itch.io prototip kütüphanemi daha görünür hale getirdim.",
    t2Title: "AI deneyleri ve ürün odaklı yazılım",
    t2Desc:
      "Generative AI, anime image generation, veri analizi ve saha takibi gibi alanlarda deneysel projeler geliştirdim.",
    t3Title: "Takım oyunları ve jam ritmi",
    t3Desc:
      "Soul Knott ve Illusion Maze ile yayınlanmış ekip işleri üretme ve hızlı iterasyon içinde çalışma pratiği kazandım.",
    t4Title: "Trakya University",
    t4Desc:
      "Bilişim Sistemleri ve Teknolojileri öğrencisiyim. Üniversite sürecinde oyun geliştirme, AI ve yazılım projelerini birlikte büyütüyorum.",
    focusLabel: "Build Log",
    focusTitle: "Üretim odaklarım",
    focusIntro: "Sadece araç değil, çalışma tarzımı da görünür kılan ana odak alanları.",
    f1Desc:
      "Önce hissi kuruyorum: akış, tempo, input tepkisi ve prototipin oynanabilir olması benim için ilk eşik.",
    f2Desc:
      "Modelden çok çıktının ne işe yaradığıyla ilgileniyorum. AI tarafında kullanıcının dokunabildiği araçlar kurmayı seviyorum.",
    f3Desc:
      "Teknik çözümün ürün değerine dönüşmesini önemsiyorum: anlaşılır akış, net çıktı ve gerçek kullanım hissi.",
    softSkillsLabel: "Soft Beceriler",
    softOne: "Analitik düşünme",
    softTwo: "Problem çözme",
    softThree: "Öğrenmeye açıklık",
    softFour: "Takım çalışması",
    softFive: "İletişim becerileri",
    contactLabel: "Co-op Invite",
    contactTitle: "İletişim",
    contactIntro:
      "Oyun geliştirme, AI prototipleri veya staj/junior fırsatları için bana doğrudan ulaşabilirsin.",
    contactEmailLabel: "E-posta",
    footerPrefix: "©",
    footerSuffix: "Can Bilal Sipahi / Devam? Evet",
  },
  en: {
    metaTitle: "Can Bilal Sipahi | Game Dev Portfolio",
    metaDescription:
      "A pixel-HUD style portfolio for Can Bilal Sipahi, focused on game development, AI prototyping, and Unity work.",
    brandRole: "Unity Developer / AI Builder",
    navProjects: "Projects",
    navTimeline: "Timeline",
    navFocus: "Focus",
    navContact: "Contact",
    heroLabel: "Player One / Portfolio",
    heroTitle: "My Portfolio",
    heroCopy:
      "I'm <strong>Can Bilal Sipahi</strong>. I build gameplay prototypes with Unity, AI tools with Python, and software systems that solve real problems. This page brings together my itch.io games, CV projects, and GitHub work in an interface that feels closer to a game screen.",
    heroPrimaryCta: "Open projects",
    heroSecondaryCta: "Download CV",
    heroTagOne: "Unity prototypes",
    heroTagTwo: "itch.io releases",
    heroTagThree: "AI and data-driven work",
    playerInfo: "Player Info",
    activeBuild: "Active Build",
    energyLabel: "Energy level",
    unityGameplay: "Unity Gameplay",
    generativeAi: "Generative AI",
    problemSolving: "Problem Solving",
    chipLocation: "Istanbul / Avcilar",
    chipLanguage: "English B1",
    chipTarget: "Intern / Junior",
    chipStack: "Unity + Python",
    projectsLabel: "Mission Select",
    projectsTitle: "Projects",
    gamesLabel: "Game Track",
    gamesTitle: "Game Projects",
    gamesIntro: "My published or playable game work from itch.io and jam projects.",
    g1MetaOne: "Android",
    g1MetaTwo: "Action Prototype",
    g1Desc:
      "A one-handed, fast-paced bullet-heaven prototype focused on survival rhythm and sci-fi ability feel.",
    g2MetaOne: "Windows",
    g2MetaTwo: "Team Build",
    g2Desc:
      "A team-built adventure game that improved my ability to deliver a playable build quickly and make decisions with others.",
    g3MetaOne: "Windows",
    g3MetaTwo: "Level Design",
    g3Desc:
      "A published team project where I worked on strengthening the 3D level design flow and play feel.",
    g4MetaOne: "Puzzle",
    g4MetaTwo: "School Project",
    g4Title: "Cryptography Game",
    g4Desc:
      "A school project that turns cryptography into a playable puzzle experience without feeling overly didactic.",
    viewOnItchio: "View on itch.io",
    openGamePage: "Open game page",
    openProject: "Open project",
    gamesArchiveMetaOne: "Game Library",
    gamesArchiveMetaTwo: "itch.io",
    gamesArchiveTitle: "itch.io Archive",
    gamesArchiveDesc:
      "If you want to see all of my playable prototypes and releases in one place, jump to my main game page.",
    openArchive: "Open Starter's Pack page",
    otherLabel: "Other Track",
    otherTitle: "Other Projects",
    otherIntro: "My AI, data, and software-focused work outside of game development lives here.",
    o1MetaOne: "Applied AI",
    o1MetaTwo: "Product System",
    o1Title: "TraktorGPS",
    o1Desc:
      "A real-world solution that combines soil-image analysis, data fusion, and GPS-based field tracking in one system.",
    o1PointOne: "Built a module that interprets soil type from image input.",
    o1PointTwo: "Combined user data with deficiency detection logic.",
    o1PointThree: "Implemented GPS-based tractor and scanned-area tracking.",
    openGithubProfile: "Open GitHub profile",
    o2MetaOne: "AI Tooling",
    o2MetaTwo: "Unity Research",
    o2Desc:
      "A GAN experiment for generating 2D levels in Unity, bringing procedural content and level design thinking together.",
    o3MetaOne: "Image Generation",
    o3MetaTwo: "Experiment",
    o3Desc: "An experimental image-generation app that produces anime-style visuals.",
    o4MetaOne: "Market Data",
    o4MetaTwo: "Python Tool",
    o4Desc: "A Python tool where I explored automation and data-driven thinking for market data.",
    openRepo: "Open repository",
    reviewOnGithub: "Review on GitHub",
    timelineLabel: "Timeline",
    timelineTitle: "Short timeline",
    timelineIntro:
      "I kept this section and carried it into a more game-interface mood. Jam rhythm, AI experiments, and university life all move along the same line.",
    t1Title: "Cryptography Game and new itch.io releases",
    t1Desc:
      "I shipped a puzzle-based cryptography game and made my itch.io prototype library more visible during the same period.",
    t2Title: "AI experiments and product-focused software",
    t2Desc:
      "I built experimental projects in generative AI, anime image generation, data analysis, and field tracking.",
    t3Title: "Team games and jam rhythm",
    t3Desc:
      "With Soul Knott and Illusion Maze, I built practice in shipping team projects and iterating fast.",
    t4Title: "Trakya University",
    t4Desc:
      "I'm an Information Systems and Technologies student, growing game development, AI, and software work together during university.",
    focusLabel: "Build Log",
    focusTitle: "My production focus",
    focusIntro: "These are the main areas that make not just my tools, but my working style, visible.",
    f1Desc:
      "I care about feel first: flow, pace, input response, and whether a prototype becomes genuinely playable.",
    f2Desc:
      "I'm more interested in what the output does than the model alone. I like building AI tools people can actually use.",
    f3Desc:
      "I care about turning technical solutions into product value through clear flow, useful output, and real usability.",
    softSkillsLabel: "Soft Skills",
    softOne: "Analytical thinking",
    softTwo: "Problem solving",
    softThree: "Willingness to learn",
    softFour: "Teamwork",
    softFive: "Communication skills",
    contactLabel: "Co-op Invite",
    contactTitle: "Contact",
    contactIntro:
      "You can reach me directly for game development, AI prototypes, or intern/junior opportunities.",
    contactEmailLabel: "Email",
    footerPrefix: "©",
    footerSuffix: "Can Bilal Sipahi / Continue? Yes",
  },
};

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const applyLanguage = (language) => {
  const selected = translations[language] ? language : "tr";
  const dictionary = translations[selected];

  document.documentElement.lang = selected;
  document.title = dictionary.metaTitle;

  if (metaDescription) {
    metaDescription.setAttribute("content", dictionary.metaDescription);
  }

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (dictionary[key]) {
      node.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((node) => {
    const key = node.dataset.i18nHtml;
    if (dictionary[key]) {
      node.innerHTML = dictionary[key];
    }
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.langButton === selected;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  try {
    localStorage.setItem("portfolio-language", selected);
  } catch (error) {
    // Ignore storage issues and keep language in-memory only.
  }
};

if (header) {
  const syncHeader = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  };

  syncHeader();
  window.addEventListener("scroll", syncHeader, { passive: true });
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.langButton);
  });
});

let initialLanguage = "tr";

try {
  initialLanguage = localStorage.getItem("portfolio-language") || initialLanguage;
} catch (error) {
  initialLanguage = "tr";
}

applyLanguage(initialLanguage);

if (!reduceMotion && revealItems.length > 0) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.14,
      rootMargin: "0px 0px -48px 0px",
    },
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

if (!reduceMotion) {
  tiltItems.forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const bounds = card.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width;
      const y = (event.clientY - bounds.top) / bounds.height;
      const rotateY = (x - 0.5) * 5;
      const rotateX = (0.5 - y) * 5;

      card.style.setProperty("--rotate-x", `${rotateX}deg`);
      card.style.setProperty("--rotate-y", `${rotateY}deg`);
    });

    const resetTilt = () => {
      card.style.setProperty("--rotate-x", "0deg");
      card.style.setProperty("--rotate-y", "0deg");
    };

    card.addEventListener("pointerleave", resetTilt);
    card.addEventListener("pointercancel", resetTilt);
  });
}
