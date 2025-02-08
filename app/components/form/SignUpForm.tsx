"use client";

import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import FormField from "../ui/FormField";
import ButtonPrimary from "../ui/ButtonPrimary";
import { AuthForm } from "../ui/AuthForm";
import { registerUser } from "@/app/actions/auth";
import { useRouter } from "next/navigation";

const schema = z.object({
	username: z
		.string()
		.min(3, "Username must be at least 3 characters long")
		.max(20, "Username must be at most 20 characters long"),
	email: z.string().email("Invalid email address"),
	password: z
		.string()
		.nonempty("Password is required")
		.min(6, "Password must be at least 6 characters long"),
});

type FormFields = z.infer<typeof schema>;

const SignUpForm = () => {
	const router = useRouter();
	const [signUpError, setSignUpError] = useState<boolean>(false);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormFields>({
		resolver: zodResolver(schema),
	});

	const onSubmit: SubmitHandler<FormFields> = async (data) => {
		try {
			const response = await registerUser(data);
			if (response?.user) {
				router.push("/");
			} else {
				setSignUpError(true);
			}
		} catch (error) {
			setSignUpError(true);
			console.error("Error during registration:", error);
		}
	};

	return (
		<AuthForm onSubmit={handleSubmit(onSubmit)} title="Sign up">
			<div className="space-y-3">
				{signUpError && (
					<p className="text-red-500 text-sm">Error during registration</p>
				)}
				<FormField
					type="text"
					placeholder="Username"
					{...register("username")}
					label="Username"
					error={errors.username}
				/>
				<FormField
					type="text"
					placeholder="E-mail"
					{...register("email")}
					label="E-mail"
					error={errors.email}
				/>
				<FormField
					type="password"
					placeholder="Password"
					{...register("password")}
					label="Password"
					error={errors.password}
				/>
			</div>
			<ButtonPrimary type="submit" className="w-full">
				Sign up
			</ButtonPrimary>
		</AuthForm>
	);
};

export default SignUpForm;
