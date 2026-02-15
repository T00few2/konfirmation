"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MapPin, Utensils, Gift } from "lucide-react";
import styles from "./Navbar.module.css";

const navItems = [
    { name: "Invitation", href: "#invitation", icon: Gift },
    { name: "Praktisk", href: "#info", icon: MapPin },
    { name: "Menu", href: "#menu", icon: Utensils },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        handleScroll(); // Initial check
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
            <div className={styles.container}>
                {/* Logo / Brand */}
                <Link
                    href="#invitation"
                    className={styles.logo}
                    onClick={() => setIsOpen(false)}
                >
                    Frederiks Konfirmation
                </Link>

                {/* Desktop Menu */}
                <div className={styles.desktopMenu}>
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={styles.link}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link
                        href="#rsvp"
                        className={styles.cta}
                    >
                        Svar
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={styles.mobileButton}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className={styles.mobileMenu}
                    >
                        <div className={styles.mobileLinks}>
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={styles.mobileLink}
                                    onClick={() => setIsOpen(false)}
                                >
                                    <item.icon size={20} />
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                href="#rsvp"
                                className={styles.mobileCta}
                                onClick={() => setIsOpen(false)}
                            >
                                Svar
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
