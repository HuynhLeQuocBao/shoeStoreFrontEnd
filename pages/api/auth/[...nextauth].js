import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import { authApi } from "@/apiClient/auth";

export default NextAuth({
	providers: [
		CredentialsProvider({
			id: "credentials",
			async authorize(credentials) {
				try {
					const result = await axios.post(
						`${process.env.API_URL}/api/v1/auth/login`,
						{
							email: credentials.email,
							password: credentials.password,
						}
					);
					console.log("Result", result.data.user);

					if (result) return result.data;
					else {
						return null;
					}
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
	session: {
		strategy: "jwt",
	},
	callbacks: {
		async jwt({ token, user, account }) {
			try {
				// facebook & google
				if (account.provider != "credentials" && user) {
					const result = await axios.post(
						`${process.env.API_URL}/api/v1/auth/${account.provider}`,
						{
							userId: user.id,
							fullname: user.name,
							email: user.email,
							picture: user.image,
						}
					);
					token.accessToken = result.data.token.accessToken;
					// token.expAccessToken = result.data.expires_at;
					token.user = result.data.newUser || result.data.userUpdated;
				} else {
					// credentials
					token.accessToken = user.tokens.accessToken;
					token.user = user.user;
				}
				return token;
			} catch (error) {
				// console.log(error);
				// console.log(error?.response?.data);
				// return {
				// 	isError: true,
				// };
				return token;
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
