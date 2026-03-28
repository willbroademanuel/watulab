/**
 * ==========================================================
 * WATULAB MAIN JAVASCRIPT FILE
 * ==========================================================
 * This file contains all the interactive logic for the site.
 * It's structured for easy editing if you understand the basics.
 */

/* =========================================================================
   1. TRANSLATION DICTIONARY
   ========================================================================= 
   Edit the text inside the quotes below to change text on the website.
   'en' represents English variables.
   'sw' represents Swahili variables.
   DO NOT alter the names of the keys (e.g., 'nav_services:'), only their values.
*/
const translations = {
    en: {
        nav_services: "Services",
        nav_about: "About",
        nav_projects: "Projects",
        nav_contact: "Contact Us",
        hero_sub: "Digital Agency",
        hero_title_1: "We Craft",
        hero_title_2: "Digital Excellence.",
        hero_desc: "Minimalist strategies for maximum impact. We build brands that stand the test of time.",
        cta_start: "Start Project",
        cta_services: "View Services",
        services_title: "Our Expertise",
        serv_1_title: "Software Development",
        serv_1_desc: "We design and develop secure, scalable custom software, including mobile apps, web apps, and enterprise solutions, tailored to your business needs.",
        serv_2_title: "AI & Machine Learning",
        serv_2_desc: "We develop AI and machine learning solutions that drive automation, optimize processes, and deliver actionable insights for businesses.",
        serv_3_title: "Digital Transformation",
        serv_3_desc: "We guide businesses through digital transformation, from strategy to implementation, optimizing processes and driving innovation.",
        ind_sub: "Industries",
        ind_title_1: "Build and scale with us",
        ind_title_2: "in your domain",
        ind_1: "Banking & FinTech",
        ind_2: "Non-Profit & NGOs",
        ind_3: "Insurance",
        ind_4: "Agriculture",
        ind_5: "Healthcare",
        ind_6: "Government",
        ind_7: "Logistics & Supply",
        ind_8: "Mining",
        tech_title: "Tools of the trade",
        stat_1_val: "2022",
        stat_1_lbl: "Year Founded",
        stat_2_val: "12+",
        stat_2_lbl: "Solutions Developed",
        stat_3_val: "16+",
        stat_3_lbl: "Technology Experts",
        stat_4_val: "4+",
        stat_4_lbl: "Countries to be served in Africa",
        stat_5_val: "9.8",
        stat_5_lbl: "Net promoter score",
        stat_6_val: "4+",
        stat_6_lbl: "Years of experience",
        foot_col_company: "Company",
        foot_about: "About Us",
        foot_careers: "Careers",
        foot_works: "Featured Works",
        foot_content: "Content Hub",
        foot_contact: "Contact Us",
        foot_col_services: "Services",
        foot_srv_ai: "AI & Machine Learning",
        foot_srv_soft: "Software Development",
        foot_srv_dt: "Digital Transformation",
        foot_srv_mob: "Mobile Applications",
        foot_srv_web: "Web Applications",
        foot_srv_partner: "Development House Partner",
        foot_col_connect: "Connect With Us",
        contact_title: "Let's Work Together",
        contact_desc: "Ready to take your brand to the next level? Reach out to us.",
        location: "Arusha, Tanzania",
        form_name: "Name",
        form_email: "Email",
        form_message: "Message",
        form_send: "Send Message",
        footer_privacy: "Privacy Policy",
        about_mission_title: "Our Mission",
        about_mission_desc: "To empower businesses across Africa with minimalist, high-impact digital solutions that cut through the noise. We believe in the power of simplicity to drive complex growth.",
        about_vision_title: "Our Vision",
        about_vision_desc: "To be the bridge between Tanzanian innovation and the global digital stage, creating brands that are recognized worldwide for their elegance and effectiveness.",
        about_why_title: "Why Choose Us",
        about_why_1: "Data-driven strategies",
        about_why_2: "Minimalist, future-proof design",
        about_why_3: "24/7 Local support",
        intro_welcome: "Welcome",
        intro_brand: "Watu Lab",
        intro_confirm: "You are in the right place",
        // Projects & Privacy Specifics
        back_home: "Back to Home",
        title_projects: "Our Projects",
        subtitle_projects: "Showcasing the digital excellence built at Watu Lab.",
        tab_ongoing: "In Progress",
        tab_market: "On Market",
        badge_web: "Web App",
        badge_mobile: "Mobile App",
        badge_pc: "PC App",
        status_dev: "Development (60%)",
        status_beta: "Beta Testing",
        proj_1_title: "E-Commerce Dashboard",
        proj_1_desc: "A complete dashboard solution for retailers in East Africa, focusing on hyper-fast inventory sync.",
        proj_2_title: "Logistics Tracker",
        proj_2_desc: "Real-time GPS tracking solution aimed at local courier businesses with offline-first capabilities.",
        proj_3_title: "Afya Connect",
        proj_3_desc: "Connecting patients to specialized practitioners instantly. Available on Android devices.",
        proj_4_title: "Safari Sync iOS",
        proj_4_desc: "The premier trip planning tool for Tanzanian Safaris, crafted natively for iOS.",
        proj_5_title: "RetailMaster Pro",
        proj_5_desc: "Enterprise-grade Point of Sale system built natively for Windows desktop environments.",
        btn_play: "Play Store",
        btn_appstore: "App Store",
        btn_download: "Download App",
        title_privacy: "Privacy Policy",
        p1: "Last updated: March 2026",
        p2: "Welcome to Watu Lab's Privacy Policy. We respect your privacy and are committed to protecting your personal data.",
        h1: "1. Information We Collect",
        p3: "We may collect, use, store and transfer different kinds of personal data about you when you use our website or services, including identity data, contact data, and technical data.",
        h2: "2. How We Use Your Data",
        p4: "We will only use your personal data when the law allows us to. Most commonly, we will use your personal data to provide our services, manage our relationship with you, and improve our website offerings.",
        h3: "3. Data Security",
        p5: "We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way, altered, or disclosed.",
        p6: "If you have any questions about this Privacy Policy, please contact us at info@watulab.com."
    },
    sw: {
        nav_services: "Huduma",
        nav_about: "Kuhusu Sisi",
        nav_projects: "Miradi",
        nav_contact: "Wasiliana",
        hero_sub: "Wavumbuzi na watatuzi wa changamoto za kidigitali",
        hero_title_1: "Bidhaa Bora",
        hero_title_2: "Za Kidijitali, kwa ajili ya watu.",
        hero_desc: "Tunaelewa kero na changamoto za kiteknolojia, kwa kutumia ubunifu na ubobezi wetu, tunaunda programu maalum kwa kutumia teknolojia za kisasa ili kutatua changamoto mbaili mbali zinazoikumba jamii ",
        cta_start: "Anza Mradi",
        cta_services: "Ona Huduma",
        services_title: "Utaalam Wetu",
        serv_1_title: "Uundaji wa Programu za Kompyuta na za simu",
        serv_1_desc: "Tunaunda mifumo na programu za kisasa ,zinazo tatua changamoto mbali mbali, zikilenga zaidi kukidhi mahitaji ya mtumiaji.",
        serv_2_title: "Akili Mnemba (AI & ML)",
        serv_2_desc: "Tunatengeneza suluhisho za AI zinazosaidia watu na jamii kuongeza ufanisi wa kazi zao, kuboresha michakato ya kila siku, na kupata maarifa muhimu kwa maendeleo ya jamii.",
        serv_3_title: "Mageuzi ya Kidijitali",
        serv_3_desc: "Tunawaongoza wafanyabiashara na jamii kwa ujumla kupitia mageuzi ya kidijitali, kuanzia mikakati mpaka utekelezaji halisi katika kutatua changamoto zao.",
        ind_sub: "Sekta",
        ind_title_1: "Jenga na ukue pamoja nasi",
        ind_title_2: "katika sekta yako",
        ind_1: "Benki & Fedha",
        ind_2: "Mashirika Yasiyo ya Kiserikali (NGOs)",
        ind_3: "Bima",
        ind_4: "Kilimo",
        ind_5: "Afya",
        ind_6: "Serikali",
        ind_7: "Usafirishaji & Ugavi",
        ind_8: "Madini",
        tech_title: "Zana za Kazi",
        stat_1_val: "2022",
        stat_1_lbl: "Mwaka Ulionzishwa",
        stat_2_val: "12+",
        stat_2_lbl: "Mifumo Iliyotengenezwa",
        stat_3_val: "16+",
        stat_3_lbl: "Wataalamu Wa Teknolojia",
        stat_4_val: "4+",
        stat_4_lbl: "Nchi zitakazohudumiwa Afrika",
        stat_5_val: "9.8",
        stat_5_lbl: "Alama Ya Ubora (NPS)",
        stat_6_val: "4+",
        stat_6_lbl: "Miaka Ya Uzoefu",
        foot_col_company: "Kampuni",
        foot_about: "Kuhusu Sisi",
        foot_careers: "Ajira",
        foot_works: "Kazi Zetu",
        foot_content: "Makala",
        foot_contact: "Wasiliana Nasi",
        foot_col_services: "Huduma",
        foot_srv_ai: "Akili Mnemba (AI & ML)",
        foot_srv_soft: "Uundaji wa Programu za Kompyuta",
        foot_srv_dt: "Mageuzi ya Kidijitali",
        foot_srv_mob: "Programu za Simu",
        foot_srv_web: "Mifumo ya Kimtandao",
        foot_srv_partner: "Kituo Cha Maendeleo",
        foot_col_connect: "Ungana Nasi",
        contact_title: "Tufanye Kazi Pamoja",
        contact_desc: "Uko tayari kupeleka maisha yako au biashara yako ngazi nyingine? Wasiliana nasi.",
        location: "Arusha, Tanzania",
        form_name: "Jina",
        form_email: "Barua Pepe",
        form_message: "Ujumbe",
        form_send: "Tuma Ujumbe",
        footer_privacy: "Sera ya Faragha",
        about_mission_title: "Dhumuni Letu",
        about_mission_desc: "Kuwawezesha watu katika jamii kutumia mbinu sahihi na mifumo ya kisasa ya kidijitali. Kwani tunaamini katika nguvu ya teknolojia katika kuboresha maisha na kutatua changamoto za watu na kukuza maendeleo ya jamii kiujumla.",
        about_vision_title: "Maono Yetu",
        about_vision_desc: "Kutengeneza mifumo bora zaidi na yenye usalama kwa ajili ya watu katika jamii zetu, itakayo wawezesha watu kukabili changamoto mbali mbali za kila siku kwa kutumia mifumo ya kidigitali kwa ajili ya kukuza maendeleo katika jamii.",
        about_why_title: "Kwa Nini Sisi",
        about_why_1: "Mikakati inayotegemea data",
        about_why_2: "Ubunifu wa kisasa na unaozingatia ubora",
        about_why_3: "Msaada wa karibu 24/7",
        intro_welcome: "Karibu",
        intro_brand: "Watu Lab",
        intro_confirm: "Upo mahali sahihi",
        // Projects & Privacy Specifics
        back_home: "Rudi Mwanzo",
        title_projects: "Miradi Yetu",
        subtitle_projects: "Ukuaji wa kidijitali unaofanywa na Watu Lab.",
        tab_ongoing: "Inayoendelea",
        tab_market: "Iliyokamilika",
        badge_web: "Tovuti",
        badge_mobile: "Programu ya Simu",
        badge_pc: "Programu ya Kompyuta",
        status_dev: "Ipo Kwenye Ujenzi (60%)",
        status_beta: "Majadiliano (Beta)",
        proj_1_title: "Dashibodi ya Biashara",
        proj_1_desc: "Suluhisho kamili la dashibodi kwa wauzaji Afrika Mashariki, ikilenga kasi ya kuhifadhi hesabu.",
        proj_2_title: "Mfumo wa Usafirishaji",
        proj_2_desc: "Kufuatilia GPS muda halisi kwa wafanyabiashara wa usafirishaji hata bila intaneti.",
        proj_3_title: "Afya Connect",
        proj_3_desc: "Kuunganisha wagonjwa na wataalam papo hapo. Inapatikana kwa simu za Android.",
        proj_4_title: "Safari Sync iOS",
        proj_4_desc: "Zana bora ya kupanga safari zako za utalii Tanzania, imejengwa kwa ajili ya iOS.",
        proj_5_title: "RetailMaster Pro",
        proj_5_desc: "Mfumo wa daraja la juu wa Point of Sale uliojengwa mahususi kwa kompyuta za Windows.",
        btn_play: "Play Store",
        btn_appstore: "App Store",
        btn_download: "Pakua App",
        title_privacy: "Sera ya Faragha",
        p1: "Imeboreshwa mwisho: Machi 2026",
        p2: "Karibu kwenye Sera ya Faragha ya Watu Lab. Tunaheshimu faragha yako na tumejitolea kulinda taarifa zako binafsi.",
        h1: "1. Taarifa Tunazokusanya",
        p3: "Tunaweza kukusanya, kutumia, kuhifadhi na kuhamisha aina mbalimbali za taarifa zako binafsi unapotumia tovuti yetu au huduma zetu, ikiwa ni pamoja na taarifa za utambulisho, mawasiliano, na taarifa za kiufundi.",
        h2: "2. Jinsi Tunavyotumia Taarifa Zako",
        p4: "Tutatumia tu taarifa zako binafsi pale sheria inapoturuhusu. Mara nyingi sana, tutatumia taarifa zako kutoa huduma zetu, kusimamia uhusiano wetu na wewe, na kuboresha matoleo ya tovuti yetu.",
        h3: "3. Usalama wa Taarifa",
        p5: "Tumeweka hatua madhubuti za usalama kuzuia taarifa zako binafsi kupotea kwa bahati mbaya, kutumiwa, au kufikiwa kwa njia isiyoidhinishwa, kubadilishwa, au kufichuliwa.",
        p6: "Ikiwa una maswali yoyote kuhusu Sera hii ya Faragha, tafadhali wasiliana nasi kupitia info@watulab.com."
    }
};

