import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Inter } from 'next/font/google';
import '../globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';
import AIAssistant from '@/components/AIAssistant';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Abhishek Jaiswal - Portfolio',
    description: 'Full Stack Developer Portfolio',
};

export default async function LocaleLayout({
    children,
    params
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body className={inter.className}>
                <NextIntlClientProvider messages={messages}>
                    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
                        <Navbar />
                        <main className="flex-grow pt-16">
                            {children}
                        </main>
                        <Footer />
                        <AIAssistant />
                        <Toaster position="bottom-right" />
                    </div>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
