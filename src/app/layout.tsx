import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PAR SOFTWARE - AI Automation & Development",
  description: "We specialize in AI Automation for companies and build apps, and websites. Transform your business with cutting-edge technology.",
  keywords: "AI Automation, Software Development, Web Development, Mobile Apps, Business Solutions",
  authors: [{ name: "PAR SOFTWARE" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
