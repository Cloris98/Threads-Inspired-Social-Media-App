import React from "react";
import { ClerkProvider, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Inter } from 'next/font/google';
import { dark } from '@clerk/themes';
import type { Metadata } from "next";

import '../globals.css';
import Topbar from "@/components/shared/Topbar";
import LeftSidebar from "@/components/shared/LeftSidebar";
import RightSidebar from "@/components/shared/RightSidebar";
import Bottombar from "@/components/shared/Bottombar";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Threads',
    description: 'Threads next14 v1.00 application'
}

function Header() {
  return (
    <header style={{ display: "flex", justifyContent: "space-between", padding: 20 }}>
      <h1>Threads</h1>
      <SignedIn>
        {/* Mount the UserButton component */}
        <UserButton />
      </SignedIn>
      <SignedOut>
        {/* Signed out users get sign in button */}
        <SignInButton />
      </SignedOut>
    </header>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider appearance={{baseTheme: dark}}>
      <html lang='en'>
        <body className={inter.className}>
          <Topbar />

          <main className="flex flex-row">
            <LeftSidebar />

              <section className = "main-container">
                <div className="w-full max-w-4x1">
                  {children}
                </div>
              </section>
            {/* @ts-ignore */}
            <RightSidebar />
          </main>

          <Bottombar />
        </body>
      </html>
    </ClerkProvider>
  );
}