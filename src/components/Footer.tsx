'use client';

import { useTranslations } from 'next-intl';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    const t = useTranslations('footer');
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-8 md:mb-0">
                        <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Abhishek Jaiswal
                        </span>
                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                            Building digital experiences that matter.
                        </p>
                    </div>

                    <div className="flex space-x-6">
                        <a href="https://github.com/1rn19cs003" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                            <span className="sr-only">GitHub</span>
                            <FaGithub className="h-6 w-6" />
                        </a>
                        <a href="https://linkedin.com/in/abhishekjaiswal1308" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                            <span className="sr-only">LinkedIn</span>
                            <FaLinkedin className="h-6 w-6" />
                        </a>
                        <a href="mailto:abhigrmr@gmail.com" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                            <span className="sr-only">Email</span>
                            <FaEnvelope className="h-6 w-6" />
                        </a>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-base text-gray-400">
                        &copy; {currentYear} Abhishek Jaiswal. {t('rights')}
                    </p>
                    <div className="mt-4 md:mt-0 text-sm text-gray-500">
                        {t('visitors')}: <span className="font-mono font-bold">1,234</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
