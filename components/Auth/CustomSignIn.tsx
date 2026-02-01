"use client";

import React from "react";
import Link from "next/link";
import { useAuth, useClerk } from "@clerk/nextjs";
import Icon from "@mdi/react";
import { mdiLogin, mdiLogout } from "@mdi/js";

export default function CustomSignIn() {
  const { isSignedIn } = useAuth();
  const { signOut } = useClerk();
  return (
    <>
      {isSignedIn ?
        <span className="flex flex-row items-center gap-2 text-2xl font-bold text-[#d4af37] hover:text-[#efbf04]">
          <Icon path={mdiLogout} size={.8} />
          <button className="cursor-pointer" onClick={() => signOut({ redirectUrl: "/" })}>
            Kilépés
          </button>
        </span>
        :
        <span className="flex flex-row items-center gap-2 text-2xl font-bold text-[#d4af37] hover:text-[#efbf04]">
          <Icon path={mdiLogin} size={.8} />
          <Link href="/sign-in">
            Belépés
          </Link>
        </span>
      }
    </>
  );
}