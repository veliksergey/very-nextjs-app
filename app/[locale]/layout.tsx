import {ReactNode} from 'react';
import Navbar from '@/components/ui/header/Navbar';
import DrawerSide from '@/components/ui/drawer-side/DrawerSide';
import Footer from '@/components/ui/Footer';
import Providers from '@/app/providers';
import {getSession} from '@/lib/auth';
import {routing} from '@/i18n/routing';
import {notFound} from 'next/navigation';
import {getMessages} from 'next-intl/server';
import {NextIntlClientProvider} from 'next-intl';

interface Props {
  children: ReactNode;
  params: {locale: string};
}

const LocaleLayout = async ({children, params: {locale}}: Readonly<Props>) => {

  if (!routing.locales.includes(locale as 'en' | 'fr')) {
    notFound();
  }
  const messages = await getMessages();

  const session = await getSession();
  return (
    <html lang={locale}>
    <body>
    <NextIntlClientProvider messages={messages}>

      <Providers session={session}>

        <div className="drawer">
          <input id="app-drawer" type="checkbox" className="drawer-toggle"/>
          <div className="drawer-content flex flex-col">

            <Navbar/>
            {children}
            <Footer/>

          </div>
          <DrawerSide/>
        </div>

      </Providers>

    </NextIntlClientProvider>
    </body>
    </html>
  );
};

export default LocaleLayout;