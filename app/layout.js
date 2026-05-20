import { Playfair_Display, Cinzel, Lato, Amiri } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--nf-playfair",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--nf-cinzel",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--nf-lato",
  display: "swap",
});

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--nf-amiri",
  display: "swap",
});

export const metadata = {
  title: "OnlyOneTruth — Preserving the Integrity of Ancient Texts",
  description:
    "A scholarly archive devoted to the preservation, study, and textual history of ancient manuscripts that shaped civilizations.",
  keywords: [
    "ancient manuscripts",
    "textual history",
    "scholarly archive",
    "historical preservation",
    "OnlyOneTruth",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cinzel.variable} ${lato.variable} ${amiri.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
