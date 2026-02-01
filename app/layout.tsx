import type { Metadata } from "next";
import React from "react";

import { ClerkProvider } from "@clerk/nextjs";
import { huHU } from "@clerk/localizations";

import localFont from "next/font/local";
import Image from "next/image";

import "./globals.css";
import styles from "@/styles/layout.module.css";

import Version from "@/components/Version/Version";
import Menu from "@/components/Nav/Menu";
import Footer from "@/components/Footer/Footer";
import CustomSignIn from "@/components/Auth/CustomSignIn";
import CustomSignUp from "@/components/Auth/CustomSignUp";

export const metadata: Metadata = {
  title: "Harc Wesnothért",
  description: "Magyar Wesnoth Közösségi Portál",
  icons: {
    icon: "/favicon.ico",
  },
};

const ebg = localFont({
  src: "./font/ebg.ttf",
  display: "swap",
});

const oldania = localFont({
  src: "./font/oldania.otf",
  display: "swap",
});

const celtic = localFont({
  src: "./font/celticg2.ttf",
  display: "swap",
})

// TODO: add classNames module 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <React.StrictMode>
      <ClerkProvider publishableKey={process.env.CLERK_PUBLISHABLE_KEY!} localization={huHU} appearance={{
        variables: {
          colorBackground: "#dad1a0",
        },
      }}>
        <html lang="en" className={styles.html}>
          <body className={`${ebg.className}`}>
            <main data-part="main" className={styles.main}>

              <header className={styles.headerContainer}>
                <div data-part="fejlec" className={styles.header}>
                  <div data-part="logo" className={styles.logo}>
                    <Image
                      src="/logo-hu.png"
                      alt="Hungarian Wesnoth Logo"
                      width={365}
                      height={139}
                      priority
                      data-part="logo-image"
                      className={styles.logoImg}
                    />
                    <Version />
                  </div>
                </div>
                <div data-part="menu" className={styles.menuContainer}>
                  <Menu />
                </div>
              </header>

              <section>
                <div className={styles.content}>
                  <div className={styles.side}>
                    <CustomSignIn />
                    <CustomSignUp />
                  </div>
                  <div className={styles.children}>
                    {children}
                  </div>
                </div>
              </section>

              <footer>
                <div className={styles.footer}>
                  <Footer />
                </div>
              </footer>
              
            </main>
          </body>
        </html>
      </ClerkProvider>
    </React.StrictMode>
  );
}
