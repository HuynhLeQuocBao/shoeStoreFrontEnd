import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import axios from 'axios';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, user, account }) {
      try {
        // Call multiple if use useSession
        if (user) {
          const result = await axios.post(
            `${process.env.API_URL}/api/login/${account.provider}`,
            { ...user, avatar: user.image }
          );

          token.accessToken = result.data.token;
          token.expAccessToken = result.data.expires_at;
          token.user = result.data.user;
        }

        return token;
      } catch (error) {
        console.log(error?.response?.data);
        return {
          isError: true,
        };
      }
    },
    async session({ session, token }) {
      if (token.isError) {
        return null;
      }

      session.accessToken = token.accessToken;
      session.user = token.user;
      // session.expires = new Date(token.expAccessToken).toISOString();

      return session;
    },
  },
});
