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
                    <p className={styles.description}>Friskskårne pølser<br />
                        Friskskåret frugt<br />
                        Oste med garniturer<br />
                        Græsk yoghurt med honning og ristet müsli<br />
                        Parmaskinke<br />
                        Sprødristet bacon og brunchpølser med lunt røræg<br />
                    </p>
                </div>

                <div className={styles.course}>
                    <h3 className={styles.courseTitle}>Kage</h3>
                    <div className={styles.divider} />
                    <p className={styles.description}>Christianshavnertærte</p>
                </div>

                <div className={styles.course}>
                    <h3 className={styles.courseTitle}>Kaffe & the</h3>
                    <div className={styles.divider} />
                </div>
            </motion.div>
        </section>
    );
}
