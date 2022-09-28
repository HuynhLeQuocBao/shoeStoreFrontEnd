import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from "axios";
import { authApi } from "@/apiClient/auth";

export default NextAuth({
	providers: [
		CredentialsProvider({
      name: 'Credentials',
      async authorize(credentials) {
        try {
          const result = await authApi.userLogin({
            email: credentials.email,
            password: credentials.password,
          });
					console.log(result);

          return result;
        } catch (error) {
          return null;
        }
      },
    }),
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
						`${process.env.API_URL}/api/v1/auth/${account.provider}`,
						{
							userId: user.id,
							fullname: user.name,
							email: user.email,
							picture: user.image,
						}
					);

					console.log("Data", result.data);

					token.accessToken = result.data.token;
					// token.expAccessToken = result.data.expires_at;
					token.user = result.data.newUser || result.data.userUpdated;
				}

				return token;
			} catch (error) {
				// console.log("error", error);
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
