import { auth } from "../auth";

export default async function UserInfo() {
  const session = await auth();
  return <div>User Name: {session?.user?.name}</div>;
}