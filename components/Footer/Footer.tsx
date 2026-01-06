"use client";

import React from "react";
import Image from "next/image";
import styles from "@/styles/Footer.module.css";

export default function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div>&copy; Magyar Wesnoth Közösség 2005-2021, 2024</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Támogatók:{" "}
          <Image src="logo-next.svg" width={18} height={18} alt="NextJS Logo" />
          <Image
            src="logo-react.svg"
            width={18}
            height={18}
            alt="ReactJS Logo"
          />
        </div>
      </div>
    </>
  );
}
