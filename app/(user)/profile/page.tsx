"use client";

import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
// import { useRouter } from "next/navigation";
// import Link from "next/link";
// import styles from "@/styles/Profile.module.css";

export default function Page() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <>
      <section>
        <p>
          username: <span>{user?.name}</span>
        </p>
        <p>
          email: <span>{user?.email}</span>
        </p>
      </section>
    </>
  );
}
