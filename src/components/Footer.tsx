"use client";

import styles from "./Footer.module.css";
import { motion } from "framer-motion";
import { Smartphone } from "lucide-react";

export default function Footer() {
    return (
        <footer id="rsvp" className={styles.footer}>
            <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h2 className={styles.title}>Send os gerne et svar inden den<br />25. marts 2026</h2>
                <p className={styles.text}>
                    Vi glæder os rigtig meget og håber at se jer, så vi kan fejre dagen sammen.
                </p>

                <div className={styles.contactContainer}>
                    <a href="sms:+4560510321" className={styles.phoneLink}>
                        <Smartphone size={18} />
                        <span>60 51 03 21 (Anette)</span>
                    </a>
                    <a href="sms:+4524897906" className={styles.phoneLink}>
                        <Smartphone size={18} />
                        <span>24 89 79 06 (Chris)</span>
                    </a>
                </div>
            </motion.div>
        </footer>
    );
}
