'use client';

import Link from 'next/link';
import clsx from 'clsx';
import {usePathname} from 'next/navigation';
import {ILink} from '@/types/ui';
import HomeIcon from '@/components/ui/icons/HomeIcon';
import InfoIcon from '@/components/ui/icons/InfoIcon';

const DrawerSide = () => {
  const pathname = usePathname();

  // const themeList: string[] = process.env.NEXT_PUBLIC_THEMES?.split(',') || [];
  const links: ILink[] = [
    {
      href: '/',
      title: 'Home',
      iconComponent: <HomeIcon/>,
    },
    {
      href: '/about',
      title: 'About',
      iconComponent: <InfoIcon/>
    },
  ];

  const isActive = (href: string): boolean => {
    if (href === '/') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  const closeDrawer = () => {
    const drawerToggle = document.getElementById('app-drawer') as HTMLInputElement | null;
    if (drawerToggle && drawerToggle.type === 'checkbox') {
      drawerToggle.checked = false;
    }
  }

  return (
    <div className="drawer-side">
      <label htmlFor="app-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
      <ul className="menu bg-base-200 min-h-full w-80 p-4">
        {links.map(({href, title, icon, iconComponent}) => (
          <li key={title}>
            <Link
              href={href}
              className={clsx({active: isActive(href)})}
              onClick={closeDrawer}
            >
              {iconComponent && iconComponent}
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DrawerSide;