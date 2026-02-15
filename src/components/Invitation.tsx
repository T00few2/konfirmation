"use client";

import styles from "./Invitation.module.css";
import { Calendar, Clock, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Invitation() {
    const handleCalendarClick = (e: React.MouseEvent) => {
        e.preventDefault();

        const event = {
            title: "Frederiks Konfirmation",
            location: "Josty, Pile Allé 14A, 2000 Frederiksberg",
            description: "Vi glæder os til at se jer!",
            start: "20260425T120000",
            end: "20260425T170000"
        };

        const icsContent = [
            "BEGIN:VCALENDAR",
            "VERSION:2.0",
            "BEGIN:VEVENT",
            `SUMMARY:${event.title}`,
            `DTSTART:${event.start}`,
            `DTEND:${event.end}`,
            `LOCATION:${event.location}`,
            `DESCRIPTION:${event.description}`,
            "END:VEVENT",
            "END:VCALENDAR"
        ].join("\n");

        const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "frederiks-konfirmation.ics");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section id="invitation" className={styles.section}>
            <motion.div
                className={styles.card}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <h2 className={styles.heading}>Frederiks konfirmation</h2>

                <p className={styles.text}>
                    Det vil glæde os rigtig meget at se jer til Frederiks konfirmation den 25. april 2026 kl. 12:00
                </p>
                <p className={styles.text}>
                    Festen holdes på <br /> Josty <br /> Pile Allé 14A <br /> 2000 Frederiksberg
                </p>

                <p className={styles.text}>
                    Vi håber på en fantastisk dag sammen med jer alle
                </p>
                <p className={styles.text}>
                    Kærlig hilsen<br />
                    <strong>Frederik<br />Anette & Chris</strong>
                </p>

                <div className={styles.detailsGrid}>
                    <a
                        href="#"
                        onClick={handleCalendarClick}
                        className={styles.detailItemLink}
                    >
                        <div className={styles.iconWrapper}>
                            <Calendar size={24} />
                        </div>
                        <span className={styles.detailLabel}>Dato</span>
                        <span className={styles.detailValue}>25. april 2026</span>
                    </a>

                    <a
                        href="#"
                        onClick={handleCalendarClick}
                        className={styles.detailItemLink}
                    >
                        <div className={styles.iconWrapper}>
                            <Clock size={24} />
                        </div>
                        <span className={styles.detailLabel}>Tidspunkt</span>
                        <span className={styles.detailValue}>12:00 - 17:00</span>
                    </a>

                    <a
                        href="https://www.google.com/maps/search/?api=1&query=Josty+Pile+Allé+14A+2000+Frederiksberg"
                        target="_blank"
                        className={styles.detailItemLink}
                    >
                        <div className={styles.iconWrapper}>
                            <MapPin size={24} />
                        </div>
                        <span className={styles.detailLabel}>Sted</span>
                        <span className={styles.detailValue}>Josty<br />Pile Allé 14A<br />2000 Frederiksberg</span>
                    </a>
                </div>
            </motion.div>
        </section >
    );
}
