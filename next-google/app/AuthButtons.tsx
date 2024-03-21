"use client";
import { signIn, signOut } from "next-auth/react";

export const LoginButton = () => {
  // Redirect directly to the provider without the callback
  const LoginWithGoogle = () => {
    signIn("google", {
      callbackUrl: "/",
    });
  };

  return <button onClick={LoginWithGoogle}>Sign in with Google</button>;
};

export const LogoutButton = () => {
  return <button onClick={() => signOut()}>Sign out</button>;
};
