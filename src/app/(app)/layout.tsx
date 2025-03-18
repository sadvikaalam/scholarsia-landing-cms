// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

export const metadata = {
  title: 'Scolarsia - Scholarship and Development Center',
  description: 'Platform edukasi terdepan yang menghubungkan pelajar Indonesia dengan peluang pendidikan internasional terbaik.',
};

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <Navigation />
          {children}
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}