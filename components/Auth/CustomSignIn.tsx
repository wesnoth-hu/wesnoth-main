"use client";

import React from "react";
import Link from "next/link";
import { useAuth, useClerk } from "@clerk/nextjs";

export default function CustomSignIn() {
  const { isSignedIn } = useAuth();
  const { signOut } = useClerk();
  return (
    <>
      {isSignedIn ?
        <span className="text-2xl font-bold text-[#d4af37] hover:text-[#efbf04]">
          <button className="cursor-pointer" onClick={() => signOut({ redirectUrl: "/" })}>
            Kilépés
          </button>
        </span>
        :
        <span className="text-2xl font-bold text-[#d4af37] hover:text-[#efbf04]">
          <Link href="/sign-in">
            Belépés
          </Link>
        </span>
      }
    </>
  );
}