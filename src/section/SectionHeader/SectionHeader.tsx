'use client'

import React, { useState, useEffect, useRef } from 'react';

export default function SectionHeader() {
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