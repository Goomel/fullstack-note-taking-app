import Image from "next/image";
import SignInForm from "@/app/components/form/SignInForm";
import notesIcon from "@/public/icons/notes.png";

export default async function SignIn() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-sky-100 lg:flex-row">
      <div className="mb-10 flex w-full flex-col items-center justify-center gap-y-5 lg:mb-0 lg:h-full lg:w-1/2 lg:bg-white">
        <h1 className="text-center text-xl font-bold uppercase text-gray-700 sm:text-2xl lg:text-3xl">
          Your notes
        </h1>
        <Image
          src={notesIcon}
          alt="notes icn"
          width="64"
          height="64"
          className="hidden lg:block"
        />
      </div>
      <div className="w-full lg:w-1/2">
        <SignInForm />
        <p className="mt-5 text-center text-xs text-gray-700">
          Made by <span className="font-medium">Jakub Grzymisławski</span>
        </p>
      </div>
    </div>
  );
}
