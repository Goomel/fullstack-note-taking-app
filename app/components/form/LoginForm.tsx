"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../ui/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

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
		console.log("test");
		console.log(data);
	};

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Input
					type="text"
					inputProps={{ placeholder: "E-mail", ...register("email") }}
				/>
				{errors.email && <p className="text-red-500">{errors.email.message}</p>}
				<Input
					type="password"
					inputProps={{ placeholder: "Password", ...register("password") }}
				/>
				{errors.password && (
					<p className="text-red-500">{errors.password.message}</p>
				)}
				<button type="submit">Submit form</button>
			</form>
		</div>
	);
};

export default LoginForm;
