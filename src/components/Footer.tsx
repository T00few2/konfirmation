"use client";

import styles from "./Footer.module.css";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer id="rsvp" className={styles.footer}>
            <h2 className={styles.title}>S.U. senest d. 1. april 2026</h2>
            <p className={styles.text}>
                Vi glæder os utrolig meget til at se jer og fejre dagen sammen.
                Giv os venligst besked om I kan deltage, så vi kan planlægge mad mm.
            </p>

            <div className={styles.contactContainer}>
                <a href="sms:+4560510321" className={styles.phoneLink}>
                    <Phone size={18} />
                    <span>60 51 03 21 (Anette)</span>
                </a>
                <a href="sms:+4524897906" className={styles.phoneLink}>
                    <Phone size={18} />
                    <span>24 89 79 06 (Chris)</span>
                </a>
            </div>

            <div className={styles.copyright}>
                © 2026 Konfirmation
            </div>
        </footer>
    );
}
