'use client';

import { motion } from 'framer-motion';
import { FiUsers, FiEye, FiFolder, FiMessageSquare } from 'react-icons/fi';

export default function DashboardOverview() {
    const stats = [
        { title: 'Total Visitors', value: '1,234', icon: FiUsers, color: 'bg-blue-500' },
        { title: 'Page Views', value: '5,678', icon: FiEye, color: 'bg-green-500' },
        { title: 'Projects', value: '12', icon: FiFolder, color: 'bg-purple-500' },
        { title: 'Messages', value: '25', icon: FiMessageSquare, color: 'bg-orange-500' },
    ];

    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Dashboard Overview</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                    <motion.div
                        key={stat.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700"
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{stat.title}</p>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</h3>
                            </div>
                            <div className={`p-3 rounded-lg ${stat.color} bg-opacity-10 text-white`}>
                                <stat.icon className={`w-6 h-6 ${stat.color.replace('bg-', 'text-')}`} />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Recent Activity</h2>
                    <div className="space-y-4">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <div key={i} className="flex items-center gap-4 py-2 border-b border-gray-100 dark:border-gray-700 last:border-0">
                                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                                <p className="text-sm text-gray-600 dark:text-gray-300">
                                    New visitor from United States
                                </p>
                                <span className="text-xs text-gray-400 ml-auto">2 mins ago</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Quick Actions</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <button className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors text-sm font-medium">
                            Add New Project
                        </button>
                        <button className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors text-sm font-medium">
                            Update Resume
                        </button>
                        <button className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors text-sm font-medium">
                            View Messages
                        </button>
                        <button className="p-4 rounded-lg bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-colors text-sm font-medium">
                            Edit Profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
