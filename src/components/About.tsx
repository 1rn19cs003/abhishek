'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
    const t = useTranslations('about');

    return (
        <section id="about" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                >
                    <div className="relative">
                        <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 relative z-10">
                            {/* Placeholder for profile image */}
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                <span className="text-6xl">AJ</span>
                            </div>
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-blue-600 rounded-2xl -z-0"></div>
                    </div>

                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                            {t('title')}
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            {t('description')}
                        </p>
                        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                            I specialize in building robust and scalable web applications using modern technologies like Next.js, React, Node.js, and Firebase. With a strong foundation in computer science and a passion for clean code, I strive to create seamless user experiences.
                        </p>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                                <h3 className="font-bold text-2xl text-blue-600 mb-1">2+</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Years Experience</p>
                            </div>
                            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                                <h3 className="font-bold text-2xl text-purple-600 mb-1">10+</h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
