"use client";

import styles from "./Info.module.css";
import { Car, MapPin, Gift } from "lucide-react";
import { motion } from "framer-motion";

export default function Info() {
    return (
        <section id="info" className={styles.section}>
            <motion.h2
                className={styles.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                Praktisk Information
            </motion.h2>
            <div className={styles.grid}>

                {/* Location */}
                <motion.div
                    className={styles.card}
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                >
                    <a
                        href="https://www.google.com/maps/search/?api=1&query=CF+Richs+Vej+7+2000+Frederiksberg"
                        target="_blank"
                        className={styles.infoTitle}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                        <div className={styles.iconWrapper}>
                            <MapPin size={24} />
                        </div>
                        Lokation
                    </a>

                    <p className={styles.infoText}>
                        Festen finder sted på <br /><strong>C.F. Richs Vej 7 kl. 12:00</strong>
                    </p>
                    <p className={styles.infoText}>
                        <strong>
                            C.F. Richs Vej 7<br />
                            2000 Frederiksberg</strong>
                    </p>

                    <a className={styles.link} style={{ marginBottom: '1.5rem' }} href="https://www.google.com/maps/search/?api=1&query=CF+Richs+Vej+7+2000+Frederiksberg" target="_blank">
                        Rutevejledning
                    </a>

                    <div className={styles.map}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.2312!2d12.5112!3d55.6841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652530b10c8c0f5%3A0xc3f58a8a4f6cf1a6!2sC.F.+Richs+Vej+7%2C+2000+Frederiksberg!5e0!3m2!1sda!2sdk!4v1711141159872!5m2!1sda!2sdk"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Kort over festlokationen"
                        />
                    </div>
                </motion.div>

                {/* Parking */}
                <motion.div
                    className={styles.card}
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    <div className={styles.infoTitle}>
                        <div className={styles.iconWrapper}>
                            <Car size={24} />
                        </div>
                        Parkering
                    </div>
                    <p className={styles.infoText}>
                        Vejene omkring huset er en del af Frederiksbergs parkeringszone og kræver betaling imellem 7-17 på lørdage.
                        Betalingen kan foretages med EasyPark app, der findes i <a href="https://apps.apple.com/dk/app/easypark-parking-made-easy/id449594317" target="_blank" className={styles.textLink}>App Store</a> og <a href="https://play.google.com/store/apps/details?id=net.easypark.android" target="_blank" className={styles.textLink}>Google Play</a>.
                    </p>
                </motion.div>

                {/* Gifts - Full Width */}
                <motion.div
                    className={styles.card}
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    style={{ gridColumn: "1 / -1" }}
                >
                    <div className={styles.infoTitle}>
                        <div className={styles.iconWrapper}>
                            <Gift size={24} />
                        </div>
                        Gaveønsker
                    </div>
                    <p className={styles.infoText}>
                        Hvis I vil glæde Frederik med en gave, kan I finde ønskesedlen her:
                    </p>
                    <a className={styles.link} href="https://onskeskyen.dk/s/enm1r0" target="_blank">
                        Se ønskesedlen her &rarr;
                    </a>
                </motion.div>

            </div>
        </section>
    );
}
