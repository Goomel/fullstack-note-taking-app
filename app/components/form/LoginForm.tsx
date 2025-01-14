"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../ui/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import ButtonPrimary from "../ui/ButtonPrimary";

const schema = z.object({
	email: z.string().email("Invalid email address"),
	password: z.string().min(6, "Password must be at least 6 characters long"),
});

type FormFields = z.infer<typeof schema>;

const LoginForm = () => {
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
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="shadow-lg p-4 lg:p-6 flex flex-col max-w-md mx-auto bg-white gap-y-5"
		>
			<p className="text-center text-lg lg:text-xl">Log in to your account</p>
			<div className="w-full">
				<Input type="text" placeholder="E-mail" {...register("email")} />
				{errors.email && <p className="text-red-500">{errors.email.message}</p>}
			</div>
			<div className="w-full">
				<Input
					type="password"
					placeholder="Password"
					{...register("password")}
				/>
				{errors.password && (
					<p className="text-red-500">{errors.password.message}</p>
				)}
			</div>
			<ButtonPrimary type="submit">Sign in</ButtonPrimary>
			<hr className="h-px my-5 lg:my-6 bg-gray-500" />
			<p className="text-center">Sign up</p>
		</form>
	);
};

export default LoginForm;
