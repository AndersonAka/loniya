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
import { ThemeProvider } from "next-themes";
import "./styles/normalize.css";

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const contentRef = useRef(null);

  return (
    <html suppressHydrationWarning lang="fr" className="!scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="renderer" content="webkit" />
        <meta name="force-rendering" content="webkit" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        {/* <link rel="stylesheet" href="animate.css"></link>
        <script src="js/wow.min.js"></script> */}
        <script>
          new WOW().init();
        </script>
      </head>
      <body
        ref={contentRef}
        className="min-h-screen bg-white dark:bg-gray-900 font-sans antialiased"
      >
        {/* 
          ThemeProvider configuration:
          - attribute="class": utilise les classes Tailwind pour le theming
          - defaultTheme="system": s'adapte aux préférences système
          - enableSystem={true}: active la détection du thème système
        */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem={true}
        >
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
