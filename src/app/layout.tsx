import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | ${site.tagline}`, template: `%s | ${site.name}` },
  description: site.description,
  openGraph: { title: site.name, description: site.description, url: site.url, siteName: site.name, locale: "pt_BR", type: "website" },
  alternates: { canonical: "/" },
};

// Dados estruturados de negócio local (ajudam o Google a exibir a clínica)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.zip,
    addressCountry: "BR",
  },
  openingHours: site.hours.map((h) => h.schema),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="font-sans text-slate-800 antialiased">
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
