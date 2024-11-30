import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import Header from '../_components/Header';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import "./globals.css";
import { ThemeProvider } from 'next-themes';
import Transition from '../_components/Transition';
import Footer from '../_components/Footer';
 
export const metadata: Metadata = {
  title: 'SCX Agenciamentos Marítimos',
  description: 'Empresa focada na satisfação do cliente, que conta com prazos assertivos, segurança e qualidade.', // temporário
}

const inter = Inter({ subsets: ['latin'] })

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
 
  const messages = await getMessages();
 
  return (
    <html lang={locale} className={inter.className}>
      <body className='antialiased overflow-x-hidden'>
        <NextIntlClientProvider messages={messages}>
          <Header />
          <Transition>
            {children}
          </Transition>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}