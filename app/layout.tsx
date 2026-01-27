import type { Metadata } from "next";
import React from "react";

import { ClerkProvider } from "@clerk/nextjs";

import localFont from "next/font/local";
import Image from "next/image";

import "./globals.css";

import Version from "@/components/Version/Version";
import Menu from "@/components/Nav/Menu";
import Footer from "@/components/Footer/Footer";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <React.StrictMode>
      <ClerkProvider publishableKey={process.env.CLERK_PUBLISHABLE_KEY!}>
        <html lang="en" className="xsm:max-2xl:w-auto h-max m-2.5 p-2.5">
          <body className={`${ebg.className} bg-[url('/hatter.jpg')] bg-fixed bg-contain bg-center bg-repeat`}>
            <main data-part="main" className=" min-w-75 w-full flex flex-col box-border
          ">

              <header className="my-0 mx-auto h-60 w-full">
                <div data-part="fejlec" className="my-0 mx-auto h-60 w-full flex flex-col items-center justify-start bg-size-[100%_100%] bg-center bg-[url('/fejlec.jpg')]">
                  <div data-part="logo" className="mt-5 mb-0 mx-auto w-full h-41.5 flex flex-col items-center justify-end">
                    <Image
                      src="/logo-hu.png"
                      alt="Hungarian Wesnoth Logo"
                      width={365}
                      height={139}
                      priority
                      data-part="logo-image"
                      className="absolute mt-0 mb-0 mx-auto min-w-50 object-contain"
                    />
                    <Version />
                  </div>
                </div>
                <div data-part="menu" className="relative -top-12.5">
                  <Menu />
                </div>
              </header>

              <section>
                <div className="flex flex-row justify-between bg-[url('/tart-hatter.jpg')] bg-size-[100%] min-h-130">
                  <div className="my-2.5 mx-6.25 max-w-50 flex-1">
                    
                  </div>
                  <div className="max-w-250 flex-1 border-image-slice-repeat flex flex-col items-center justify-center my-2.5 mx-6.25">
                    {children}
                  </div>
                </div>
              </section>

              <footer>
                <div className="my-0 mx-auto w-full min-h-23 bg-size-[100%_100%] bg-center bg-[url('/lablec.jpg')]">
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
