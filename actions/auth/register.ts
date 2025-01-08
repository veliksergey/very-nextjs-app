'use server';
import 'server-only';

import {connectDb} from '@/lib/mongodb';
import User from '@/models/User';
import bcrypt from 'bcryptjs';
import {redirect} from 'next/navigation';

interface IState {
  error: string;
  name: string;
  email: string;
  password: string;
}

export const register = async (_prevState: IState | null, formData: FormData): Promise<IState> => {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  try {

    await connectDb();
    const userFound = await User.findOne({email});
    if (userFound) {
      return {
        error: 'This email is already registered!',
        name,
        email,
        password,
      }
    }

    const hashedPwd = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email,
      password: hashedPwd,
    })

    await user.save();

  } catch (error) {
    console.error(error);

    throw new Error('Registration failed');
  }

  redirect('/api/auth/signin');
}