let currentLang = 'en';

// Helper function to create simple programmable delays
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));


/* =========================================================================
   2. INITIAL BOOT & SETUP
   ========================================================================= 
   This code runs immediately when any page finishes loading in the browser.
*/
document.addEventListener('DOMContentLoaded', () => {
    // 1. Grab main transition elements
    const pageTransition = document.getElementById('page-transition');
    const transitionText = document.getElementById('transition-text');

    // 2. Fetch language data from user's storage
    const savedLang = localStorage.getItem('watu_lang') || 'en';
    const savedLangTime = localStorage.getItem('watu_lang_time');

    // Configuration: How long before the language intro resets? 
    // Currently set to 3 hours (3 * 60 minutes * 60 seconds * 1000 milliseconds)
    const threeHours = 3 * 60 * 60 * 1000;

    const currentPath = window.location.pathname;
    const isIndex = currentPath === '/' || currentPath.includes('index.html') || !currentPath.endsWith('.html');

    // -- HOME PAGE LOGIC --
    let shouldSkipIntro = false;
    if (isIndex) {
        // If they already chose a language recently, skip the entire intro screen
        if (savedLangTime) {
            const timePassed = new Date().getTime() - parseInt(savedLangTime, 10);
            if (timePassed < threeHours) {
                shouldSkipIntro = true;
            } else {
                localStorage.removeItem('watu_lang');
                localStorage.removeItem('watu_lang_time');
            }
        }

        // Applying the skip
        if (shouldSkipIntro) {
            currentLang = savedLang;
            const introOverlay = document.getElementById('intro-overlay');
            if (introOverlay) introOverlay.style.display = 'none';
            applyTranslations(savedLang); // Instantly translate to saved lang
            const mainContent = document.getElementById('main-content');
            if (mainContent) mainContent.style.opacity = '1';
        }
    } else {
        // -- SUB-PAGES LOGIC (Projects, Privacy) --
        // Automatically skip intro and apply the saved language 
        currentLang = savedLang;
        applyTranslations(savedLang);

        // Update browser tab titles dynamically
        if (currentPath.includes('projects.html')) {
            document.title = translations[currentLang].title_projects + " - Watu Lab";
        } else if (currentPath.includes('privacy.html')) {
            document.title = translations[currentLang].title_privacy + " - Watu Lab";
        }
    }

    // Fade out the black screen after load
    if (pageTransition && transitionText) {
        setTimeout(() => {
            transitionText.classList.remove('show');
            pageTransition.classList.add('fade-out');
        }, 600); // 600ms delay before revealing the newly loaded page
    }

    // Projects Page Elements Fade-In
    if (currentPath.includes('projects.html')) {
        setTimeout(() => {
            ['back-btn-container', 'header-container', 'tabs-container', 'projects-container'].forEach(id => {
                const el = document.getElementById(id);
                if (el) {
                    el.style.opacity = '1';
                    el.classList.remove('-translate-x-4', 'translate-y-4');
                }
            });
        }, 100);
    }

    // Privacy Page Elements Fade-In
    if (currentPath.includes('privacy.html')) {
        setTimeout(() => {
            const policyContainer = document.getElementById('policy-container');
            if (policyContainer) policyContainer.style.opacity = '1';
        }, 100);
    }

    // ──────────────────────────────────────────────
    // CUSTOM PAGE TRANSITIONS (Clicking internal links)
    // ──────────────────────────────────────────────
    document.body.addEventListener('click', function (e) {
        // Find if a linked was clicked anywhere up the chain
        const anchor = e.target.closest('a');
        if (anchor && pageTransition && transitionText) {
            const targetUrl = anchor.getAttribute('href');
            const target = anchor.getAttribute('target');

            // If it's a link to another page on our site (not external and not anchor # scroll)
            if (targetUrl && (targetUrl.endsWith('.html') || targetUrl.includes('.html')) && target !== '_blank' && !targetUrl.startsWith('#')) {
                e.preventDefault(); // Stop instant jump

                // Show black transition screen
                pageTransition.classList.remove('fade-out');
                pageTransition.classList.add('fade-in');

                // Animate text, then physically load the new URL after giving it time
                setTimeout(() => transitionText.classList.add('show'), 150);
                setTimeout(() => window.location.href = targetUrl, 800); // 800ms wait
            }
        }
    });

    // Fire off specific Homepage features
    startAutoTabShift();
    if (document.getElementById('typewriter')) {
        setTimeout(type, 1000); // Wait 1 sec before hacking typing effect starts
    }
});


