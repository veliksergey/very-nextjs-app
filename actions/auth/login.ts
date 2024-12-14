'use server';

import {connectDb} from '@/lib/mongodb';
import User from '@/models/User';
import bcrypt from 'bcryptjs';

interface Props {
  email: string;
  password: string;
}

export const login = async ({email, password}: Props) => {
  if (!email || !password) {
    return null;
  }

  await connectDb();
  const user = await User.findOne({
    email: email
  }).select('+password');

  if (!user) {
    return null;
  }

  const passwordMatch = await bcrypt.compare(
    password,
    user.password
  )

  if (!passwordMatch) {
    return null;
  }
  return user;
}