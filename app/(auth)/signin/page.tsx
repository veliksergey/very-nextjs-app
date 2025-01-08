'use client';

import {FormEvent, useState} from 'react';
import {useRouter} from 'next/navigation';
import {LiteralUnion, signIn} from 'next-auth/react';
import Image from 'next/image';
import githubIcon from '@/assets/github-icon.png';
import googleIcon from '@/assets/google-icon.png';
import {BuiltInProviderType} from 'next-auth/providers/index';
import Link from 'next/link';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsPending(true);

    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      console.error(result.error);
      setError('Invalid Credentials!');
    } else {
      router.push('/');
    }
    setIsPending(false);
  };

  const handleThirdPartyAuth = async (authType: LiteralUnion<BuiltInProviderType>) => {
    await signIn(authType, {callbackUrl: '/'});
  };

  return (
    <div className="flex items-center justify-center">
      <div className="card w-96 bg-base-100 shadow-xl my-10">
        <div className="card-body">
          <h2 className="card-title">Sign In</h2>

          {/* error */}
          {error && (
            <p className="alert alert-error mb-2">
              <span>{error}</span>
            </p>
          )}

          <form onSubmit={handleSubmit}>

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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* submit btn */}
            <div className="form-control w-full max-w-xs mt-4">
              <button
                type="submit"
                className="btn btn-primary w-full"
                disabled={isPending}
              >
                Sign In
              </button>
            </div>
          </form>

          {/* sign up link */}
          <div className="text-center mt-4">
            <Link href="/register" className="underline">
              Sign Up
            </Link>
          </div>

          <div className="divider"></div>

          {/* github */}
          <button
            className="btn"
            role="button"
            onClick={() => handleThirdPartyAuth('github')}
          >
            <Image
              src={githubIcon}
              alt="Github"
              height={24}
              width={24}
            />
            Sign In with Github
          </button>

          {/* google */}
          <button
            className="btn"
            onClick={() => handleThirdPartyAuth('google')}
          >
            <Image
              src={googleIcon}
              alt="Google"
              height={20}
              width={20}
            />
            Sign In with Google
          </button>

        </div>
      </div>
    </div>
  );
};

export default SignInPage;