// Safari Cache fix (Ensures animations aren't broken when pressing 'Back' button on iPhones/Macs)
window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
        const pageTransition = document.getElementById('page-transition');
        const transitionText = document.getElementById('transition-text');
        if (pageTransition) {
            pageTransition.classList.remove('fade-in');
            pageTransition.classList.add('fade-out');
        }
        if (transitionText) transitionText.classList.remove('show');
    }
});


/* =========================================================================
   3. LANGUAGE ANIMATION & LOGIC
   ========================================================================= 
   This handles the "Welcome -> Watu Lab -> You're in the right place" text
*/
async function startExperience(lang) {
    currentLang = lang;

    // Save language to browser storage
    localStorage.setItem('watu_lang', lang);
    localStorage.setItem('watu_lang_time', new Date().getTime().toString());

    // Fade out the language selection buttons
    const langScreen = document.getElementById('language-selection');
    if (langScreen) {
        langScreen.style.opacity = '0';
        await sleep(500);
        langScreen.style.display = 'none';
    }

    const introContainer = document.getElementById('intro-sequence');
    const textElement = document.getElementById('sequence-text');

    // --- INTRO SEQUENCE TIMINGS ---  
    // You can edit the `await sleep(NUMBER)` lines here to alter how long phrases stay on screen
    if (introContainer && textElement) {
        introContainer.classList.remove('hidden');
        const t = translations[lang];

        // Frame 1
        textElement.textContent = t.intro_welcome;
        textElement.classList.add('visible');
        await sleep(1500); // Length text is shown
        textElement.classList.remove('visible');
        await sleep(600); // Blank space duration

        // Frame 2
        textElement.textContent = t.intro_brand;
        textElement.classList.add('visible');
        await sleep(1500);
        textElement.classList.remove('visible');
        await sleep(600);

        // Frame 3
        textElement.textContent = t.intro_confirm;
        textElement.classList.add('animate-glow');
        textElement.classList.add('visible');
        await sleep(2500);
        textElement.classList.remove('visible');
        textElement.classList.remove('animate-glow');
        await sleep(800);
    }

    // Dissolve intro layer and show home page
    const overlay = document.getElementById('intro-overlay');
    if (overlay) overlay.classList.add('hidden-screen');

    applyTranslations(lang);
    const mainContent = document.getElementById('main-content');
    if (mainContent) mainContent.style.opacity = '1';
}

