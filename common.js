// common.js - Shared Navbar, Footer, and Styles for Famral Tools
// Exactly matching https://tools.famral.com/academic (academic.html)

function ensureDependencies() {
    if (!document.querySelector('link[href*="font-awesome"]')) {
        const fa = document.createElement('link');
        fa.rel = 'stylesheet';
        fa.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
        fa.crossOrigin = 'anonymous';
        document.head.appendChild(fa);
    }
    if (!document.querySelector('link[href*="fonts.googleapis.com/css2?family=Inter"]')) {
        const font = document.createElement('link');
        font.rel = 'stylesheet';
        font.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap';
        document.head.appendChild(font);
    }
}

function injectStyles() {
    ensureDependencies();

    if (document.getElementById('common-styles')) return;

    const style = document.createElement('style');
    style.id = 'common-styles';
    style.textContent = `
        :root {
            --primary-color: #0067b8;
            --primary-hover: #005da6;
            --text-dark: #111827;
            --text-light: #4b5563;
            --border-color: #e5e7eb;
            --surface-color: #f8fafc;
        }

        header,
        header#siteHeader {
            position: sticky !important;
            top: 0 !important;
            z-index: 1000 !important;
            padding: 0 !important;
            margin: 0 !important;
            display: block !important;
            background: #ffffff !important;
            border: none !important;
            box-shadow: none !important;
            width: 100% !important;
        }

        nav.navbar,
        .navbar {
            display: block !important;
            background: white !important;
            border-bottom: 2px solid var(--border-color, #e5e7eb) !important;
            padding: 0.75rem 0 !important;
            position: relative !important;
            font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
            width: 100% !important;
            box-sizing: border-box !important;
        }

        .navbar *,
        .site-footer * {
            box-sizing: border-box !important;
        }

        .nav-container {
            display: flex !important;
            justify-content: space-between !important;
            align-items: center !important;
            max-width: 1260px !important;
            margin: 0 auto !important;
            padding: 0 1.5rem !important;
            width: 100% !important;
            box-sizing: border-box !important;
        }

        .nav-logo {
            display: flex !important;
            align-items: center !important;
            gap: 0.75rem !important;
            font-weight: 700 !important;
            font-size: 1.25rem !important;
            color: var(--text-dark, #111827) !important;
            text-decoration: none !important;
            flex-shrink: 0 !important;
            margin: 0 !important;
        }

        .nav-logo img {
            display: block !important;
            border-radius: 4px !important;
            width: 32px !important;
            height: 32px !important;
            object-fit: contain !important;
        }

        .nav-links-wrapper {
            display: flex !important;
            gap: 1.25rem !important;
            align-items: center !important;
            margin: 0 !important;
            padding: 0 !important;
        }

        .nav-links-wrapper .nav-link,
        .nav-links-wrapper a.nav-link {
            font-size: 0.95rem !important;
            color: var(--text-dark, #111827) !important;
            padding: 0.5rem 0.85rem !important;
            font-weight: 500 !important;
            transition: all 0.2s ease !important;
            border-radius: 4px !important;
            display: inline-flex !important;
            align-items: center !important;
            gap: 0.35rem !important;
            text-decoration: none !important;
            white-space: nowrap !important;
            margin: 0 !important;
            border: none !important;
            background: transparent !important;
            line-height: normal !important;
        }

        .nav-links-wrapper .nav-link:hover,
        .nav-links-wrapper .nav-link.active,
        .nav-links-wrapper a.nav-link:hover,
        .nav-links-wrapper a.nav-link.active {
            background-color: var(--surface-color, #f8fafc) !important;
            color: var(--primary-color, #0067b8) !important;
        }

        /* Dropdown CSS */
        .dropdown {
            position: relative !important;
            display: inline-block !important;
            margin: 0 !important;
            padding: 0 !important;
        }

        .dropdown-toggle {
            cursor: pointer !important;
            border: none !important;
            background: transparent !important;
            font-family: inherit !important;
            font-size: 0.95rem !important;
            color: var(--text-dark, #111827) !important;
            padding: 0.5rem 0.85rem !important;
            font-weight: 500 !important;
            display: inline-flex !important;
            align-items: center !important;
            gap: 0.35rem !important;
            border-radius: 4px !important;
            transition: all 0.2s ease !important;
            margin: 0 !important;
        }

        .dropdown-icon {
            display: inline-flex !important;
            align-items: center !important;
            margin-left: 4px !important;
            transition: transform 0.2s ease !important;
        }

        .dropdown:hover .dropdown-icon,
        .dropdown.open .dropdown-icon {
            transform: rotate(180deg) !important;
        }

        .dropdown-menu {
            position: absolute !important;
            top: calc(100% + 0.25rem) !important;
            left: 0 !important;
            min-width: 200px !important;
            background: white !important;
            border: 2px solid var(--border-color, #e5e7eb) !important;
            border-radius: 5px !important;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08) !important;
            padding: 0.2rem 0 !important;
            opacity: 0 !important;
            visibility: hidden !important;
            transform: translateY(8px) !important;
            transition: all 0.2s ease !important;
            z-index: 1100 !important;
            margin: 0 !important;
        }

        .dropdown:hover .dropdown-menu,
        .dropdown.open .dropdown-menu {
            opacity: 1 !important;
            visibility: visible !important;
            transform: translateY(0) !important;
        }

        .dropdown-item {
            display: block !important;
            padding: 0.65rem 1rem !important;
            font-size: 0.9rem !important;
            color: var(--text-dark, #111827) !important;
            transition: background-color 0.15s, color 0.15s !important;
            text-decoration: none !important;
            white-space: nowrap !important;
            margin: 0 !important;
            border: none !important;
            background: transparent !important;
        }

        .dropdown-item:hover,
        .dropdown-item.active {
            background-color: var(--surface-color, #f8fafc) !important;
            color: var(--primary-color, #0067b8) !important;
        }

        .nav-toggle {
            display: none !important;
            background: none !important;
            border: none !important;
            cursor: pointer !important;
            color: var(--text-dark, #111827) !important;
            padding: 0.35rem !important;
            line-height: 1 !important;
            margin: 0 !important;
            align-items: center !important;
            justify-content: center !important;
        }

        /* Light Gray Footer Styling exactly from academic.html */
        footer,
        footer#siteFooter,
        .site-footer {
            background-color: #f8f8f8 !important;
            color: #475569 !important;
            padding: 3.5rem 0 2rem !important;
            border-top: 2px solid rgb(235, 235, 235) !important;
            text-align: left !important;
            font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif !important;
            width: 100% !important;
            box-sizing: border-box !important;
            display: block !important;
        }

        .site-footer .container,
        footer#siteFooter .container,
        footer .container {
            max-width: 1260px !important;
            margin: 0 auto !important;
            padding: 0 1.5rem !important;
            width: 100% !important;
            box-sizing: border-box !important;
        }

        .footer-links-grid {
            display: grid !important;
            grid-template-columns: repeat(4, 1fr) !important;
            gap: 2rem !important;
            margin-bottom: 2.5rem !important;
        }

        .footer-column h4 {
            font-size: 1.05rem !important;
            font-weight: 700 !important;
            color: #1b1b1b !important;
            margin-top: 0 !important;
            margin-bottom: 0.5rem !important;
            position: relative !important;
            padding-bottom: 0.5rem !important;
            text-align: left !important;
            border: none !important;
        }

        .footer-column ul {
            list-style: none !important;
            padding: 0 !important;
            margin: 0 !important;
            display: flex !important;
            flex-direction: column !important;
            gap: 0.65rem !important;
        }

        .footer-column ul li {
            margin: 0 !important;
            padding: 0 !important;
            text-align: left !important;
        }

        .footer-column ul li a {
            font-size: 0.9rem !important;
            color: #3f3f3f !important;
            transition: color 0.2s ease !important;
            display: inline-block !important;
            text-decoration: none !important;
            margin: 0 !important;
            padding: 0 !important;
            border: none !important;
            background: transparent !important;
        }

        .footer-column ul li a:hover {
            color: rgb(26, 26, 26) !important;
            text-decoration: underline !important;
        }

        .footer-bottom-bar {
            border-top: 1px solid #cbd5e1 !important;
            padding-top: 1.5rem !important;
            display: flex !important;
            justify-content: space-between !important;
            align-items: center !important;
            flex-wrap: wrap !important;
            gap: 1rem !important;
            font-size: 0.85rem !important;
            color: #64748b !important;
        }

        @media (max-width: 992px) {
            .footer-links-grid {
                grid-template-columns: repeat(2, 1fr) !important;
            }
        }

        /* Mobile & Small Screen Breakpoints */
        @media (max-width: 768px) {
            header,
            header#siteHeader {
                padding: 0 !important;
                margin: 0 !important;
                display: block !important;
                width: 100% !important;
                position: sticky !important;
                top: 0 !important;
                z-index: 1000 !important;
            }

            nav,
            nav.navbar,
            .navbar {
                position: relative !important;
                top: auto !important;
                left: auto !important;
                right: auto !important;
                background: white !important;
                box-shadow: none !important;
                border-bottom: 2px solid var(--border-color, #e5e7eb) !important;
                width: 100% !important;
                padding: 0.75rem 0 !important;
                visibility: visible !important;
                opacity: 1 !important;
            }

            .nav-container {
                display: flex !important;
                justify-content: space-between !important;
                align-items: center !important;
                max-width: 100% !important;
                padding: 0 1rem !important;
                width: 100% !important;
                box-sizing: border-box !important;
            }

            .nav-logo {
                display: flex !important;
                align-items: center !important;
                gap: 0.75rem !important;
                visibility: visible !important;
            }

            .nav-toggle {
                display: inline-flex !important;
                align-items: center !important;
                justify-content: center !important;
                min-width: 40px !important;
                min-height: 40px !important;
                cursor: pointer !important;
                color: var(--text-dark, #111827) !important;
                visibility: visible !important;
            }

            .nav-links-wrapper {
                display: none !important;
                position: absolute !important;
                top: 100% !important;
                left: 0 !important;
                right: 0 !important;
                background: white !important;
                flex-direction: column !important;
                padding: 1rem 1.25rem !important;
                border-bottom: 2px solid var(--border-color, #e5e7eb) !important;
                box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
                align-items: stretch !important;
                gap: 0.5rem !important;
                z-index: 1050 !important;
                width: 100% !important;
                box-sizing: border-box !important;
            }

            .nav-links-wrapper.active {
                display: flex !important;
            }

            .dropdown {
                width: 100% !important;
            }

            .dropdown-toggle {
                width: 100% !important;
                justify-content: space-between !important;
                padding: 0.65rem 0.85rem !important;
            }

            .dropdown-menu {
                position: static !important;
                box-shadow: none !important;
                border: 1px solid var(--border-color, #e5e7eb) !important;
                margin-top: 0.25rem !important;
                display: none !important;
                opacity: 1 !important;
                visibility: visible !important;
                transform: none !important;
                width: 100% !important;
                border-radius: 4px !important;
            }

            .dropdown:hover .dropdown-menu,
            .dropdown.open .dropdown-menu {
                display: block !important;
                opacity: 1 !important;
                visibility: visible !important;
            }

            footer#siteFooter,
            footer.site-footer,
            footer {
                padding: 2.5rem 0 1.5rem !important;
                display: block !important;
                visibility: visible !important;
            }

            .site-footer .container,
            footer#siteFooter .container,
            footer .container {
                padding: 0 1rem !important;
            }

            .footer-bottom-bar {
                flex-direction: column !important;
                text-align: center !important;
                gap: 0.75rem !important;
            }
        }

        @media (max-width: 576px) {
            .footer-links-grid {
                grid-template-columns: 1fr !important;
                gap: 1.75rem !important;
            }
        }
    `;
    document.head.appendChild(style);
}

