// common.js - Shared Navbar, Footer, and Styles for Famral Tools


function injectStyles() {
    if (document.getElementById('common-styles')) return;

    const style = document.createElement('style');
    style.id = 'common-styles';
    style.textContent = `
        header {
            position: sticky;
            top: 0;
            z-index: 1000;
        }

        .navbar {
            background: white;
            border-bottom: 2px solid var(--border-color, #e5e7eb);
            padding: 0.75rem 0;
            position: relative;
        }

        .nav-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1260px;
            margin: 0 auto;
            padding: 0 1.5rem;
        }

        .nav-logo {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            font-weight: 700;
            font-size: 1.25rem;
            color: var(--text-dark, #111827);
            text-decoration: none;
        }

        .nav-links-wrapper {
            display: flex;
            gap: 1.25rem;
            align-items: center;
        }

        .nav-link {
            font-size: 0.95rem;
            color: var(--text-dark, #111827);
            padding: 0.5rem 0.85rem;
            font-weight: 500;
            transition: all 0.2s ease;
            border-radius: 4px;
            display: inline-flex;
            align-items: center;
            gap: 0.35rem;
            text-decoration: none;
        }

        .nav-link:hover {
            background-color: var(--surface-color, #f8fafc);
            color: var(--primary-color, #0067b8);
        }

        /* Dropdown CSS */
        .dropdown {
            position: relative;
            display: inline-block;
        }

        .dropdown-toggle {
            cursor: pointer;
            border: none;
            background: transparent;
            font-family: inherit;
        }

        .dropdown-icon {
            font-size: 0.75rem;
            transition: transform 0.2s ease;
        }

        .dropdown:hover .dropdown-icon,
        .dropdown.open .dropdown-icon {
            transform: rotate(180deg);
        }

        .dropdown-menu {
            position: absolute;
            top: calc(100% + 0.25rem);
            left: 0;
            min-width: 200px;
            background: white;
            border: 2px solid var(--border-color, #e5e7eb);
            border-radius: 5px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
            padding: 0.2rem 0;
            opacity: 0;
            visibility: hidden;
            transform: translateY(8px);
            transition: all 0.2s ease;
            z-index: 1100;
        }

        .dropdown:hover .dropdown-menu,
        .dropdown.open .dropdown-menu {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
        }

        .dropdown-item {
            display: block;
            padding: 0.65rem 1rem;
            font-size: 0.9rem;
            color: var(--text-dark, #111827);
            transition: background-color 0.15s, color 0.15s;
            text-decoration: none;
        }

        .dropdown-item:hover {
            background-color: var(--surface-color, #f8fafc);
            color: var(--primary-color, #0067b8);
        }

        .nav-toggle {
            display: none;
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: var(--text-dark, #111827);
        }

        /* Light Gray Footer Styling */
        .site-footer {
            background-color: #f8f8f8;
            color: #475569;
            padding: 3.5rem 0 2rem;
            border-top: 2px solid rgb(235, 235, 235);
        }

        .footer-links-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 2rem;
            margin-bottom: 2.5rem;
        }

        .footer-column h4 {
            font-size: 1.05rem;
            font-weight: 700;
            color: #1b1b1b;
            margin-bottom: 0.5rem;
            position: relative;
            padding-bottom: 0.5rem;
        }

        .footer-column ul {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 0.65rem;
        }

        .footer-column ul li a {
            font-size: 0.9rem;
            color: #3f3f3f;
            transition: color 0.2s ease;
            display: inline-block;
            text-decoration: none;
        }

        .footer-column ul li a:hover {
            color: rgb(26, 26, 26);
            text-decoration: underline;
        }

        .footer-bottom-bar {
            border-top: 1px solid #cbd5e1;
            padding-top: 1.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 1rem;
            font-size: 0.85rem;
            color: #64748b;
        }

        @media (max-width: 992px) {
            .footer-links-grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 768px) {
            .nav-toggle {
                display: block;
            }

            .nav-links-wrapper {
                display: none;
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: white;
                flex-direction: column;
                padding: 1rem 1.25rem;
                border-bottom: 2px solid var(--border-color, #e5e7eb);
                box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
                align-items: stretch;
                gap: 0.5rem;
                z-index: 1050;
            }

            .nav-links-wrapper.active {
                display: flex !important;
            }

            .dropdown {
                width: 100%;
            }

            .dropdown-toggle {
                width: 100%;
                justify-content: space-between;
                padding: 0.65rem 0.85rem;
            }

            .dropdown-menu {
                position: static;
                box-shadow: none;
                border: 1px solid var(--border-color, #e5e7eb);
                margin-top: 0.25rem;
                display: none;
                opacity: 1;
                visibility: visible;
                transform: none;
                width: 100%;
                border-radius: 4px;
            }

            .dropdown:hover .dropdown-menu,
            .dropdown.open .dropdown-menu {
                display: block !important;
                opacity: 1 !important;
                visibility: visible !important;
            }

            .site-footer {
                padding: 2.5rem 0 1.5rem;
            }

            .footer-bottom-bar {
                flex-direction: column;
                text-align: center;
                gap: 0.75rem;
            }
        }

        @media (max-width: 576px) {
            .footer-links-grid {
                grid-template-columns: 1fr;
                gap: 1.75rem;
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
                <button class="nav-toggle" id="navToggle" aria-label="Toggle Navigation" onclick="toggleMobileNav()">
                    <i class="fas fa-bars"></i>
                </button>
                <div class="nav-links-wrapper" id="navLinks">
                    <a href="/" class="nav-link ${isHome ? 'active' : ''}">Home</a>
                    
                    <!-- Dropdown: Academic Calculators -->
                    <div class="dropdown" id="rtuDropdown">
                        <button type="button" class="nav-link dropdown-toggle ${(isRtuSgpa || isRtuCgpa || isSkitSgpa || isSkitCgpa || isMbmSgpa || isMbmCgpa) ? 'active' : ''}"
                            onclick="toggleDropdown(event, 'rtuDropdown')">
                            <span>Academic Tools</span>
                            <i class="fas fa-chevron-down dropdown-icon"></i>
                        </button>
                        <div class="dropdown-menu">
                            <a href="/rtu-sgpa-calculator" class="dropdown-item ${isRtuSgpa ? 'active' : ''}">
                                RTU SGPA Calculator
                            </a>
                            <a href="/rtu-cgpa-calculator" class="dropdown-item ${isRtuCgpa ? 'active' : ''}">
                                RTU CGPA Calculator
                            </a>
                            <a href="/skit-sgpa-calculator" class="dropdown-item ${isSkitSgpa ? 'active' : ''}">
                                SKIT SGPA Calculator
                            </a>
                            <a href="/skit-cgpa-calculator" class="dropdown-item ${isSkitCgpa ? 'active' : ''}">
                                SKIT CGPA Calculator
                            </a>
                            <a href="/mbm-sgpa-calculator" class="dropdown-item ${isMbmSgpa ? 'active' : ''}">
                                MBM SGPA Calculator
                            </a>
                            <a href="/mbm-cgpa-calculator" class="dropdown-item ${isMbmCgpa ? 'active' : ''}">
                                MBM CGPA Calculator
                            </a>
                        </div>
                    </div>
                    <a href="/image" class="nav-link">Image Tools</a>
                    <a href="https://www.famral.com/college-predictor" target="_blank" class="nav-link">College Predictor</a>
                </div>
            </div>
        </nav>`;

    const headerElem = document.getElementById('siteHeader') || document.querySelector('header');
    if (headerElem) {
        headerElem.innerHTML = headerHTML;
    }
}

function renderFooter() {
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
                    © 2026 Famral. All rights reserved.
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
function toggleMobileNav() {
    const navLinks = document.getElementById('navLinks');
    if (navLinks) {
        navLinks.classList.toggle('active');
    }
}

function toggleDropdown(e, id) {
    e.stopPropagation();
    const target = document.getElementById(id);
    document.querySelectorAll('.dropdown').forEach(d => {
        if (d !== target) d.classList.remove('open');
    });
    if (target) {
        target.classList.toggle('open');
    }
}

document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('open'));
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
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFamralCommon);
} else {
    initFamralCommon();
}
