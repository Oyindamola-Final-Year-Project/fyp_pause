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
        <div className={styles.welcomeToTheHotlineParent}>
          <div className={styles.welcomeToTheContainer}>
            <span className={styles.welcomeToThe}>{`Sharing is the first step.`}</span>
            <span className={styles.span}></span>
          </div>
          <div className={styles.whetherYoureFeeling}>Whether you're feeling anxious, need coping strategies, 
             or simply want to talk, our chatbot is here to help 24/7. Start a conversation anytime, and take a step towards better mental well-being.</div>
          <div className={styles.button}>
            <div className={styles.root}>
              <div className={styles.wrapper}>
                <div className={styles.label}>
                  <Link href="/chat">
                    <button className={styles.labeldesktopDontHide}>Start Chat</button>
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