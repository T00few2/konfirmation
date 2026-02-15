"use client";

import styles from "./Info.module.css";
import { Car, MapPin } from "lucide-react";

export default function Info() {
    return (
        <section id="info" className={styles.section}>
            <h2 className={styles.title}>Praktisk Information</h2>
            <div className={styles.grid}>

                {/* Location */}
                <div className={styles.card}>
                    <div className={styles.infoTitle}>
                        <MapPin size={24} className="text-blue-600" />
                        Kirken & Festen
                    </div>
                    <p className={styles.infoText}>
                        Konfirmationen finder sted i <strong>[Kirke Navn]</strong>.
                    </p>
                    <div className={styles.map}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d141434.42586794126!2d12.378954316279313!3d55.67609805904803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652533c5c803d19%3A0x4dd7edde69467b8!2sCopenhagen!5e0!3m2!1sen!2sdk!4v1707577222340!5m2!1sen!2sdk"
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
                        Efter kirken fortsætter vi festen på:<br />
                        <strong>[Sted Navn], [Adresse]</strong>
                    </p>
                    <a className={styles.link} href="#" target="_blank">
                        Rutevejledning
                    </a>
                </div>

                {/* Parking */}
                <div className={styles.card}>
                    <div className={styles.infoTitle}>
                        <Car size={24} className="text-blue-600" />
                        Parkering
                    </div>
                    <p className={styles.infoText}>
                        Der er gode parkeringsmuligheder ved kirken.
                        <br />
                        Husk at sætte P-skiven.
                    </p>
                    <p className={styles.infoText}>
                        Ved festlokalet kan der parkeres på pladsen bagved eller langs vejen.
                    </p>
                    <div style={{ marginTop: "2rem" }}>
                        <div className={styles.infoTitle}>
                            Gaveønsker
                        </div>
                        <p className={styles.infoText}>
                            Hvis I vil glæde konfirmanden med en gave, kan I finde ønskesedlen her:
                        </p>
                        <a className={styles.link} href="https://onskeskyen.dk" target="_blank">
                            Se Ønskeskyen
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}
