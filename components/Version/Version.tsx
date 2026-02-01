"use client";

import React from "react";
import styles from "@/styles/version.module.css";

// TODO: add classNames module 
export default function Version() { 
  return (
    <span
      className={styles.version}
    >
      1.18.6
    </span>
  );
}