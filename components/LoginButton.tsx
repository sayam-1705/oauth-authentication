"use client"; // ✅ Ensure this is a Client Component

import { signIn, signOut, useSession } from "next-auth/react";

const LoginButton = () => {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-6">
      {session ? (
        <>
          <p className="text-lg font-semibold">Welcome, {session.user?.name}</p>

          <div className="text-5xl font-semibold bg-blue-500 text-white h-15 w-15 text-center justify-center rounded-full">
            {session.user?.name?.charAt(0).toUpperCase()}
          </div>

          <button
            onClick={() => signOut()}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Sign Out
          </button>
        </>
      ) : (
        <button
          onClick={() => signIn("google")}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Sign in with Google
        </button>
      )}
    </div>
  );
};

export default LoginButton;
