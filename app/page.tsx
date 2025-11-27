import Image from "next/image";
import { auth } from "./auth";

export default async function Home() {
  const session = await auth();
  console.log(session);
  if (session?.user) {
    return (
      <div>
        <p>user logged in with name: {session.user.name}</p>
        {session.user.image ? (
          <Image className="rounded-full"
            src={session.user.image}
            width={64}
            height={64}
            alt={session.user.name ?? "Avatar"}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
  return (
    <div>
      <p>You are signed out</p>
    </div>
  );
}
