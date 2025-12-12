import { auth } from "@/auth";
import LoginButton from "./components/loginButton";
import LogoutButton from "./components/logoutButton";

export default async function Home() {
  const session = await auth();
  return (
    <div>
      <nav>
        <code>{JSON.stringify(session, null, 2)}</code>

        <LoginButton />
        <LogoutButton />
      </nav>
    </div>
  );
}
