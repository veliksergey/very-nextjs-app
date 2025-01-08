'use client';

import Link from 'next/link';
import {useActionState} from 'react';
import {register} from '@/actions/auth/register';

const RegisterPage = () => {
  const [state, formAction, isPending] = useActionState(register, null);

  return (
    <div className="flex items-center justify-center">
      <div className="card w-96 bg-base-100 shadow-xl my-10">
        <div className="card-body">
          <h2 className="card-title">Sign Up</h2>

          {/* error */}
          {state?.error && (
            <p className="alert alert-error mb-2">
              <span>{state?.error}</span>
            </p>
          )}

          <form action={formAction}>

            {/* name */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="name"
                placeholder="Enter your first and last names"
                className="input input-bordered w-full max-w-xs"
                required
                defaultValue={state?.name}
                name="name"
              />
            </div>

            {/* email */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full max-w-xs"
                required
                defaultValue={state?.email}
                name="email"
              />
            </div>

            {/* password */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="input input-bordered w-full max-w-xs"
                required
                defaultValue={state?.password}
                name="password"
              />
            </div>

            {/* submit btn */}
            <div className="form-control w-full max-w-xs mt-4">
              <button
                type="submit"
                className="btn btn-primary w-full"
                disabled={isPending}
              >
                {isPending ? 'Signing you up' : 'Sign Up'}
              </button>
            </div>
          </form>

          {/* sign in link */}
          <div className="text-center mt-4">
            <Link href="/signin" className="underline">Already have an account?</Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RegisterPage;