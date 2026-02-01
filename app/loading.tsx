"use client";

import React from "react";
import styles from "@/styles/loading.module.css";
import Icon from "@mdi/react";
import { mdiReload } from "@mdi/js";

export default function Loading() {
  return (
    <div className={styles.container}>
      <Icon path={mdiReload} size={1} className={styles.loadingSpinner} />
      <p>Betöltés...</p>
    </div>
  )
}
