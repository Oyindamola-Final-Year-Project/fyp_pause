"use client";

import type { NextPage } from 'next';
import Navbar from '@/components/navbar/page';
import styles from "../styles/page.module.css";
import Link from 'next/link';

const Introduction: NextPage = () => {
  return (
    <>
      <div className={styles.introductionV2}>
        <div className={styles.introductionV2Child} />
        <Navbar />
        <div className={styles.welcomeParent}>
          <div className={styles.welcomeContainer}>
            <span className={styles.welcome}>{`Welcome to PAUSE.`}</span>
            <span className={styles.span}></span>
          </div>
          <div className={styles.button}>
            <div className={styles.root}>
              <div className={styles.wrapper}>
                <div className={styles.label}>
                  <Link href="/chat">
                    <button className={styles.labelStartChat}>Start Chat</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;