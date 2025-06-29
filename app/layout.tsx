import { Noto_Sans_Myanmar } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { Metadata } from "next";
import { global_config } from "@/constant/config";
import { QueryProvider } from "@/libs/provider";
import BaseUserInterface from "@/components/common/BaseUserInterface";
import Header from "@/components/layout/header/Header";
import PreLoading from "@/components/common/PreLoading";
import Footer from "@/components/layout/Footer";

const myanmarFont = Noto_Sans_Myanmar({
  subsets: ["myanmar"],
  weight: ["400", "500", "700"],
  variable: "--font-myanmar",
});

const geistSans = localFont({
  src: "./fonts/gro-regular.otf",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/gro-bold.otf",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
 title: "Nae Thit Social Enterprise",
  description: "An Organization Providing Quality Healthcare with Affordable Solutions",
  metadataBase: new URL("https://nae-thit.vercel.app"),
  openGraph: {
    type: "website",
    url: "https://nae-thit.vercel.app",
    title: "Nae Thit Social Enterprise",
    description: "An Organization Providing Quality Healthcare with Affordable Solutions",
    images: ["/source/logo.png"], // can be full URL or relative
  },
  twitter: {
    card: "summary_large_image",
    title: "Nae Thit Social Enterprise",
    description: "An Organization Providing Quality Healthcare with Affordable Solutions",
    images: ["/source/logo.png"],
  },
};

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${myanmarFont.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        {/* <link rel="icon" href="/source/logo.png" /> */}
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Myanmar&display=swap"
          rel="stylesheet"
        /> */}
        {/* <!-- Primary Meta Tags --> */}
        <title>Nae Thit Social Enterprise</title>
        <meta name="title" content="Nae Thit Social Enterprise" />
        <meta
          name="description"
          content="An organization Providing Quality Healthcare with Affordable Solutions"
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nae-thit.vercel.app/" />
        <meta property="og:title" content="Nae Thit Social Enterprise" />
        <meta
          property="og:description"
          content="Providing Quality Healthcare with Affordable Solutions"
        />
        <meta property="og:image" content="/source/logo.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://nae-thit.vercel.app/" />
        <meta property="twitter:title" content="Nae Thit Social Enterprise" />
        <meta
          property="twitter:description"
          content="Providing Quality Healthcare with Affordable Solutions"
        />
        <meta property="twitter:image" content="/source/logo.png" />

        {/* <!-- Meta Tags Generated with https://metatags.io --> */}
      </head>
      <body>
        <QueryProvider>
          <BaseUserInterface>
            <Header />
            <main className=" min-h-screen">{children}</main>
            <PreLoading />
            <Footer />
          </BaseUserInterface>
        </QueryProvider>
      </body>
    </html>
  );
}
