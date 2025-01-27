"use server";

import { prisma } from "@/lib/prisma";
import { hash } from "bcrypt";
import z from "zod";

type RegisterUserData = {
	username: string;
	email: string;
	password: string;
};

const userSchema = z.object({
	username: z
		.string()
		.min(3, "Username must be at least 3 characters long")
		.max(20, "Username must be at most 20 characters long"),
	email: z.string().email("Invalid email address"),
	password: z.string().min(6, "Password must be at least 6 characters long"),
});

export const registerUser = async ({
	username,
	email,
	password,
}: RegisterUserData) => {
	try {
		userSchema.parse({ username, email, password });

		const userByEmail = await prisma.user.findUnique({
			where: {
				email,
			},
		});

		if (userByEmail) {
			return {
				user: null,
				message: "User already exists",
			};
		}

		const hashedPassword = await hash(password, 10);
		const newUser = await prisma.user.create({
			data: {
				username,
				email,
				password: hashedPassword,
			},
		});

		const { password: _password, ...userWithoutPassword } = newUser;
		return { user: userWithoutPassword, message: "User created" };
	} catch (error: unknown) {
		if (error instanceof Error) {
			console.log(error.message);
			return { message: "Something went wrong" };
		}
	}
};
