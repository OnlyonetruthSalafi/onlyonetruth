import { Pridi, Cinzel, Amiri } from 'next/font/google'
import "./globals.css";

const pridi = Pridi({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['thai', 'latin'],
  variable: '--font-pridi',
  display: 'swap',
})

const cinzel = Cinzel({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-cinzel',
  display: 'swap',
})

const amiri = Amiri({
  weight: ['400', '700'],
  subsets: ['arabic'],
  variable: '--font-amiri',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://onlyonetruthislam.vercel.app'),
  title: 'OnlyOneTruth — สัจธรรมมีเพียงหนึ่งเดียว',
  description: 'การศึกษาเปรียบเทียบสำเนาคัมภีร์โบราณ การส่งต่อ การเก็บรักษา',
  openGraph: {
    siteName: 'OnlyOneTruth',
    locale: 'th_TH',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="th"
      className={`${pridi.variable} ${cinzel.variable} ${amiri.variable}`}
    >
      <body className="bg-paper text-ink font-pridi antialiased">{children}</body>
    </html>
  );
}
