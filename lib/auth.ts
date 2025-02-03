import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import { compare } from "bcrypt";

export const authOptions: NextAuthOptions = {
	adapter: PrismaAdapter(prisma),
	session: {
		strategy: "jwt",
	},
	pages: {
		signIn: "/sign-in",
	},
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: { label: "Email", type: "email", placeholder: "E-mail" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials, req) {
				if (!credentials?.email || !credentials?.password) {
					return null;
				}

				const user = await prisma.user.findUnique({
					where: {
						email: credentials.email,
					},
				});
				if (!user) {
					return null;
				}
				const passowrdMatch = await compare(
					credentials.password,
					user.password
				);

				if (!passowrdMatch) {
					return null;
				}
				return {
					id: user.id,
					username: user.username,
					email: user.email,
				};
			},
		}),
	],
};
