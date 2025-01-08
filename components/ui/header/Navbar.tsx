import NavbarMenu from '@/components/ui/header/NavbarMenu';
import Link from 'next/link';
import logo from '@/assets/logo.png';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className="navbar bg-base-300 w-full">
      <div className="flex-none lg:hidden">
        <label htmlFor="app-drawer" aria-label="open sidebar" className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-6 w-6 stroke-current">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </label>
      </div>

      <div className="mx-2 flex-1 px-2">
        <Link href="/" className="flex">
          <Image
            src={logo}
            alt='My Logo'
            height={30}
            width={30}
            className="mr-2"
            priority
          />
          <span className="text-lg text-pink-400 font-bold">
            Very NextJs App
          </span>
        </Link>
      </div>

      <div className="hidden flex-none lg:block">
        <NavbarMenu/>
      </div>
    </div>
  );
};

export default Navbar;