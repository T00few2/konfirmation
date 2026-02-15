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
                        href="https://www.google.com/maps/search/?api=1&query=Josty+Pile+Allé+14A+2000+Frederiksberg"
                        target="_blank"
                        className={styles.infoTitle}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                        <div className={styles.iconWrapper}>
                            <MapPin size={24} />
                        </div>
                        Josty
                    </a>

                    <p className={styles.infoText}>
                        Festen finder sted på <strong>Josty</strong> kl. 12:00.
                    </p>
                    <p className={styles.infoText}>
                        <strong>
                            Josty<br />
                            Pile Allé 14A<br />
                            2000 Frederiksberg</strong>
                    </p>

                    <a className={styles.link} style={{ marginBottom: '1.5rem' }} href="https://www.google.com/maps/search/?api=1&query=Josty+Pile+Allé+14A+2000+Frederiksberg" target="_blank">
                        Rutevejledning
                    </a>

                    <div className={styles.map}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4634.5270563283475!2d12.52741971231963!3d55.673614097975474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46525397a1ec9761%3A0xc6077864102bd665!2sJosty!5e1!3m2!1sda!2sdk!4v1771141159872!5m2!1sda!2sdk"
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

                {/* Parking & Gifts */}
                <motion.div
                    className={styles.card}
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                    <a
                        href="https://www.google.com/maps/search/?api=1&query=Parkering+Pile+Allé+14+2000+Frederiksberg"
                        target="_blank"
                        className={styles.infoTitle}
                        style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                        <div className={styles.iconWrapper}>
                            <Car size={24} />
                        </div>
                        Parkering
                    </a>
                    <p className={styles.infoText}>
                        Til de hurtige er der begrænsede parkeringsmuligheder ved Josty. Husk at sætte P-skiven.<br /><br />
                        Der er også en større parkeringsplads meget tæt på:
                    </p>
                    <p className={styles.infoText}>
                        <strong>Parkering Pile Allé 14<br />
                            2000 Frederiksberg</strong>
                    </p>
                    <a className={styles.link} style={{ marginBottom: '1rem' }} href="https://www.google.com/maps/search/?api=1&query=Parkering+Pile+Allé+14+2000+Frederiksberg" target="_blank" rel="noopener noreferrer">
                        Rutevejledning
                    </a>
                    <div className={styles.map} style={{ marginTop: '1rem', marginBottom: '1rem' }}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d289.6718235978964!2d12.530207!3d55.671739!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465253970808093b%3A0xd47320d991c73957!2sParkering%20Pile%20All%C3%A9%2014%2C%20Frederiksberg%20%7C%20APCOA%20PARKING!5e1!3m2!1sda!2sus!4v1771147155005!5m2!1sda!2sus"
                            width="100%"
                            height="250"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Kort over parkering"
                        />
                    </div>

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
                        Hvis I vil glæde konfirmanden med en gave, kan I finde ønskesedlen her:
                    </p>
                    <a className={styles.link} href="https://onskeskyen.dk" target="_blank">
                        Se Ønskeskyen &rarr;
                    </a>
                </motion.div>

            </div>
        </section>
    );
}