function renderHeader() {
    const currentPath = window.location.pathname;

    const isHome = currentPath === '/' || currentPath.endsWith('index.html');
    const isRtuSgpa = currentPath.includes('rtu-sgpa-calculator');
    const isRtuCgpa = currentPath.includes('rtu-cgpa-calculator');
    const isSkitSgpa = currentPath.includes('skit-sgpa-calculator');
    const isSkitCgpa = currentPath.includes('skit-cgpa-calculator');
    const isMbmSgpa = currentPath.includes('mbm-sgpa-calculator');
    const isMbmCgpa = currentPath.includes('mbm-cgpa-calculator');

    const headerHTML = `
        <nav class="navbar">
            <div class="nav-container">
                <a href="/" class="nav-logo">
                    <img src="./logo.png" alt="Famral Logo" width="32" height="32">
                    <span>Famral</span>
                </a>
                <button class="nav-toggle" id="navToggle" aria-label="Toggle Navigation" onclick="toggleMobileNav(event)">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="display:block;"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                </button>
                <div class="nav-links-wrapper" id="navLinks">
                    <a href="/" class="nav-link">Home</a>
                    <a href="/developer" class="nav-link">Developer Tools</a>
                    <a href="/image" class="nav-link">Image Tools</a>
                    <a href="/academic" class="nav-link">Academic Tools</a>
                    <a href="/pdf" class="nav-link">PDF Tools</a>
                </div>
            </div>
            <!-- Hidden dummy elements to prevent any legacy scripts from breaking -->
            <button id="hamburger" style="display:none;" aria-hidden="true"></button>
            <nav id="nav-menu" style="display:none;" aria-hidden="true"></nav>
        </nav>`;

    const headerElem = document.getElementById('siteHeader') || document.querySelector('header');
    if (headerElem) {
        headerElem.innerHTML = headerHTML;
    }
}

