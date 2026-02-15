"use client";

import styles from "./Invitation.module.css";
import { Calendar, Clock, MapPin } from "lucide-react";

export default function Invitation() {
    return (
        <section id="invitation" className={styles.section}>
            <div className={styles.card}>
                <div className={styles.decoration} /> {/* Top decoration bar */}

                <h2 className={styles.heading}>Vi håber I vil være med til at fejre dagen</h2>

                <p className={styles.text}>
                    Det vil glæde os rigtig meget at se jer til Christians konfirmation.
                    Vi starter i kirken og fortsætter festen med god mad, drikke og hygge.
                </p>
                <p className={styles.text}>
                    Vi håber på en fantastisk dag sammen med jer alle.
                </p>
                <p className={styles.text}>
                    Kærlig hilsen<br />
                    <strong>Navn & Navn</strong>
                </p>

                <div className={styles.detailsGrid}>
                    <div className={styles.detailItem}>
                        <div className={styles.iconWrapper}>
                            <Calendar size={24} />
                        </div>
                        <span className={styles.detailLabel}>Dato</span>
                        <span className={styles.detailValue}>20. Maj 2026</span>
                    </div>

                    <div className={styles.detailItem}>
                        <div className={styles.iconWrapper}>
                            <Clock size={24} />
                        </div>
                        <span className={styles.detailLabel}>Tidspunkt</span>
                        <span className={styles.detailValue}>10:00 - ?</span>
                    </div>

                    <div className={styles.detailItem}>
                        <div className={styles.iconWrapper}>
                            <MapPin size={24} />
                        </div>
                        <span className={styles.detailLabel}>Sted</span>
                        <span className={styles.detailValue}>[Adresse]</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
