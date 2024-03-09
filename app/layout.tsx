import type { Metadata } from "next";
import "./globals.css";

import { GeistMono } from "geist/font/mono";
import Script from "next/script";

export const metadata: Metadata = {
    title: "Eight Labs",
    description: "how hard can it be?",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={GeistMono.className}>{children}</body>
            <Script
                async
                src="https://analytics.duncan.land/script.js"
                data-website-id="52165d92-3bfb-4efd-b6ee-1204801937e0"
            />
        </html>
    );
}
