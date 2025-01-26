"use client";

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

const SignUpForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormFields>({
		resolver: zodResolver(schema),
	});

	const onSubmit: SubmitHandler<FormFields> = (data) => {
		console.log(data);
	};

	return (
		<AuthForm onSubmit={handleSubmit(onSubmit)} title="Sign up">
			<div className="space-y-3">
				<FormField
					type="text"
					placeholder="Username"
					{...register("email")}
					label="Username"
					error={errors.email}
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
