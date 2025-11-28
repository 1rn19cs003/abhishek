'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiDownload } from 'react-icons/fi';

const Hero = () => {
    const t = useTranslations('hero');

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
            <div className="absolute inset-0 w-full h-full bg-grid-slate-200/[0.04] dark:bg-grid-slate-800/[0.04] bg-[bottom_1px_center] [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-6">
                        {t('greeting')} Abhishek Jaiswal
                    </span>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-200 dark:to-white bg-clip-text text-transparent">
                        {t('title')}
                    </h1>

                    <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
                        {t('subtitle')}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="#projects"
                            className="px-8 py-4 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors flex items-center gap-2 shadow-lg shadow-blue-600/20"
                        >
                            {t('cta')} <FiArrowRight />
                        </Link>

                        <Link
                            href="/contact"
                            className="px-8 py-4 rounded-full bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
                        >
                            {t('contact')}
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
        </section>
    );
};

export default Hero;
