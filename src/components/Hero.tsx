'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import styles from './Hero.module.css';

const Hero = () => {
    const t = useTranslations('hero');

    return (
        <section className={styles.heroSection}>
            <div className={styles.backgroundGrid}></div>

            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className={styles.badge}>
                        {t('greeting')} Abhishek Jaiswal
                    </span>

                    <h1 className={styles.title}>
                        {t('title')}
                    </h1>

                    <p className={styles.subtitle}>
                        {t('subtitle')}
                    </p>

                    <div className={styles.buttonContainer}>
                        <Link href="#projects" className={styles.primaryButton}>
                            {t('cta')} <FiArrowRight />
                        </Link>

                        <Link href="/contact" className={styles.secondaryButton}>
                            {t('contact')}
                        </Link>
                    </div>
                </motion.div>
            </div>

            <div className={styles.decorativeBlob1}></div>
            <div className={styles.decorativeBlob2}></div>
        </section>
    );
};

export default Hero;
