"use client";

import styles from "./Menu.module.css";
import { motion } from "framer-motion";

export default function Menu() {
    return (
        <section id="menu" className={styles.section}>
            <h2 className={styles.title}>Menuen</h2>
            <motion.div
                className={styles.card}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >


                <div className={styles.course}>
                    <h3 className={styles.courseTitle}>Brunch buffet</h3>
                    <div className={styles.divider} />
                    <p className={styles.description}>
                        Græsk yoghurt med sirup, ristet müsli og blåbær<br />
                        Oste med hjemmelavede garniturer og peberfrugt<br />
                        Forskellige hjemmelavede og friskskårede salamier<br />
                        Parmaskinke og oliventapanade<br />
                        Laks med dilddressing<br />
                        Sprødristet bacon, brunchpølser og røræg<br />
                        Vafler med jordbærsyltetøj og florsukker<br />
                        Croissanter med chokolade<br />
                        Chokoladepålæg<br />
                        Friskskåret frugt<br />
                        Brød og smør<br />
                    </p>
                </div>

                <div className={styles.course}>
                    <h3 className={styles.courseTitle}>Kage</h3>
                    <div className={styles.divider} />
                    <p className={styles.description}>Tærte med sprød og karamelliseret hasselnøddebund, cremet jordbærskum og friske bær<br /><br />
                        Tærte med friske jordbær og vaniljecreme på mazarinbund med mørk chokolade<br /><br />
                    </p>
                </div>

                <div className={styles.course}>
                    <h3 className={styles.courseTitle}>Kaffe & the</h3>
                    <div className={styles.divider} />
                    <p className={styles.description}>
                        Serveres med søde sager
                    </p>
                </div>
            </motion.div>
        </section>
    );
}
