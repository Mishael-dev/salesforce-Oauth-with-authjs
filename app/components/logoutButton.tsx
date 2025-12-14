"use client"
import { signOut } from "next-auth/react";

export default function LogoutButton() {
  return (
    <button className="bg-white text-black rounded-sm px-3 py-2" onClick={() => signOut({ redirectTo: "/" })}>Sign out</button>
  );
}
