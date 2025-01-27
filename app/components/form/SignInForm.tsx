"use client";

import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import FormField from "../ui/FormField";
import ButtonPrimary from "../ui/ButtonPrimary";
import { AuthForm } from "../ui/AuthForm";

const schema = z.object({
	email: z.string().email("Invalid email address"),
	password: z.string().min(6, "Password must be at least 6 characters long"),
});

type FormFields = z.infer<typeof schema>;

const SignInForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormFields>({
		defaultValues: {
			email: "",
			password: "",
		},
		resolver: zodResolver(schema),
	});

	const onSubmit: SubmitHandler<FormFields> = (data) => {
		console.log(data);
	};

	return (
		<AuthForm onSubmit={handleSubmit(onSubmit)} title="Sign in to your account">
			<div className="space-y-3">
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
				Sign in
			</ButtonPrimary>
			<div className="my-3 lg:my-4 flex items-center gap-x-3">
				<span className="block h-px bg-gray-200 grow"></span>
				<span className="">OR</span>
				<span className="block h-px bg-gray-200 grow"></span>
			</div>
			<p className="text-center text-sm">
				If you don&#39;t have an account, please{" "}
				<Link href="/sign-up" className="text-blue-500 hover:underline">
					Sign up
				</Link>
			</p>
		</AuthForm>
	);
};

export default SignInForm;
