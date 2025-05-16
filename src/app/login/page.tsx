"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function Login() {
  const { data: session } = useSession();

  console.log("Session data:", session);

  if (session) {
    return (
      <div>
        <p>Signed in as {session.user?.email}</p>
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    );
  }
  return (
    <div>
      <p>You are not signed in</p>
      <button onClick={() => signIn("azure-ad")}>Sign in with Azure AD</button>
    </div>
  );
}
