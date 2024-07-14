"use client";

import type { NextPage } from "next";
import Navbar from "@/components/navbar/page";
import styles from "../styles/page.module.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

import Image from "next/image";

const WelcomeUser: NextPage = () => {

  return (
    <div className={styles.welcomeUser}>
      <Navbar />
      <div className={styles.usertext}>FOR STUDENTS</div>
      <div className={styles.protext}>FOR PROFESSIONALS</div>
      <button>
        <Link href={"/pro"}>
        <Image
          className={styles.toggleOff}
          alt=""
          src="images/toggleOff.svg"
          width="84"
          height="43"
        />
        </Link>
      </button>
      <div className={styles.subtitle}>
        Mental health support, at your fingertips
      </div>
      <div className={styles.heading}>Start a conversation.</div>
      <div className={styles.btn}>
        <Link href="/chat">
        <div className={styles.borderline} />
        <div className={styles.btntext}>Start Chat</div>
        </Link>
      </div>
    </div>
  );
};

export default WelcomeUser;
