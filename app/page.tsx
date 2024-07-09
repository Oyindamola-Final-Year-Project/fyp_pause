"use client";

import { useState } from "react";
import type { NextPage } from "next";
import axios from "axios";
import styles from "../styles/page.module.css";
import Image from "next/image";
import Convers from "./chat-history/page";

const Interface: NextPage = () => {
  const [response, setResponse] = useState<string>("");
  const [value, setValue] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  const handleSubmit = async () => {
    const res = (await axios.post("/chat", { question: value })).data.choices[0].message.content;
    setResponse(res);
  };

  const handleButtonClick = async (text: string) => {
    setValue(text);
    const res = (await axios.post("/chat", { question: text })).data.choices[0].message.content;
    setResponse(res);
  };

  return (
    <div className={styles.interface}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <b className={styles.pause}>PAUSE.</b>
        <button>
          <Image
            className={styles.menuIcon}
            alt=""
            src="/images/menu.svg"
            width={10}
            height={10}
          />
        </button>
      </div>
      <div className={styles.chatBox}>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameItem} />
          <input
            type="text"
            className={styles.frameItem}
            value={value}
            onChange={onChange}
          />
          <button onClick={handleSubmit}>
            <Image
              className={styles.arrowRightIcon}
              alt=""
              src="/images/arrow-right.svg"
              width={10}
              height={10}
            />
          </button>
        </div>      </div>
      <div className={styles.orShareYour}>
        ... or share your thoughts below.
      </div>
      <div className={styles.howAreYouContainer}>
        <span>{`How are you, `}</span>
        <span className={styles.really}>really</span>
        <span>?</span>
      </div>
      <div className={styles.selectFromThese}>Select from these options...</div>
      <button onClick={() => handleButtonClick("feeling a bit anxious")}>
        <div className={styles.feelingABitAnxiousWrapper}>
          <div className={styles.feelingABit}>feeling a bit anxious</div>
        </div>
      </button>
      <button onClick={() => handleButtonClick("totally stressed out!")}>
        <div className={styles.totallyStressedOutWrapper}>
          <div className={styles.feelingABit}>totally stressed out!</div>
        </div>
      </button>
      <button onClick={() => handleButtonClick("a bit sad")}>
        <div className={styles.aBitSadWrapper}>
          <div className={styles.feelingABit}>a bit sad</div>
        </div>
      </button>
    </div>
  );
};

export default Interface;
