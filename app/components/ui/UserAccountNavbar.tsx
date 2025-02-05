"use client";

import ButtonPrimary from "./ButtonPrimary";
import { signOut } from "next-auth/react";

const UserAccountNavbar = () => {
	return <ButtonPrimary onClick={() => signOut()}>Log out</ButtonPrimary>;
};

export default UserAccountNavbar;
