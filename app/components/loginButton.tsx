"use client";
import { signIn } from "next-auth/react";

export default function LoginButton() {
  return (
    <button className="bg-white text-black rounded-sm px-3 py-2" onClick={() => signIn("salesforce", { redirectTo: "/" })}>
      SignIn
    </button>
  );
}
