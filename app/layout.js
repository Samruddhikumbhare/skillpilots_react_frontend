import { Alegreya_Sans } from "next/font/google";
import "./globals.css";

const inter = Alegreya_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "800", "900"],
});

export const metadata = {
  title: "SkillPilots",
  description: "Skillpilots is a gateway to success in education and employment. 'Unlock Your Potential with Skillpilots!'",
  image: "https://skillpilots.com/favicon.ico",
  url: "https://skillpilots.com/",
  type: "website",
  locale: "en_US",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <title>{metadata.title}</title>
        {/* General Meta Tags */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        {/* Uncomment the line below if you want to include an image */}
        <meta property="og:image" content={metadata.image} />
        <meta property="og:url" content={metadata.url} />
        <meta property="og:type" content={metadata.type} />
        <meta property="og:locale" content={metadata.locale} />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
