"use client";

import styles from "./Menu.module.css";
import { Utensils } from "lucide-react";

export default function Menu() {
    return (
        <section id="menu" className={styles.section}>
            <h2 className={styles.title}>Menuen</h2>
            <div className={styles.card}>
                <div style={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }}>
                    <Utensils size={32} className="text-secondary" />
                </div>

                <div className={styles.course}>
                    <h3 className={styles.courseTitle}>Forret</h3>
                    <div className={styles.divider} />
                    <p className={styles.dish}>Tarteletter med høns i asparges</p>
                    <p className={styles.description}>Hjemmelavede tarteletter med masser af fyld og persille.</p>
                </div>

                <div className={styles.course}>
                    <h3 className={styles.courseTitle}>Hovedret</h3>
                    <div className={styles.divider} />
                    <p className={styles.dish}>Helstegt Oksefilet</p>
                    <p className={styles.description}>Serveres med flødekartofler, årstidens grønt og rødvinssauce.</p>
                </div>

                <div className={styles.course}>
                    <h3 className={styles.courseTitle}>Dessert</h3>
                    <div className={styles.divider} />
                    <p className={styles.dish}>Hjemmelavet Islagkage</p>
                    <p className={styles.description}>Med chokoladestykker og friske bær.</p>
                </div>

                <div style={{ marginTop: "4rem", fontSize: "0.875rem", fontStyle: "italic", color: "#64748b" }}>
                    * Oplys venligst om allergener ved tilmelding
                </div>
            </div>
        </section>
    );
}
