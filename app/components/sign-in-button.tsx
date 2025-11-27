"use client";

import { login } from "../lib/actions/auth";
export const SignInButton = () => {
  <button onClick={() => login()}>Sign in with github</button>;
};
