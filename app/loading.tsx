"use client";

import React from "react";
import Icon from "@mdi/react";
import { mdiReload } from "@mdi/js";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <Icon path={mdiReload} size={1} className="animate-loading-spinner"/>
      <p>Betöltés...</p>
    </div>
  )
}
