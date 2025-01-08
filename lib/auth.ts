import {AuthOptions, getServerSession} from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';
import {MongoDBAdapter} from '@auth/mongodb-adapter';
import client from '@/lib/db';
import {login} from '@/actions/auth/login';

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    CredentialsProvider({
      // id: 'credentials',
      name: 'Credentials',
      credentials: {
        email: {label: 'Email', type: 'text', placeholder: 'Email'},
        password: {label: 'Password', type: 'password', placeholder: 'Password'},
      },
      async authorize(credentials) { // req
        return login(credentials!);
      },
    }),
  ],
  pages: {
    signIn: '/signin',
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    session({session, token}) {

      if (session?.user) {
        session.user.id = token.sub as string;
      }

      return session;
    },
    jwt({user, token}) {

      if (user) {
        token.uid = token.sub;
      }

      return token;
    },
  },
  adapter: MongoDBAdapter(client),
  secret: process.env.NEXTAUTH_SECRET,
};

export const getSession = () => getServerSession(authOptions);