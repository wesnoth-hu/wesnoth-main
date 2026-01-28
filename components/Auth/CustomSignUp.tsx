"use client";

import React from "react";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

export default function CustomSignIn() {
  const { isSignedIn } = useAuth();
  return (
    <>
      {isSignedIn ?
        null
        :
        <span className="text-2xl font-bold text-[#d4af37] hover:text-[#efbf04]">
          <Link href="/sign-up">
            Regisztráció
          </Link>
        </span>
      }
    </>
  );
}