"use client";

import styles from "./Menu.module.css";
import { Utensils } from "lucide-react";
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
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}>
                    <Utensils size={32} className="text-secondary" />
                </div>

                <div className={styles.course}>
                    <h3 className={styles.courseTitle}>Forret</h3>
                    <div className={styles.divider} />
                    <p className={styles.dish}>Hvide asparges, hollandaise & håndpillede rejer</p>
                    <p className={styles.description}>Serveres med brød og smør</p>
                </div>

                <div className={styles.course}>
                    <h3 className={styles.courseTitle}>Hovedret</h3>
                    <div className={styles.divider} />
                    <p className={styles.dish}>Grillet butchers steak med bearnaisesauce</p>
                    <p className={styles.description}>Serveres med<br />
                        Forårskål med syrnet fløde & persille<br />
                        Salat med vinaigrette<br />
                        Små nye kartofler <br />
                        Pommes frites</p>
                </div>

                <div className={styles.course}>
                    <h3 className={styles.courseTitle}>Dessert</h3>
                    <div className={styles.divider} />
                    <p className={styles.dish}>Rabarberpavlova</p>
                    <p className={styles.description}>Sprød marengs med rabarberkompot og creme.</p>
                </div>

                <div className={styles.course}>
                    <h3 className={styles.courseTitle}>Kaffe & the</h3>
                </div>
            </motion.div>
        </section>
    );
}
