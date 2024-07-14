"use client";
import type { NextPage } from "next";
import styles from "./page.module.css";
import Navbar from "@/components/navbar/page";
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Apply: NextPage = () => {
  const notify = () => toast("Submission successful!");

  return (
    <div className={styles.apply}>
      <Navbar />
      <div className={styles.formcontainer}>
        <div className={styles.innercontainer}>
          <div className={styles.fillDetails}>Fill Details</div>
          <div className={styles.inputcontainer}>
            <div className={styles.innerformcontainer}>
              <div className={styles.input}>
                <div className={styles.top}>
                  <div className={styles.inputContent}>
                    <input
                      type="text"
                      className={styles.placehoder}
                      placeholder="Your First Name"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.input}>
                <div className={styles.top}>
                  <div className={styles.inputContent}>
                  <input
                      type="text"
                      className={styles.placehoder}
                      placeholder="Your Last Name"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.input}>
                <div className={styles.top}>
                  <div className={styles.inputContent}>
                  <input
                      type="text"
                      className={styles.placehoder}
                      placeholder="Your Email Address"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.input}>
                <div className={styles.top}>
                  <div className={styles.inputContent}>
                  <input
                      type="text"
                      className={styles.placehoder}
                      placeholder="Area of Specialisation (<100 characters)"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.phoneNumberAmount}>
                <div className={styles.bottomParent}>
                  <div className={styles.bottom}>
                    <div className={styles.fillDetails}>Phone Number</div>
                  </div>
                  <div className={styles.phone}>
                    <div className={styles.input4}>
                      <div className={styles.inputContent4}>
                        <div className={styles.inputContent}>
                        <input
                      type="text"
                      className={styles.placehoder}
                      placeholder="010 234 5678"
                    />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button onClick={notify} className={styles.btn}>Apply</button>
               <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apply;
