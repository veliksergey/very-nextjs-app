'use client';

import Link from 'next/link';
import {useActionState} from 'react'
import {useSession} from 'next-auth/react';
import {redirect} from 'next/navigation';
import {register} from '@/actions/auth/register';

const RegisterPage = () => {
  const [state, formAction, isPending] = useActionState(register, {error: ''});
  const {status} = useSession();

  // if (status === 'authenticated') {
  //   redirect('/');
  // }

  return (
    <section className="w-full h-screen flex items-center justify-center">
      <form action={formAction}
            className="p-6 w-full max-w-[400px] flex flex-col justify-between items-center gap-2
        border border-solid border-black bg-white rounded">
        {/* {error && <div className="">{error}</div>}*/}

        {state?.error && <p className="error">{state.error}</p>}

        <h1 className="mb-5 w-full text-2xl font-bold">Register</h1>

        <label className="w-full text-sm">Full Name</label>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full h-8 border border-solid border-black py-1 px-2.5 rounded text-[13px]"
          name="name"
        />
        <br/>

        <label className="w-full text-sm">Email</label>
        <input
          type="email"
          placeholder="Email"
          className="w-full h-8 border border-solid border-black py-1 px-2.5 rounded"
          name="email"
        />
        <br/>


        <label className="w-full text-sm">Password</label>
        <input
          type="password"
          placeholder="Password"
          className="w-full h-8 border border-solid border-black py-1 px-2.5 rounded"
          name="password"
        />
        <br/>

        <button
          type="submit"
          className="w-full border border-solid border-black py-1.5 mt-2.5 rounded transition duration-150 ease hover:bg-black"
          disabled={isPending}
        >
          {isPending ? 'Registering' : 'Sign up'}
        </button>
        <br/><br/>

        <Link href="/api/auth/signin" className="text-sm text-[#888] transition duration-150 ease hover:text-black">
          Already have an account?
        </Link>
      </form>
    </section>
  );
};

export default RegisterPage