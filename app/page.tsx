import Image from "next/image";
import { auth } from "./auth";
import { SignInButton } from "./components/sign-in-button";
import { SignOutButton } from "./components/sign-out-button";

export default async function Home() {
  const session = await auth();
  console.log(session);
  if (session?.user) {
    return (
      <div>
        <p>user logged in with name: {session.user.name}</p>
        {session.user.image ? (
          <Image
            className="rounded-full"
            src={session.user.image}
            width={64}
            height={64}
            alt={session.user.name ?? "Avatar"}
          />
        ) : (
          ""
        )}
        <SignOutButton />
      </div>
    );
  }
  return (
    <div>
      <p>You are signed out</p>
      <SignInButton />
    </div>
  );
}
