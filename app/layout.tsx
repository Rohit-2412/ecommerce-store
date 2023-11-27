import "./globals.css";

import Footer from "@/components/footer";
import type { Metadata } from "next";
import ModalProvider from "@/providers/modal-provider";
import Navbar from "@/components/navbar";
import ToastProvider from "@/providers/toast-provider";
import { Urbanist } from "next/font/google";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Store",
    description: "Store",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={font.className}>
                <ModalProvider />
                <ToastProvider />
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