function renderFooter() {
    const currentYear = new Date().getFullYear();
    const footerHTML = `
        <div class="container">
            <div class="footer-links-grid">
                <!-- Column 1: Academic Tools -->
                <div class="footer-column">
                    <h4>Academic Tools</h4>
                    <ul>
                        <li><a href="/rtu-sgpa-calculator">RTU SGPA Calculator</a></li>
                        <li><a href="/rtu-cgpa-calculator">RTU CGPA Calculator</a></li>
                        <li><a href="/skit-sgpa-calculator">SKIT SGPA Calculator</a></li>
                        <li><a href="/skit-cgpa-calculator">SKIT CGPA Calculator</a></li>
                        <li><a href="/mbm-sgpa-calculator">MBM SGPA Calculator</a></li>
                        <li><a href="/mbm-cgpa-calculator">MBM CGPA Calculator</a></li>
                    </ul>
                </div>

                <!-- Column 2: College Predictors -->
                <div class="footer-column">
                    <h4>College Predictors</h4>
                    <ul>
                        <li><a href="https://www.famral.com/jee-main-college-predictor" target="_blank">JEE Main Predictor</a></li>
                        <li><a href="https://www.famral.com/mht-cet-college-predictor" target="_blank">MHT CET Predictor</a></li>
                        <li><a href="https://www.famral.com/tnea-college-predictor" target="_blank">TNEA College Predictor</a></li>
                        <li><a href="https://www.famral.com/wbjee-college-predictor" target="_blank">WBJEE College Predictor</a></li>
                        <li><a href="https://www.famral.com/icar-college-predictor" target="_blank">ICAR College Predictor</a></li>
                        <li><a href="https://www.famral.com/kcet-college-predictor" target="_blank">KCET College Predictor</a></li>
                    </ul>
                </div>

                <!-- Column 3: Quick Links -->
                <div class="footer-column">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/rtu-sgpa-calculator">B.Tech Syllabus Guide</a></li>
                        <li><a href="/rtu-cgpa-calculator">CGPA to Percentage Formula</a></li>
                        <li><a href="/skit-sgpa-calculator#marks-converter">Marks to Grade Converter</a></li>
                        <li><a href="/">Semester Credit Matrix</a></li>
                    </ul>
                </div>

                <!-- Column 4: Company & Legal -->
                <div class="footer-column">
                    <h4>Company &amp; Legal</h4>
                    <ul>
                        <li><a href="https://www.famral.com/about" target="_blank">About Us</a></li>
                        <li><a href="https://www.famral.com/privacy" target="_blank">Privacy Policy</a></li>
                        <li><a href="https://www.famral.com/terms" target="_blank">Terms of Service</a></li>
                        <li><a href="https://www.famral.com/contact" target="_blank">Contact</a></li>
                    </ul>
                </div>
            </div>

            <!-- Bottom Bar -->
            <div class="footer-bottom-bar">
                <div>
                    © ${currentYear} Famral. All rights reserved. <span id="year" style="display:none;">${currentYear}</span>
                </div>
                <div>
                    <a href="#top" style="color: #64748b; text-decoration: none;">Back to Top</a>
                </div>
            </div>
        </div>`;

    const footerElem = document.getElementById('siteFooter') || document.querySelector('footer');
    if (footerElem) {
        footerElem.className = 'site-footer';
        footerElem.innerHTML = footerHTML;
    }
}

