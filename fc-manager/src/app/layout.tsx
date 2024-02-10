import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import NavBar from '@/components/navigation/navbar';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'FC Manager for FFXIV',
    description: 'A tool to manage your free company events and more for FFXIV'
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <NavBar />
                {children}
            </body>
        </html>
    );
}
