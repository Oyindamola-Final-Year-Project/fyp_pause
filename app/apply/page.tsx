"use client";
import type { NextPage } from "next";
import styles from "./page.module.css";
import Navbar from "@/components/navbar/page";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Apply: NextPage = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [phone_no, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const response = await fetch("/apply/formapi", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name,
        last_name,
        city,
        state,
        specialty,
        phone_no,
        email,
      }),
    });

    const result = await response.json();

    if (result.success) {
      setFirstName("");
      setLastName("");
      setCity("");
      setState("");
      setSpecialty("");
      setPhoneNo("");
      setEmail("");
    } else {
      alert("Error submitting data");
    }
  };
  const notify = () => toast("Submission successful!");

  return (
    <div className={styles.apply}>
      <Navbar />
      <form onSubmit={handleSubmit}>
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
                        value={first_name}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="First Name"
                        required
                        className={styles.placehoder}
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.input}>
                  <div className={styles.top}>
                    <div className={styles.inputContent}>
                      <input
                        type="text"
                        value={last_name}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Last Name"
                        required
                        className={styles.placehoder}
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.input}>
                  <div className={styles.top}>
                    <div className={styles.inputContent}>
                      <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="City"
                        required
                        className={styles.placehoder}
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.input}>
                  <div className={styles.top}>
                    <div className={styles.inputContent}>
                      <input
                        type="text"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        placeholder="State"
                        required
                        className={styles.placehoder}
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.input}>
                  <div className={styles.top}>
                    <div className={styles.inputContent}>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                        className={styles.placehoder}
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.input}>
                  <div className={styles.top}>
                    <div className={styles.inputContent}>
                      <input
                        type="text"
                        value={specialty}
                        onChange={(e) => setSpecialty(e.target.value)}
                        required
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
                              value={phone_no}
                              onChange={(e) => setPhoneNo(e.target.value)}
                              placeholder="Phone No"
                              required
                              className={styles.placehoder}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button onClick={notify} className={styles.btn}>
                Apply
              </button>
              <ToastContainer />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Apply;
