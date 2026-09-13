import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#1C1917",
};

export const metadata: Metadata = {
  title: "Intelligent Land Record Digitization and Validation System — AI-Powered Document Intelligence",
  description:
    "A proposed AI-powered platform for automatically extracting structured information from scanned land records, handwritten documents, maps, and legacy PDF files, validating extracted records, and integrating with modern land information systems.",
  openGraph: {
    type: "website",
    title: "Intelligent Land Record Digitization and Validation System",
    description:
      "Transforming legacy handwritten registers, scanned PDFs, and cadastral maps into structured, validated digital land records.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='8' fill='%231C1917'/><polygon points='16,7 25,12 25,22 16,27 7,22 7,12' fill='none' stroke='%23FE551B' stroke-width='2.5'/><circle cx='16' cy='16' r='3' fill='%23FE551B'/></svg>"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
