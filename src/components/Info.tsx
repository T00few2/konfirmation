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
                    <div className={styles.infoTitle}>
                        <div className={styles.iconWrapper}>
                            <MapPin size={24} />
                        </div>
                        Kirken & Festen
                    </div>

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

                    <p className={styles.infoText}>
                        Konfirmationen finder sted i <strong>Godthåbskirken</strong>.
                    </p>
                    <p className={styles.infoText}>
                        Efter kirken fortsætter vi festen på:<br />
                        <strong>Josty</strong><br />
                        <strong>Pile Allé 14A, 2000 Frederiksberg</strong>
                    </p>

                    <a className={styles.link} href="https://www.google.com/maps/search/?api=1&query=Josty+Pile+Allé+14A+2000+Frederiksberg" target="_blank">
                        Rutevejledning
                    </a>
                </motion.div>

                {/* Parking & Gifts */}
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
                        Der er gode parkeringsmuligheder ved Josty.
                        <br />
                        Husk at sætte P-skiven.
                    </p>
                    <p className={styles.infoText}>
                        Ved festlokalet kan der parkeres på pladsen bagved eller langs vejen.
                    </p>

                    <div className={styles.subsection}>
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
                    </div>
                </motion.div>

            </div>
        </section >
    );
}
