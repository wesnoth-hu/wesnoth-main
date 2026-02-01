"use client";

import React from "react";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import Icon from "@mdi/react";
import { mdiAccountPlus } from "@mdi/js";

export default function CustomSignIn() {
  const { isSignedIn } = useAuth();
  return (
    <>
      {isSignedIn ?
        null
        :
        <span className="flex flex-row items-center gap-2 text-2xl font-bold text-[#d4af37] hover:text-[#efbf04]">
          <Icon path={mdiAccountPlus} size={.8} />
          <Link href="/sign-up">
            Regisztráció
          </Link>
        </span>
      }
    </>
  );
}