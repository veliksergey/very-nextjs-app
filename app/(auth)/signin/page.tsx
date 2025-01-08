'use client';

import {FormEvent, useState} from 'react';
import {useRouter} from 'next/navigation';
import {signIn} from 'next-auth/react';

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>('');
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
      setError('Invalid Credentials');
    } else {
      router.push('/');
    }
    setIsPending(false);
  }

  const handleGithub = async () => {
    const result = await signIn('github', {
      callbackUrl: '/',
    });
    console.log(result);
    debugger;
  }

  return (
    <div className="container">
      <section>
        <form onSubmit={handleSubmit}>

          <input type="email" name="email" required placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
          <br/>

          <input type="password" name="password" required placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
          <br/>

          {error && <p style={{ color: 'red' }}>{error}</p>}

          <button
            type="submit"
            disabled={isPending}
          >Sign In</button>
        </form>
        <button onClick={handleGithub}>
          Sign In with Github
        </button>
      </section>
    </div>
  );
}

export default SignInPage;