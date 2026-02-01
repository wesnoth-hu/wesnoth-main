"use client";

import React from "react";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import Icon from "@mdi/react";
import { mdiAccountPlus } from "@mdi/js";
import styles from "@/styles/customAuth.module.css";

export default function CustomSignIn() {
  const { isSignedIn } = useAuth();
  return (
    <>
      {isSignedIn ?
        null
        :
        <span className={styles.container}>
          <Icon path={mdiAccountPlus} size={1.2} />
          <Link href="/sign-up">
            Regisztráció
          </Link>
        </span>
      }
    </>
  );
}