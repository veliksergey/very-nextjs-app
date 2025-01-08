import {signOut, useSession} from 'next-auth/react';
import Link from 'next/link';
import SignOutIcon from '@/components/ui/icons/SignOutIcon';
import UserCircleIcon from '@/components/ui/icons/UserCircleIcon';
import UserIcon from '@/components/ui/icons/UserIcon';
import SignInIcon from '@/components/ui/icons/SignInIcon';

const AuthLink = () => {
  const {data: session} = useSession();

  if (session?.user) {
    return (
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar m-1">
          <UserCircleIcon/>
        </div>
        <ul tabIndex={0} className="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl menu">
          <li>
            <span className="flex px-4 py-2 text-sm">
              <UserIcon/>
              {session.user.name}
            </span>
          </li>
          <li>
            <Link
              href="/api/auth/signout"
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
            >
              <SignOutIcon/>
              Sign Out
            </Link>
          </li>
        </ul>
      </div>
    )
  }

  return (
    <Link href="/signin">
      <button role="button" className="btn btn-ghost btn-circle my-1">
        <SignInIcon/>
      </button>
    </Link>
  );
};

export default AuthLink;