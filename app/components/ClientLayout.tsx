"use client";

import { useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const contentRef = useRef(null);

    return (
        <div
            ref={contentRef}
            className="min-h-screen bg-white font-sans antialiased"
        >
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
            <ScrollToTop />
        </div>
    );
} 