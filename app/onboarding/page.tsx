"use client";

import React from "react";
import Image from "next/image";
import styles from "@/styles/onboarding.module.css";

export default function Page() {
	return (
		<section className={styles.onboarding}>
			<h1>Beilleszkedési Folyamat</h1>
			<section className={styles.content}>
				<div className={styles.avatar}>
					AVATAAR
				</div>
			</section>
		</section>
	)
}