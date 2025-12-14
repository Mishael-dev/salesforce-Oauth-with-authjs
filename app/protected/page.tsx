import { auth } from "@/auth";
import Image from "next/image";
import LoginButton from "../components/loginButton";
import LogoutButton from "../components/logoutButton";

export default async function Home() {
  const session = await auth();
  return (
    <div>
      <nav>
        {session ? (
          <div className="flex justify-center items-center flex-col mx-auto max-w-sm gap-2">
            <h2 className="text-xl text-white">Welcome!</h2>
            <div className="text-white">{session?.user?.name}</div>
            <div>{session?.user?.email}</div>
            <LogoutButton />
          </div>
        ) : (
          <div className="flex justify-center items-center flex-col mx-auto max-w-sm gap-2">
            <h2 className="text-xl text-white">You are logged out!</h2>
            <LoginButton />
          </div>
        )}
      </nav>
    </div>
  );
}