// Applies defined language config matching `data-key` attributes on HTML tags
function applyTranslations(lang) {
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}


/* =========================================================================
   4. NAVIGATION MENU LOGIC
   ========================================================================= */

/* Hamburger icon logic to toggle phone drop down menu  */
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const menuItems = document.querySelectorAll('.mobile-menu-item');
    if (!menu) return;

    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        // Cascading fade-in animation
        menuItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.remove('opacity-0', '-translate-y-4');
                item.classList.add('opacity-100', 'translate-y-0');
            }, 100 * (index + 1));
        });
    } else {
        closeMobileMenu();
    }
}

/* Closes mobile menu forcefully */
function closeMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const menuItems = document.querySelectorAll('.mobile-menu-item');
    if (!menu) return;

    menuItems.forEach((item) => {
        item.classList.add('opacity-0', '-translate-y-4');
        item.classList.remove('opacity-100', 'translate-y-0');
    });
    menu.classList.add('hidden');
}

/* Auto-close dropdown when a link is pressed inside it */
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

/* Click off menu logic */
document.addEventListener('click', (event) => {
    const menu = document.getElementById('mobile-menu');
    const menuBtn = document.querySelector('button[onclick="toggleMobileMenu()"]');
    if (menu && menuBtn && !menu.classList.contains('hidden') && !menu.contains(event.target) && !menuBtn.contains(event.target)) {
        closeMobileMenu();
    }
});


