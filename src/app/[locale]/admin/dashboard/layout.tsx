'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiHome, FiFolder, FiUser, FiSettings, FiLogOut, FiFileText } from 'react-icons/fi';

export default function AdminDashboard({ children }: { children: React.ReactNode }) {
    const [activeTab, setActiveTab] = useState('overview');

    const navItems = [
        { name: 'Overview', icon: FiHome, href: '/admin/dashboard' },
        { name: 'Projects', icon: FiFolder, href: '/admin/dashboard/projects' },
        { name: 'Experience', icon: FiFileText, href: '/admin/dashboard/experience' },
        { name: 'Profile', icon: FiUser, href: '/admin/dashboard/profile' },
        { name: 'Settings', icon: FiSettings, href: '/admin/dashboard/settings' },
    ];

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 fixed h-full z-10">
                <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Admin Panel</h2>
                </div>

                <nav className="mt-6 px-4 space-y-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === item.name.toLowerCase()
                                    ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700'
                                }`}
                            onClick={() => setActiveTab(item.name.toLowerCase())}
                        >
                            <item.icon className="w-5 h-5" />
                            {item.name}
                        </Link>
                    ))}

                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors mt-8">
                        <FiLogOut className="w-5 h-5" />
                        Logout
                    </button>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 ml-64 p-8">
                {children}
            </main>
        </div>
    );
}
