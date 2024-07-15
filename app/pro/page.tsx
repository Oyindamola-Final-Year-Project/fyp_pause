"use client";

import type { NextPage } from "next";
import Navbar from "@/components/navbar/page";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";



const WelcomePro: NextPage = () => {

  return (
    <div className={styles.welcomePro}>
      <Navbar />
      <div className={styles.usertext}>FOR STUDENTS</div>
      <div className={styles.protext}>FOR PROFESSIONALS</div>
      <button>
        <Link href={"/"}>
      <Image className={styles.toggleOn} alt="" src="images/toggleOn.svg" width="84" height="43" />
      </Link>
      </button>
      <div className={styles.subtitle}>
        Changing lives, one conversation at a time.
      </div>
      <div className={styles.heading}>Apply for a Directory Slot.</div>
      <div className={styles.btn}>
      <Link href="/apply">
        <div className={styles.borderline} />
        <div className={styles.btntext}>Begin Application</div>
        </Link>
      </div>
    </div>
  );
};

export default WelcomePro;
