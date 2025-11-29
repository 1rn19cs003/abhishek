'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import styles from './Projects.module.css';

const Projects = () => {
    const t = useTranslations('projects');

    const projects = [
        {
            id: '1',
            title: 'E-Commerce Platform',
            description: 'A full-featured e-commerce platform built with Next.js and Stripe integration.',
            techStack: ['Next.js', 'TypeScript', 'Stripe', 'CSS Modules'],
            githubUrl: 'https://github.com',
            liveUrl: 'https://example.com',
        },
        {
            id: '2',
            title: 'Task Management App',
            description: 'Real-time task management application with team collaboration features.',
            techStack: ['React', 'Firebase', 'Redux', 'Material UI'],
            githubUrl: 'https://github.com',
            liveUrl: 'https://example.com',
        },
        {
            id: '3',
            title: 'Portfolio Website',
            description: 'Modern portfolio website with internationalization and AI assistant.',
            techStack: ['Next.js', 'Framer Motion', 'OpenAI', 'CSS Modules'],
            githubUrl: 'https://github.com',
            liveUrl: 'https://example.com',
        }
    ];

    return (
        <section id="projects" className={styles.projectsSection}>
            <div className={styles.container}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={styles.header}
                >
                    <h2 className={styles.title}>
                        {t('title')}
                    </h2>
                    <div className={styles.titleUnderline}></div>
                </motion.div>

                <div className={styles.projectsGrid}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={styles.projectCard}
                        >
                            <div className={styles.projectImage}>
                                <div className={styles.placeholder}>
                                    <span>{project.title[0]}</span>
                                </div>
                                <div className={styles.overlay}>
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.iconLink}
                                    >
                                        <FiGithub className="w-5 h-5" />
                                    </a>
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles.iconLink}
                                    >
                                        <FiExternalLink className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>

                            <div className={styles.projectContent}>
                                <h3 className={styles.projectTitle}>
                                    {project.title}
                                </h3>
                                <p className={styles.projectDescription}>
                                    {project.description}
                                </p>

                                <div className={styles.techStack}>
                                    {project.techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className={styles.techBadge}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className={styles.viewAllContainer}>
                    <button className={styles.viewAllButton}>
                        {t('viewAll')}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Projects;
