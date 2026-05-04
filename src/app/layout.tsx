import type { Metadata } from 'next';
import { Barlow_Condensed, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import Header from '@/components/layout/Header';

// Fonts
const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  style: ['normal'],
  variable: '--font-barlow',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
});

// Metadata
export const metadata: Metadata = {
  title: 'Omar Adel - Senior Frontend Engineer',
  description:
    'Senior Frontend Engineer building scalable, maintainable frontend systems with React, Next.js, Vue, and TypeScript.',
  keywords: ['Frontend Engineer', 'React', 'Next.js', 'TypeScript', 'Vue', 'Portfolio'],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  openGraph: {
    title: 'Omar Adel - Senior Frontend Engineer',
    description: 'Senior Frontend Engineer building scalable, maintainable frontend systems.',
    type: 'website',
  },
};

// Layout
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${barlowCondensed.variable} ${ibmPlexMono.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('portfolio-theme');var d=t==='light'?false:(t==='dark'?true:window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d);document.documentElement.style.colorScheme=d?'dark':'light';}catch(e){}})();`,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
