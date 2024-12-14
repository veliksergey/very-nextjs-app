'use server';

import 'server-only';

import mongoose from 'mongoose';

const {MONGODB_URI} = process.env;

export const connectDb = async () => {
  try {

    const {connection} = await mongoose.connect(MONGODB_URI as string);

    if (connection.readyState === 1) {
      console.log('======== MONGODB CONNECTED');
      return Promise.resolve(true);
    }

  } catch (err) {
    console.error(err);
    return Promise.reject(err);
  }
}