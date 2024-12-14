'use server';

import {connectDb} from '@/lib/mongodb';
import User from '@/models/User';
import bcrypt from 'bcryptjs';
import {redirect} from 'next/navigation';

interface IState {
  error: string;
}

export const register = async (_prevState: IState, formData: FormData) => {
  const name = formData.get('name');
  const email = formData.get('email');
  const password = formData.get('password') as string;

  try {

    await connectDb();
    const userFound = await User.findOne({email});
    if (userFound) {
      return {
        error: 'Email already exists!',
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