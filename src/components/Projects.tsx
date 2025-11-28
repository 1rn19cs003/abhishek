'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import Image from 'next/image';

const Projects = () => {
    const t = useTranslations('projects');

    // Dummy data - will be replaced by Firebase data
    const projects = [
        {
            id: '1',
            title: 'E-Commerce Platform',
            description: 'A full-featured e-commerce platform built with Next.js and Stripe integration.',
            techStack: ['Next.js', 'TypeScript', 'Stripe', 'Tailwind CSS'],
            githubUrl: 'https://github.com',
            liveUrl: 'https://example.com',
            image: '/projects/ecommerce.jpg'
        },
        {
            id: '2',
            title: 'Task Management App',
            description: 'Real-time task management application with team collaboration features.',
            techStack: ['React', 'Firebase', 'Redux', 'Material UI'],
            githubUrl: 'https://github.com',
            liveUrl: 'https://example.com',
            image: '/projects/task.jpg'
        },
        {
            id: '3',
            title: 'Portfolio Website',
            description: 'Modern portfolio website with internationalization and AI assistant.',
            techStack: ['Next.js', 'Framer Motion', 'OpenAI', 'Tailwind CSS'],
            githubUrl: 'https://github.com',
            liveUrl: 'https://example.com',
            image: '/projects/portfolio.jpg'
        }
    ];

    return (
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
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
                    <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700"
                        >
                            <div className="h-48 bg-gray-200 dark:bg-gray-700 relative overflow-hidden group">
                                {/* Placeholder for project image */}
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                    <span className="text-4xl font-bold opacity-20">{project.title[0]}</span>
                                </div>
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors"
                                    >
                                        <FiGithub className="w-5 h-5" />
                                    </a>
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors"
                                    >
                                        <FiExternalLink className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 text-xs font-medium rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="px-8 py-3 rounded-full border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                        {t('viewAll')}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Projects;
