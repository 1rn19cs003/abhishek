'use client';

import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 text-center px-4">
            <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Page Not Found</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
                The page you are looking for does not exist or has been moved.
            </p>
            <Link
                href="/"
                className="px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
            >
                Go Home
            </Link>
        </div>
    );
}
