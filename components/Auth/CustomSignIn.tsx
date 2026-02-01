"use client";

import React from "react";
import Link from "next/link";
import { useAuth, useClerk } from "@clerk/nextjs";
import Icon from "@mdi/react";
import { mdiLogin, mdiLogout } from "@mdi/js";
import styles from "@/styles/customAuth.module.css";

export default function CustomSignIn() {
  const { isSignedIn } = useAuth();
  const { signOut } = useClerk();
  return (
    <>
      {isSignedIn ?
        <span className={styles.container}>
          <Icon path={mdiLogout} size={1.2} />
          <button className={styles.cursorPointer} onClick={() => signOut({ redirectUrl: "/" })}>
            Kilépés
          </button>
        </span>
        :
        <span className={styles.container}>
          <Icon path={mdiLogin} size={1.2} />
          <Link href="/sign-in">
            Belépés
          </Link>
        </span>
      }
    </>
  );
}