/* =========================================================================
   5. TAB COMPONENTS 
   ========================================================================= */

// --- Homepage 'About Us' Auto-Switching Tabs ---
const tabIds = ['mission', 'vision', 'why'];
let currentTabIndex = 0;
let tabAutoShiftInterval;
let tabManualTimeout;

function startAutoTabShift() {
    if (!document.getElementById('btn-mission')) return;
    clearInterval(tabAutoShiftInterval);

    // Config: Tab switch speed -> 4000 = 4 seconds
    tabAutoShiftInterval = setInterval(() => {
        currentTabIndex = (currentTabIndex + 1) % tabIds.length;
        switchTab(tabIds[currentTabIndex], true);
    }, 4000);
}

function switchTab(tabId, isAuto = false) {
    if (!document.getElementById(`btn-${tabId}`)) return;

    // Wipe clean any active states
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

    // Re-apply states purely to target
    document.getElementById(`btn-${tabId}`).classList.add('active');
    document.getElementById(`content-${tabId}`).classList.add('active');
    currentTabIndex = tabIds.indexOf(tabId);

    // If User clicked manually, pause automatic flow
    if (!isAuto) {
        clearInterval(tabAutoShiftInterval);
        clearTimeout(tabManualTimeout);
        // Wait 14s before resuming automatic cycling after a user interaction
        tabManualTimeout = setTimeout(startAutoTabShift, 14000);
    }
}

