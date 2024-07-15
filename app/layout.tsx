import type { Metadata } from "next";

import localFont from "next/font/local";
import "./globals.css";

const gordita = localFont({
  src: [
    {
      path: "./Gordita-Font/Gordita-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Gordita-Font/Gordita-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./Gordita-Font/Gordita-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Gordita-Font/Gordita-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
  ],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Carmedis",
    default:
      "Carmedis Automobile Technology Company | AutoCare Technology Company | Emerging Transportation Technologies | Innovative Maintenance Solutions",
  },
  description:
    "We are an Automobile Technology Company focused on auto care technologies, innovative maintenance solutions, and emerging transportation technologies.",

  keywords: ["Carmedis"],
  // openGraph: {
  //   images: "/opengraph-image.png",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={gordita.className}>{children}</body>
    </html>
  );
}
