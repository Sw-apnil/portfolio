import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Swapnil Saurabh | Full-Stack Developer",
  description:
    "Full-Stack Developer passionate about building scalable web applications using React, Next.js, Node.js, and modern web technologies. Open to opportunities.",
  keywords: [
    "Swapnil Saurabh",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "Portfolio",
    "IIIT Ranchi",
  ],
  authors: [{ name: "Swapnil Saurabh" }],
  openGraph: {
    title: "Swapnil Saurabh | Full-Stack Developer",
    description:
      "Full-Stack Developer passionate about building scalable web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-text-primary font-sans">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
