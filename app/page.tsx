import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { Session } from "next-auth";

export default async function Home() {
  const session: Session | null = await getServerSession(authOptions);

  if (session?.user) {
    redirect("/dashboard");
  } else {
    redirect("/signin");
  }
}
