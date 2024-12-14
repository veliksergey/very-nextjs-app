'use client';

import {Session} from 'next-auth';
import {ReactNode} from 'react';
import {SessionProvider} from 'next-auth/react';

interface Props {
  session?: Session | null;
  children: ReactNode;
}

const Providers = ({session, children}: Props) => {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  );
};

export default Providers;