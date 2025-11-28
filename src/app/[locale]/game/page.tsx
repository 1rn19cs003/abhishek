'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const Game = () => {
    const t = useTranslations('game');
    const [score, setScore] = useState(0);
    const [level, setLevel] = useState(1);
    const [isPlaying, setIsPlaying] = useState(false);
    const [facts, setFacts] = useState<string[]>([]);

    const funFacts = [
        "I started coding when I was 18!",
        "I love solving complex algorithmic problems.",
        "I have contributed to open source projects.",
        "I enjoy playing chess in my free time.",
        "I'm a coffee enthusiast!"
    ];

    const startGame = () => {
        setIsPlaying(true);
        setScore(0);
        setLevel(1);
        setFacts([]);
    };

    const handleClick = () => {
        const newScore = score + 10;
        setScore(newScore);

        if (newScore % 50 === 0) {
            const newLevel = level + 1;
            setLevel(newLevel);
            const factIndex = (newLevel - 2) % funFacts.length;
            if (factIndex >= 0) {
                setFacts(prev => [...prev, funFacts[factIndex]]);
            }
        }
    };

    return (
        <div className="min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
                    {t('title')}
                </h1>

                {!isPlaying ? (
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl"
                    >
                        <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
                            {t('instructions')}
                        </p>
                        <button
                            onClick={startGame}
                            className="px-8 py-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-lg hover:shadow-lg transform hover:-translate-y-1 transition-all"
                        >
                            {t('start')}
                        </button>
                    </motion.div>
                ) : (
                    <div className="space-y-8">
                        <div className="flex justify-between items-center bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
                            <div className="text-xl font-bold text-blue-600">
                                {t('score')}: {score}
                            </div>
                            <div className="text-xl font-bold text-purple-600">
                                {t('level')}: {level}
                            </div>
                        </div>

                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={handleClick}
                            className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold text-xl shadow-xl hover:shadow-2xl flex items-center justify-center mx-auto"
                        >
                            Click Me!
                        </motion.button>

                        <div className="grid gap-4">
                            {facts.map((fact, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-yellow-100 dark:bg-yellow-900/30 p-4 rounded-xl border border-yellow-200 dark:border-yellow-700"
                                >
                                    <p className="text-yellow-800 dark:text-yellow-200 font-medium">
                                        🎉 Unlocked: {fact}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Game;
