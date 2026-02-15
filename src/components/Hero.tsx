"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero} id="hero">

            {/* Background */}
            <div className={styles.gradientBg} />

            {/* Blobs */}
            <div className={`${styles.blob} ${styles.blobPurple}`} />
            <div className={`${styles.blob} ${styles.blobYellow}`} />
            <div className={`${styles.blob} ${styles.blobPink}`} />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={styles.content}
            >
                <span className={styles.badge}>
                    Konfirmation 2026
                </span>

                <h1 className={styles.title}>
                    Frederik Gothard Mikkelsen-Kjær
                </h1>

                <p className={styles.description}>
                    Vi glæder os til at byde jer velkommen til en uforglemmelig dag fyldt med fejring, god mad og hygge.
                </p>

                <div className={styles.buttons}>
                    <Link
                        href="#rsvp"
                        className={styles.primaryButton}
                    >
                        Svar her
                    </Link>
                    <Link
                        href="#info"
                        className={styles.secondaryButton}
                    >
                        Praktisk info
                    </Link>
                </div>
            </motion.div>

            {/* Scroll Down Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className={styles.scrollIndicator}
            >
                <Link href="#invitation" className={styles.scrollLink}>
                    <span className={styles.scrollText}>Scroll ned</span>
                    <ArrowDown className={styles.arrow} width={20} height={20} />
                </Link>
            </motion.div>
        </section>
    );
}
