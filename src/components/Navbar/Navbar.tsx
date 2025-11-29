'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiMoon, FiSun, FiGlobe } from 'react-icons/fi';
import styles from './Navbar.module.css';

const Navbar = () => {
    const t = useTranslations('nav');
    const pathname = usePathname();
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDark(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        if (isDark) {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
            setIsDark(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
            setIsDark(true);
        }
    };

    const toggleLanguage = () => {
        const currentLocale = pathname.split('/')[1];
        const newLocale = currentLocale === 'en' ? 'hi' : 'en';
        const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
        router.push(newPath);
    };

    const navLinks = [
        { name: t('home'), href: '/' },
        { name: t('about'), href: '/#about' },
        { name: t('projects'), href: '/#projects' },
        { name: t('skills'), href: '/#skills' },
        { name: t('experience'), href: '/#experience' },
        { name: t('game'), href: '/game' },
        { name: t('contact'), href: '/contact' },
    ];

    return (
        <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''} ${isDark ? styles.dark : ''}`}>
            <div className={styles.container}>
                <div className={styles.navContent}>
                    <div>
                        <Link href="/" className={styles.logo}>
                            AJ
                        </Link>
                    </div>

                    <div className={styles.desktopNav}>
                        <div className={styles.navLinks}>
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`${styles.navLink} ${isDark ? styles.dark : ''}`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className={styles.actions}>
                        <button
                            onClick={toggleLanguage}
                            className={`${styles.iconButton} ${isDark ? styles.dark : ''}`}
                            aria-label="Toggle Language"
                        >
                            <FiGlobe className="w-5 h-5" />
                        </button>
                        <button
                            onClick={toggleTheme}
                            className={`${styles.iconButton} ${isDark ? styles.dark : ''}`}
                            aria-label="Toggle Theme"
                        >
                            {isDark ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
                        </button>
                    </div>

                    <div className={styles.mobileMenuButton}>
                        <button onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className={`${styles.mobileMenu} ${isDark ? styles.dark : ''}`}
                    >
                        <div className={styles.mobileMenuContent}>
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`${styles.mobileNavLink} ${isDark ? styles.dark : ''}`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className={styles.mobileActions}>
                                <button onClick={toggleLanguage} className={`${styles.mobileActionButton} ${isDark ? styles.dark : ''}`}>
                                    <FiGlobe /> <span>Change Language</span>
                                </button>
                                <button onClick={toggleTheme} className={`${styles.mobileActionButton} ${isDark ? styles.dark : ''}`}>
                                    {isDark ? <FiSun /> : <FiMoon />} <span>{isDark ? 'Light Mode' : 'Dark Mode'}</span>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
