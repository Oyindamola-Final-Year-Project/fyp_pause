"use client"

import { useState } from "react";
import type { NextPage } from 'next';
import styles from './conv.module.css';
import Image from 'next/image';
import axios from 'axios';


const Interface:NextPage = () => {
  const [inputText, setInputText] = useState<string>("");
  const [outputText, setOutputText] = useState<string>("");

  const handleSubmit = async () => {
    try {
      const response = (await axios.post("/chat", { question: inputText })).data.choices[0].message.content;
      setOutputText(response);
    } catch (error) {
      console.error("Error fetching response:", error);
    }
  };

  	return (
    		<div className={styles.interface3}>
      			<div className={styles.interface3Child} />
      			<b className={styles.pause}>PAUSE.</b>
            <button>
          <Image
            className={styles.menuIcon}
            alt=""
            src="/images/menu.svg"
            width={10}
            height={10}
          />
        </button>      			<div className={styles.interface3Item} />
      			<div className={styles.startAConversation}>Start a conversation...</div>
            <button>
            <Image
              className={styles.arrowRightIcon}
              alt=""
              src="/images/arrow-right.svg"
              width={10}
              height={10}
            />
          </button>      			<div className={styles.howAreYouContainer}>
        				<span>{`How are you, `}</span>
        				<span className={styles.really}>really</span>
        				<span>?</span>
          					</div>
          					<div className={styles.inputWrapper}>
            						<div className={styles.input}></div>
          					</div>
          					<div className={styles.outputWrapper}>
            						<div className={styles.output}></div>
          					</div>
          					</div>);
        				};
        				
        				export default Interface;
        				