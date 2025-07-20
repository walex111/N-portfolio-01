import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/Providers/ThemeProvider";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import CustomCursor from "@/components/CustomCursor";
import localFont from "next/font/local";
import Preloader from "@/components/PreLoader";

const yukari = localFont({
  src: "../../public/fonts/yukarimobile.ttf",
  variable: "--font-yukari",
});

const spaceGro = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const muckley = localFont({
  src: "../../public/fonts/muckley.ttf",
  variable: "--font-muckley",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SAMSON OKETUNMBI | Full-Stack Developer & AI/ML Engineer",
  description: "Full-Stack Developer & AI/ML Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(yukari.variable, spaceGro.variable, muckley.variable)}
    >
      <ThemeProvider>
        <body
          className={cn(
            `${spaceGro.variable}
            antialiased px-4 sm:px-6 md:px-8 lg:px-12 py-8 h-screen w-full flex flex-col opacity-75`
          )}
          suppressHydrationWarning={true}
        >
          <Preloader />
          <CustomCursor />
          <Header />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
