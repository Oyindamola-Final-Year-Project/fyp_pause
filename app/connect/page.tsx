"use client";

import type { NextPage } from "next";
import styles from "./page.module.css";
import Navbar from "@/components/navbar/page";
import Card from "@/components/profile-card/profile-card";

const Desktop: NextPage = () => {
  return (
    <div className={styles.desktop1}>
      <Navbar />
      <div className={styles.card}>
        <div className={styles.box} />
        <div className={styles.fullName}>Dr. Femi Ayo</div>
        <div className={styles.email}>Email: femiayo@yahoo.com</div>
        <div className={styles.hospital}>Practice: General Hospital, Ajah</div>
        <div className={styles.phoneno}>Phone: 0801112223</div>
        <div className={styles.profileIcon} />
        <div className={styles.specialty}>
          I work as a general practitioner for a wide range of challenges.
        </div>
        <div className={styles.city}>Eleko</div>
        <div className={styles.state}>Lagos State</div>
        <div className={styles.divider} />
      </div>
      <div className={styles.card1}>
        <div className={styles.box} />
        <div className={styles.fullName1}>Dr. Musa Yakubu</div>
        <div className={styles.city1}>Sangotedo</div>
        <div className={styles.email1}>Email: musayakubu@hotmail.com</div>
        <div className={styles.hospital}>Practice: General Hospital, Ajah</div>
        <div className={styles.state}>Lagos State</div>
        <div className={styles.profileIcon1} />
        <div className={styles.specialty1}>
          I specialise in high-functioning depression diagnosis and treatment.
        </div>
        <div className={styles.divider} />
        <div className={styles.phoneno}>Phone: 0801112223</div>
      </div>
      <div className={styles.card2}>
        <div className={styles.box} />
        <div className={styles.fullName}>Dr. Ada Eze</div>
        <div className={styles.email}>Email: adaeze@gmail.com</div>
        <div className={styles.hospital}>Practice: General Hospital, Ajah</div>
        <div className={styles.profileIcon2} />
        <div className={styles.specialty1}>
          I specialise in treating anxiety disorders through CBT.
        </div>
        <div className={styles.phoneno}>Phone: 0801112223</div>
      </div>
      <div className={styles.city2}>Ajah</div>
      <div className={styles.state2}>Lagos State</div>
      <div className={styles.divider2} />
    </div>
  );
};

export default Desktop;
