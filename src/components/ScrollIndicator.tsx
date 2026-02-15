"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import styles from "./ScrollIndicator.module.css";

interface ScrollIndicatorProps {
    targetId: string;
}

export default function ScrollIndicator({ targetId }: ScrollIndicatorProps) {
    const scrollToSection = () => {
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className={styles.wrapper}>
            <motion.button
                onClick={scrollToSection}
                className={styles.indicator}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut"
                }}
                aria-label="Scroll ned"
            >
                <span className={styles.text}>Læs mere</span>
                <ChevronDown size={20} />
            </motion.button>
        </div>
    );
}
