import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LenisProvider } from "@/components/providers/lenis-provider";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import "./globals.css";

import { LanguageProvider } from "@/hooks/use-translation";
import { CalProvider } from "@/components/providers/cal-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#050505",
};



export const metadata: Metadata = {
  title: "Oscar Tuletta",
  description:
    "Software Engineer y Co-Founder especializado en construir productos digitales escalables. Creador de ODOMTO y Salséalo.",
  keywords: [
    "Software Engineer",
    "Co-Founder",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Full Stack Developer",
    "Oscar Tuletta",
  ],
  authors: [{ name: "Oscar Tuletta" }],
  openGraph: {
    title: "Oscar Tuletta",
    description: "Building logic. Designing the future.",
    type: "website",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-primary/30`}
      >
        <LanguageProvider>
          <CalProvider>
            <LenisProvider>
              <ScrollProgress />

              {/* Main content */}
              <main className="relative">
                {children}
              </main>
            </LenisProvider>
          </CalProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
