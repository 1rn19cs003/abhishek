'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const Skills = () => {
    const t = useTranslations('skills');

    const skillCategories = [
        {
            title: t('frontend'),
            skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'Framer Motion']
        },
        {
            title: t('backend'),
            skills: ['Node.js', 'Express', 'Python', 'Java', 'GraphQL', 'REST APIs']
        },
        {
            title: t('database'),
            skills: ['PostgreSQL', 'MongoDB', 'Firebase', 'Redis', 'MySQL']
        },
        {
            title: t('devops'),
            skills: ['Docker', 'AWS', 'CI/CD', 'Git', 'Linux', 'Vercel']
        }
    ];

    return (
        <section id="skills" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                        {t('title')}
                    </h2>
                    <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 hover:shadow-lg transition-shadow"
                        >
                            <h3 className="text-xl font-bold mb-6 text-center text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-4">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-3 justify-center">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-2 text-sm font-medium rounded-lg bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 shadow-sm border border-gray-100 dark:border-gray-600"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
