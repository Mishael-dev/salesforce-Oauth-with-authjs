"use client"
import { signOut } from "next-auth/react";

export default function () {
  return (
    <button onClick={() => signOut({ redirectTo: "/" })}>SignOut</button>
  );
}
