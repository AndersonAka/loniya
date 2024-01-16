"use client";

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import { useRef } from 'react';
import "../app/styles/index.css";
// import "../app/styles/style2.css"
import "../app/styles/prism-vsc-dark-plus.css";
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import "animate.css"

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const contentRef = useRef(null);

  return (
    <html suppressHydrationWarning lang="fr">
      <body
        ref={contentRef}
        className={`bg-gray-300 ${inter.className}`}>
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
