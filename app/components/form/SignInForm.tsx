"use client";

import { useState } from "react";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import FormField from "../ui/FormField";
import ButtonPrimary from "../ui/ButtonPrimary";
import { AuthForm } from "../ui/AuthForm";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const schema = z.object({
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .nonempty("Password is required")
    .min(6, "Password must be at least 6 characters long"),
});

type FormFields = z.infer<typeof schema>;

const SignInForm = () => {
  const router = useRouter();
  const [loginError, setLoginError] = useState<boolean>(false);
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

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    const signInData = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (!signInData?.ok) {
      setLoginError(true);
    } else {
      router.push("/");
      router.refresh();
    }
  };

  return (
    <AuthForm onSubmit={handleSubmit(onSubmit)} title="Sign in to your account">
      <div className="space-y-3">
        {loginError && (
          <p className="text-sm text-red-500">Invalid email or password</p>
        )}
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
      <div className="my-3 flex items-center gap-x-3 lg:my-4">
        <span className="block h-px grow bg-gray-200"></span>
        <span className="">OR</span>
        <span className="block h-px grow bg-gray-200"></span>
      </div>
      <p className="text-center text-sm">
        If you don&#39;t have an account, please{" "}
        <Link href="/signup" className="text-blue-500 hover:underline">
          Sign up
        </Link>
      </p>
    </AuthForm>
  );
};

export default SignInForm;
