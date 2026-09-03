import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import { NextUIProvider } from "@nextui-org/system";
import FloatingDockWrapper from "@/components/ui/floatingdockwrapper";
import { LanguageProvider } from "@/components/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joahan Morales | Backend Developer & 4x Hackathon Winner",
  description:
    "Joahan Samuel Morales Piña — Software Engineer (Backend, Full Stack & AI). Java, Spring Boot, Python. 4x Hackathon Winner. IPN UPIICSA.",
  icons: {
    icon: "/profile.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextUIProvider>
          <LanguageProvider>
            <ThemeProvider>
              {children}
              <FloatingDockWrapper />
            </ThemeProvider>
          </LanguageProvider>
        </NextUIProvider>
        <Analytics />
      </body>
    </html>
  );
}