// --- Projects Page Dedicated Tabs ---
function switchProjectTab(tabId) {
    const tabsContainer = document.getElementById('tabs-container');
    const projectsContainer = document.getElementById('projects-container');
    if (!tabsContainer || !projectsContainer) return;

    // Reset bounds isolated securely within containers
    tabsContainer.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    projectsContainer.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

    document.getElementById(`btn-${tabId}`).classList.add('active');
    document.getElementById(`content-${tabId}`).classList.add('active');
}


/* =========================================================================
   6. VISUAL EFFECTS (SCROLL OBSERVING & MOUSE)
   ========================================================================= */

// SCROLL OBSERVER - Watches items on screen to trigger animations (.reveal)
const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active'); // triggers CSS keyframe
        } else {
            entry.target.classList.remove('active'); // Allows effect to replay going upwards
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal, .reveal-bounce').forEach(el => observer.observe(el));


// BACKGROUND MOUSE FOLLOWER - The blurry blob tracking your pointer
const mouseBlob = document.getElementById('mouse-blob');
if (mouseBlob) {
    document.addEventListener('mousemove', (e) => {
        requestAnimationFrame(() => {
            // Centers it beneath the pointer
            mouseBlob.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
        });
    });
}


/* =========================================================================
   7. TECH STACK MARQUEE SYSTEM
   ========================================================================= 
   Handles infinite scrolling and touch-dragging on the tool icons banner.
*/
const marquee = document.getElementById('tech-marquee');
if (marquee) {
    let isDown = false;
    let startX;
    let scrollLeft;
    let isHovered = false;
    let autoScrollSpeed = 1; // Tweak speed of continuous auto-scroll here

    function marqueeStep() {
        if (!isDown && !isHovered) marquee.scrollLeft += autoScrollSpeed;

        // Infinite recursion wrapper
        if (marquee.scrollLeft >= marquee.scrollWidth / 2) {
            marquee.scrollLeft -= marquee.scrollWidth / 2;
        } else if (marquee.scrollLeft <= 0) {
            marquee.scrollLeft += marquee.scrollWidth / 2;
        }
        requestAnimationFrame(marqueeStep);
    }
    requestAnimationFrame(marqueeStep);

    // Mouse Controls
    marquee.addEventListener('mouseenter', () => isHovered = true);
    marquee.addEventListener('mouseleave', () => {
        isHovered = false;
        isDown = false;
        marquee.style.cursor = 'grab';
    });
    marquee.addEventListener('mousedown', (e) => {
        isDown = true;
        marquee.style.cursor = 'grabbing';
        startX = e.pageX - marquee.offsetLeft;
        scrollLeft = marquee.scrollLeft;
    });
    marquee.addEventListener('mouseup', () => {
        isDown = false;
        marquee.style.cursor = 'grab';
    });

    // Drag Logic
    marquee.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const walk = ((e.pageX - marquee.offsetLeft) - startX) * 2; // Sensitivity multiplier
        marquee.scrollLeft = scrollLeft - walk;
        if (marquee.scrollLeft >= marquee.scrollWidth / 2) {
            marquee.scrollLeft -= marquee.scrollWidth / 2;
            scrollLeft -= marquee.scrollWidth / 2;
        } else if (marquee.scrollLeft <= 0) {
            marquee.scrollLeft += marquee.scrollWidth / 2;
            scrollLeft += marquee.scrollWidth / 2;
        }
    });

    // Touch Support for mobile dragging
    marquee.addEventListener('touchstart', (e) => {
        isDown = true;
        startX = e.touches[0].pageX - marquee.offsetLeft;
        scrollLeft = marquee.scrollLeft;
    });
    marquee.addEventListener('touchend', () => isDown = false);
    marquee.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        const walk = ((e.touches[0].pageX - marquee.offsetLeft) - startX) * 2;
        marquee.scrollLeft = scrollLeft - walk;

        // Wrap logic
        if (marquee.scrollLeft >= marquee.scrollWidth / 2) {
            marquee.scrollLeft -= marquee.scrollWidth / 2;
            scrollLeft -= marquee.scrollWidth / 2;
        } else if (marquee.scrollLeft <= 0) {
            marquee.scrollLeft += marquee.scrollWidth / 2;
            scrollLeft += marquee.scrollWidth / 2;
        }
    });
}


