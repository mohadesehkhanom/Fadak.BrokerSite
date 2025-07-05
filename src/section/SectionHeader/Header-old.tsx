'use client'

import React, { useState, useEffect, useRef } from 'react';

export default function Header_old() {
    // State for mobile menu toggle
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // State for search toggle
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    // State for dropdowns
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    // State for language selector
    const [selectedLanguage, setSelectedLanguage] = useState('En');

    // State for active navbar item
    const [activeNavItem, setActiveNavItem] = useState<string>('');

    // Refs for handling outside clicks
    const searchRef = useRef<HTMLDivElement>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null);

    // Handle mobile menu toggle
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Handle search toggle
    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    // Handle dropdown toggle
    const toggleDropdown = (dropdownName: string) => {
        if (activeDropdown === dropdownName) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(dropdownName);
        }
    };

    // Handle language change
    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedLanguage(e.target.value);
    };

    // Handle search form submission
    const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const searchTerm = formData.get('search') as string;
        console.log('Search term:', searchTerm);
        // Add your search logic here
    };

    // Handle navbar item active state
    const handleNavItemClick = (itemName: string) => {
        setActiveNavItem(itemName);
        // Close mobile menu when nav item is clicked
        setIsMobileMenuOpen(false);
    };

    // Close dropdowns and search when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setIsSearchOpen(false);
            }

            // Close dropdowns when clicking outside
            if (activeDropdown) {
                const dropdownElement = document.querySelector('.dropdown.show');
                if (dropdownElement && !dropdownElement.contains(event.target as Node)) {
                    setActiveDropdown(null);
                }
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [activeDropdown]);

    // Close mobile menu on window resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1200) {
                setIsMobileMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <header className="header-section border-one index">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-xl nav-shadow" id="navbar">
                            <a className="navbar-brand" href="index.html">
                                <img
                                    src="../assets/images/logo/logo.png"
                                    className="logo"
                                    alt="logo"
                                />
                            </a>

                            {/* Mobile menu toggle button */}
                            <button
                                className="navbar-toggler"
                                type="button"
                                onClick={toggleMobileMenu}
                                aria-controls="navbar-content"
                                aria-expanded={isMobileMenuOpen}
                                aria-label="Toggle navigation"
                            >
                                <i className="bi bi-list"></i>
                            </button>

                            {/* Main navigation */}
                            <div
                                className={`collapse navbar-collapse ms-auto ${isMobileMenuOpen ? 'show' : ''}`}
                                id="navbar-content"
                                ref={mobileMenuRef}
                            >
                                <div className="main-menu index-page">
                                    <ul className="navbar-nav mb-lg-0 me-auto">
                                        {/* Home dropdown */}
                                        <li className={`nav-item dropdown nav-cus-item ${activeDropdown === 'home' ? 'show' : ''}`}>
                                            <a
                                                className={`nav-link dropdown-toggle ${activeNavItem === 'home' ? 'active' : ''}`}
                                                href="#"
                                                role="button"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    toggleDropdown('home');
                                                    handleNavItemClick('home');
                                                }}
                                                aria-expanded={activeDropdown === 'home'}
                                            >
                                                Home
                                            </a>
                                            <ul className={`dropdown-menu custom-dropdowns d-xl-flex ${activeDropdown === 'home' ? 'show' : ''}`}>
                                                <li>
                                                    <a className="dropdown-item d-grid" href="index.html">
                                                        <img
                                                            src="../assets/images/menu/landing1.png"
                                                            alt="landing-img"
                                                            className="d-xl-block d-none"
                                                        />
                                                        <span className="text-cus d-block">Home One</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item d-grid" href="../index-2.html">
                                                        <img
                                                            src="../assets/images/menu/landing2.png"
                                                            alt="landing-img"
                                                            className="d-xl-block d-none"
                                                        />
                                                        <span className="text-cus d-block">Home Two</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item d-grid" href="../index-3.html">
                                                        <img
                                                            src="../assets/images/menu/landing3.png"
                                                            alt="landing-img"
                                                            className="d-xl-block d-none"
                                                        />
                                                        <span className="text-cus d-block">Home Three</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item d-grid" href="../index-4.html">
                                                        <img
                                                            src="../assets/images/menu/landing4.png"
                                                            alt="landing-img"
                                                            className="d-xl-block d-none"
                                                        />
                                                        <span className="text-cus d-block">Home Four</span>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item d-grid" href="../index-5.html">
                                                        <img
                                                            src="../assets/images/menu/landing5.png"
                                                            alt="landing-img"
                                                            className="d-xl-block d-none"
                                                        />
                                                        <span className="text-cus d-block">Home Five</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>

                                        {/* Brokerage Reviews dropdown */}
                                        <li className={`nav-item dropdown ${activeDropdown === 'brokerage' ? 'show' : ''}`}>
                                            <a
                                                className={`nav-link dropdown-toggle ${activeNavItem === 'brokerage' ? 'active' : ''}`}
                                                href="#"
                                                role="button"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    toggleDropdown('brokerage');
                                                    handleNavItemClick('brokerage');
                                                }}
                                                aria-expanded={activeDropdown === 'brokerage'}
                                            >
                                                Brokerage Reviews
                                            </a>
                                            <ul className={`dropdown-menu ${activeDropdown === 'brokerage' ? 'show' : ''}`}>
                                                <li>
                                                    <a className="dropdown-item" href="../brokerage-reviews.html">
                                                        Brokerage Reviews
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="../brokerage-reviews-details.html">
                                                        Brokerage Details 01
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="../brokerage-reviews-details2.html">
                                                        Brokerage Details 02
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>

                                        {/* Market Analysis dropdown */}
                                        <li className={`nav-item dropdown ${activeDropdown === 'market' ? 'show' : ''}`}>
                                            <a
                                                className={`nav-link dropdown-toggle ${activeNavItem === 'market' ? 'active' : ''}`}
                                                href="#"
                                                role="button"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    toggleDropdown('market');
                                                    handleNavItemClick('market');
                                                }}
                                                aria-expanded={activeDropdown === 'market'}
                                            >
                                                Market Analysis
                                            </a>
                                            <ul className={`dropdown-menu ${activeDropdown === 'market' ? 'show' : ''}`}>
                                                <li>
                                                    <a className="dropdown-item" href="../weekly-review.html">
                                                        Weekly Review
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="../weekly-review-details.html">
                                                        Weekly Review Details
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>

                                        {/* Educate dropdown */}
                                        <li className={`nav-item dropdown ${activeDropdown === 'educate' ? 'show' : ''}`}>
                                            <a
                                                className={`nav-link dropdown-toggle ${activeNavItem === 'educate' ? 'active' : ''}`}
                                                href="#"
                                                role="button"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    toggleDropdown('educate');
                                                    handleNavItemClick('educate');
                                                }}
                                                aria-expanded={activeDropdown === 'educate'}
                                            >
                                                Educate
                                            </a>
                                            <ul className={`dropdown-menu ${activeDropdown === 'educate' ? 'show' : ''}`}>
                                                <li>
                                                    <a className="dropdown-item" href="../video-tutorial.html">
                                                        Video Tutorial
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="../video-tutorial-details.html">
                                                        Tutorial Details
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="../graphic-tutorial.html">
                                                        Graphic Tutorial
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="../graphic-tutorial-details.html">
                                                        Graphic Details
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>

                                        {/* Serve dropdown */}
                                        <li className={`nav-item dropdown ${activeDropdown === 'serve' ? 'show' : ''}`}>
                                            <a
                                                className={`nav-link dropdown-toggle ${activeNavItem === 'serve' ? 'active' : ''}`}
                                                href="#"
                                                role="button"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    toggleDropdown('serve');
                                                    handleNavItemClick('serve');
                                                }}
                                                aria-expanded={activeDropdown === 'serve'}
                                            >
                                                Serve
                                            </a>
                                            <ul className={`dropdown-menu ${activeDropdown === 'serve' ? 'show' : ''}`}>
                                                <li>
                                                    <a className="dropdown-item" href="../service-plan.html">
                                                        Service Plan
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="../service-packages.html">
                                                        Service Packages
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="dropdown-item" href="../packages-details.html">
                                                        Packages Details
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>

                                        {/* Pages dropdown */}
                                        <li className={`nav-item dropdown ${activeDropdown === 'pages' ? 'show' : ''}`}>
                                            <a
                                                className={`nav-link dropdown-toggle ${activeNavItem === 'pages' ? 'active' : ''}`}
                                                href="#"
                                                role="button"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    toggleDropdown('pages');
                                                    handleNavItemClick('pages');
                                                }}
                                                aria-expanded={activeDropdown === 'pages'}
                                            >
                                                Pages
                                            </a>
                                            <ul className={`dropdown-menu ${activeDropdown === 'pages' ? 'show' : ''}`}>
                                                <li><a className="dropdown-item" href="../about.html">About Us</a></li>
                                                <li><a className="dropdown-item" href="../faq.html">Faqs</a></li>
                                                <li><a className="dropdown-item" href="../blog.html">Blog</a></li>
                                                <li><a className="dropdown-item" href="../blog-details.html">Blog Details</a></li>
                                                <li><a className="dropdown-item" href="../contact.html">Contact Us</a></li>
                                                <li><a className="dropdown-item" href="../sign-up.html">Sign Up</a></li>
                                                <li><a className="dropdown-item" href="../sign-in.html">Sign In</a></li>
                                                <li><a className="dropdown-item" href="../error.html">404 Error Page</a></li>
                                            </ul>
                                        </li>
                                    </ul>

                                    {/* Right side navigation */}
                                    <div className="nav-right d-none d-xl-block">
                                        <div className="nav-right__search" ref={searchRef}>
                                            {/* Search toggle button */}
                                            <button
                                                type="button"
                                                onClick={toggleSearch}
                                                className="cmn__search-icon nav-right__search-icon d-center"
                                                style={{ background: 'none', border: 'none' }}
                                            >
                                                <i className="bi bi-search"></i>
                                                <span></span>
                                            </button>

                                            {/* Language selector */}
                                            <div className="language-box d-flex align-items-center justify-content-center position-relative">
                                                <select
                                                    name="language"
                                                    value={selectedLanguage}
                                                    onChange={handleLanguageChange}
                                                >
                                                    <option value="En">En</option>
                                                    <option value="Es">Es</option>
                                                    <option value="Hy">Hy</option>
                                                    <option value="De">De</option>
                                                </select>
                                                <i className="bi bi-globe icon"></i>
                                            </div>

                                            {/* Contact button */}
                                            <a href="../contact.html" className="btn_theme btn_theme_active">
                                                Contact Us
                                                <i className="bi bi-arrow-up-right"></i>
                                                <span></span>
                                            </a>
                                        </div>

                                        {/* Search form */}
                                        <div className={`nav-right__search-inner ${isSearchOpen ? 'active' : ''}`}>
                                            <div className="nav-search-inner__form">
                                                <form
                                                    method="POST"
                                                    id="search"
                                                    className="inner__form"
                                                    onSubmit={handleSearchSubmit}
                                                >
                                                    <div className="input-group">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Search"
                                                            name="search"
                                                            required
                                                        />
                                                        <button type="submit" className="search_icon">
                                                            <i className="bi bi-search"></i>
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

            {/* Mobile menu backdrop */}
            {isMobileMenuOpen && (
                <div
                    className="navbar-backdrop"
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        zIndex: 1040
                    }}
                />
            )}
        </header>
    );
}