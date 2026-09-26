
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nikolay Vaklev | Java Backend Developer",

  description:
      "Portfolio of Nikolay Vaklev, a Software Engineer based in Sofia, Bulgaria. Explore my experience, Java backend projects, technical skills, education, and certifications.",

  applicationName: "Nikolay Vaklev Portfolio",

  keywords: [
    "Nikolay Vaklev",
    "Software Engineer",
    "Java Backend Developer",
    "Java",
    "Spring Boot",
    "Backend Development",
    "REST APIs",
    "Software Engineering",
    "Portfolio",
  ],

  authors: [
    {
      name: "Nikolay Vaklev",
    },
  ],

  creator: "Nikolay Vaklev",

  openGraph: {
    title: "Nikolay Vaklev | Java Backend Developer",
    description:
        "Software Engineer specializing in Java backend development. Explore my projects, experience, and technical skills.",
    siteName: "Nikolay Vaklev Portfolio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary",
    title: "Nikolay Vaklev | Java Backend Developer",
    description:
        "Software Engineer specializing in Java backend development.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      {children}
      </body>
      </html>
  );
}