/* =========================================================================
   8. TYPEWRITER EFFECT
   ========================================================================= 
   Handles the typing logic above the "Let's Work Together" block.
*/
// Config: To change the words shown, edit this bracketed array.
const words = ['designed', 'built', 'optimized', 'refined'];
let wIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const typewriterEl = document.getElementById('typewriter');
    if (!typewriterEl) return;
    const currentWord = words[wIndex];

    if (isDeleting) {
        // Delete a character
        typewriterEl.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        // Add a character
        typewriterEl.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    // Config: Typing speed (ms)
    let typeSpeed = 100;

    // Delete speed (twice as fast as typing)
    if (isDeleting) typeSpeed /= 2;

    // Complete Word Behavior - pause before deleting
    if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2000; // Waittime before deleting begins (2s)
        isDeleting = true;
    }
    // Emptied Word Behavior - jump to next word
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wIndex = (wIndex + 1) % words.length;
        typeSpeed = 500; // Brief pause before typing next word (0.5s)
    }

    setTimeout(type, typeSpeed);
}


/* =========================================================================
   9. INTELLIGENT SCROLL INDICATOR
   ========================================================================= */
const swipeIndicator = document.getElementById('swipe-indicator');
const sideIndicators = document.getElementById('side-scroll-indicators');

if (swipeIndicator || sideIndicators) {
    function checkMobile() {
        let isOverlapping = false;
        const heroContent = document.querySelector('#main-content section:first-of-type > div');

        // Calculates if the hero text is physically clipping the bottom zone
        if (heroContent) {
            const heroRect = heroContent.getBoundingClientRect();
            // Indicator sits around 80px from bottom. Added 150px safety buffer
            if (heroRect.bottom > window.innerHeight - 150) {
                isOverlapping = true; // Signals script to instantly hide arrow
            }
        }

        // Logic Check: Swipe indicator hides if overlapping with text
        if (window.innerWidth < 768 && !isOverlapping) {
            if (swipeIndicator) swipeIndicator.classList.remove('hidden');
        } else {
            if (swipeIndicator) swipeIndicator.classList.add('hidden');
        }

        // Side indicators show on ALL mobile screens regardless of overlap
        if (window.innerWidth < 768) {
            if (sideIndicators) sideIndicators.classList.remove('hidden');
        } else {
            if (sideIndicators) sideIndicators.classList.add('hidden');
        }
    }

    checkMobile(); // Check on setup
    window.addEventListener('resize', checkMobile); // Check if phone is rotated

    // As soon as person scrolls at all (> 100px), visually dissolve arrow
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            if (swipeIndicator) swipeIndicator.classList.add('fade-out');
            if (sideIndicators) sideIndicators.classList.add('fade-out');
        } else {
            if (swipeIndicator) swipeIndicator.classList.remove('fade-out');
            if (sideIndicators) sideIndicators.classList.remove('fade-out');
        }
    });
}

