'use client';

import ThemeSwitcher from '@/components/ui/header/ThemeSwitcher';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import clsx from 'clsx';
import HomeIcon from '@/components/ui/icons/HomeIcon';
import InfoIcon from '@/components/ui/icons/InfoIcon';
import AuthLink from '@/components/ui/header/AuthLink';

const NavbarMenu = () => {
  const pathname = usePathname();

  return (
    <>
      <div className="flex">
        <ul className="menu menu-horizontal">
          <li>
            <Link
              href="/"
              className={clsx(pathname === '/' && 'active')}
            >
              <HomeIcon/>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={clsx({active: pathname.startsWith('/about')})}
            >
              <InfoIcon/>
              Protected Page
            </Link>
          </li>
        </ul>

        <AuthLink/>
        <ThemeSwitcher/>
      </div>

    </>
  );
};

export default NavbarMenu;