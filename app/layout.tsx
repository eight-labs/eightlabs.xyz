import type { Metadata } from "next";
import "./globals.css";

import { GeistMono } from "geist/font/mono";

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
        </html>
    );
}
