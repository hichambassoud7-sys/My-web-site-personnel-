// Language Data
const translations = {
    en: {
        "nav-home": "Home",
        "nav-about": "About",
        "nav-skills": "Skills",
        "nav-projects": "Projects",
        "nav-contact": "Contact",
        "hero-title": "Hi, I'm <span class='highlight'>Hicham Bassoud</span>",
        "hero-subtitle": "15-Year-Old Student & Aspiring Web Developer",
        "btn-contact": "Contact Me",
        "about-title": "About Me",
        "about-p1": "I am a motivated 15-year-old student from Morocco with a passion for building the future of the web. I focus on creating clean, functional, and user-friendly digital experiences.",
        "about-p2": "Currently, I am mastering front-end technologies while expanding my knowledge in programming logic and back-end basics.",
        "skills-title": "My Skills",
        "lvl-adv": "Advanced",
        "lvl-learn": "Learning",
        "services-title": "Services",
        "ser-1-t": "Web Development",
        "ser-1-d": "Building responsive and modern websites using the latest standards.",
        "ser-2-t": "UI Design",
        "ser-2-d": "Creating clean and minimal interfaces for a great user experience.",
        "projects-title": "Projects",
        "project-msg": "Currently working on some exciting projects. Stay tuned!",
        "contact-title": "Get In Touch",
        "contact-p": "Feel free to reach out to me for collaborations or just a friendly hello.",
        "footer": "All rights reserved."
    },
    fr: {
        "nav-home": "Accueil",
        "nav-about": "À propos",
        "nav-skills": "Compétences",
        "nav-projects": "Projets",
        "nav-contact": "Contact",
        "hero-title": "Salut, je suis <span class='highlight'>Hicham Bassoud</span>",
        "hero-subtitle": "Étudiant de 15 ans & Développeur Web Aspirant",
        "btn-contact": "Contactez-moi",
        "about-title": "À Propos",
        "about-p1": "Je suis un étudiant marocain motivé de 15 ans, passionné par la construction du futur du web. Je me concentre sur la création d'expériences numériques propres et fonctionnelles.",
        "about-p2": "Actuellement, je maîtrise les technologies front-end tout en approfondissant mes connaissances en logique de programmation.",
        "skills-title": "Compétences",
        "lvl-adv": "Avancé",
        "lvl-learn": "Apprentissage",
        "services-title": "Services",
        "ser-1-t": "Développement Web",
        "ser-1-d": "Construction de sites web réactifs et modernes.",
        "ser-2-t": "Design UI",
        "ser-2-d": "Création d'interfaces minimalistes pour une meilleure expérience utilisateur.",
        "projects-title": "Projets",
        "project-msg": "Je travaille actuellement sur des projets passionnants. Restez à l'écoute !",
        "contact-title": "Contact",
        "contact-p": "N'hésitez pas à me contacter pour des collaborations ou juste pour dire bonjour.",
        "footer": "Tous droits réservés."
    },
    ar: {
        "nav-home": "الرئيسية",
        "nav-about": "من أنا",
        "nav-skills": "مهاراتي",
        "nav-projects": "مشاريعي",
        "nav-contact": "تواصل معي",
        "hero-title": "مرحباً، أنا <span class='highlight'>هشام بصود</span>",
        "hero-subtitle": "طالب ومطور ويب طموح - 15 سنة",
        "btn-contact": "تواصل معي",
        "about-title": "من أنا",
        "about-p1": "أنا طالب مغربي طموح أبلغ من العمر 15 عاماً، لدي شغف ببناء مستقبل الويب. أركز على إنشاء تجارب رقمية نظيفة وعملية.",
        "about-p2": "حالياً، أقوم بإتقان تقنيات الواجهة الأمامية مع توسيع معرفتي في منطق البرمجة والأساسيات.",
        "skills-title": "مهاراتي",
        "lvl-adv": "متقدم",
        "lvl-learn": "قيد التعلم",
        "services-title": "خدماتي",
        "ser-1-t": "تطوير الويب",
        "ser-1-d": "بناء مواقع استجابية وعصرية باستخدام أحدث المعايير.",
        "ser-2-t": "تصميم الواجهات",
        "ser-2-d": "إنشاء واجهات بسيطة وجذابة لتجربة مستخدم رائعة.",
        "projects-title": "المشاريع",
        "project-msg": "أعمل حالياً على مشاريع مثيرة. ترقبوا قريباً!",
        "contact-title": "تواصل معي",
        "contact-p": "لا تتردد في التواصل معي للتعاون أو فقط للتحية.",
        "footer": "جميع الحقوق محفوظة."
    }
};

// Theme Switcher
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    htmlElement.setAttribute('data-theme', newTheme);
    themeToggle.innerHTML = newTheme === 'dark' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
});

// Language Switcher
const langSwitcher = document.getElementById('lang-switcher');

langSwitcher.addEventListener('change', (e) => {
    setLanguage(e.target.value);
});

function setLanguage(lang) {
    document.documentElement.setAttribute('lang', lang);
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
}

// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    if(navLinks.style.display === 'flex') {
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.left = '0';
        navLinks.style.width = '100%';
        navLinks.style.background = 'var(--bg-color)';
        navLinks.style.padding = '20px';
    }
});