// Global Navigation & UI Event Handlers
function toggleMobileNav(e) {
    if (e) {
        e.stopPropagation();
        e.preventDefault();
    }
    const navLinks = document.getElementById('navLinks');
    if (navLinks) {
        navLinks.classList.toggle('active');
    }
}

function toggleDropdown(e, id) {
    if (e) {
        e.stopPropagation();
        e.preventDefault();
    }
    const target = document.getElementById(id);
    document.querySelectorAll('.dropdown').forEach(d => {
        if (d !== target) d.classList.remove('open');
    });
    if (target) {
        target.classList.toggle('open');
    }
}

document.addEventListener('click', (e) => {
    const navLinks = document.getElementById('navLinks');
    const navToggle = document.getElementById('navToggle');
    if (navLinks && navToggle && !navLinks.contains(e.target) && !navToggle.contains(e.target)) {
        navLinks.classList.remove('active');
    }
    document.querySelectorAll('.dropdown').forEach(d => {
        if (!d.contains(e.target)) {
            d.classList.remove('open');
        }
    });
});

function toggleFaq(el) {
    const answer = el.nextElementSibling;
    if (!answer) return;
    el.classList.toggle('active');
    answer.classList.toggle('show');
    const icon = el.querySelector('i');
    if (icon) {
        if (answer.classList.contains('show')) {
            icon.className = 'fas fa-chevron-up';
        } else {
            icon.className = 'fas fa-chevron-down';
        }
    }
}

// Automatic Initialization
function initFamralCommon() {
    injectStyles();
    renderHeader();
    renderFooter();
    const yearElem = document.getElementById('year');
    if (yearElem) {
        yearElem.textContent = new Date().getFullYear();
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFamralCommon);
} else {
    initFamralCommon();
}