/* =========================================================================
   10. 3D STACKING CARDS SCROLL (INDUSTRIES)
   ========================================================================= */
const scrollTrack = document.getElementById('industries-scroll-track');
if (scrollTrack) {
    const animCards = [
        document.getElementById('anim-card-1'),
        document.getElementById('anim-card-2'),
        document.getElementById('anim-card-3')
    ];

    function handleTrackScroll() {
        const trackRect = scrollTrack.getBoundingClientRect();
        const windowH = window.innerHeight;

        // Progress: 0 when top of track hits window top, 1 when bottom hits.
        const maxScroll = trackRect.height - windowH;
        let progress = -trackRect.top / maxScroll;
        progress = Math.max(0, Math.min(progress, 1));

        // The user requested: Finish animation by 0.7, leaving a 0.3 'Pause' phase
        const PHASE_LEN = 0.35;

        animCards.forEach((card, i) => {
            if (!card) return;

            // 1. ENTRANCE LOGIC (Slide up from bottom)
            let enterP = 1; // Card 1 is fully entered at 0
            if (i > 0) {
                enterP = (progress - (i - 1) * PHASE_LEN) / PHASE_LEN;
                enterP = Math.max(0, Math.min(enterP, 1));
            }

            // 2. SHRINK LOGIC (Being pushed back)
            let shrinkP = (progress - i * PHASE_LEN) / PHASE_LEN;
            shrinkP = Math.max(0, shrinkP); // Can exceed 1 for deeper stacking

            // 3. CALCULATE TRANSFORMS
            const tyEntrance = (1 - enterP) * 120; // 120% start -> 0%
            const tyShrink = shrinkP * -5;         // Pushes up 5% per phase
            const totalTy = tyEntrance + tyShrink;

            const scale = 1 - (shrinkP * 0.05);    // Shrinks 5% per phase
            const brightness = 1 - (shrinkP * 0.4); // Darkens 40% per phase

            card.style.transform = `translateY(${totalTy}%) scale(${scale})`;
            card.style.filter = `brightness(${brightness})`;

            // Only show if it's currently entering or entered
            card.style.opacity = enterP > 0 ? 1 : 0;
        });
    }

    window.addEventListener('scroll', handleTrackScroll);
    window.addEventListener('resize', handleTrackScroll);
    handleTrackScroll();
}

