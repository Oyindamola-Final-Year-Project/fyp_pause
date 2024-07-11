"use client";

import { useState } from "react";
import styles from "./page.module.css";
import axios from "axios";
import Navbar from "@/components/navbar/page";
import Image from "next/image";

const App = () => {
  const [response, setResponse] = useState<string>("");
  const [value, setValue] = useState<string>("");
  const [previousQuestion, setPreviousQuestion] = useState<string>(""); // new state variable

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const handleSubmit = async () => {
    setPreviousQuestion(value); // update previous question when button is clicked
    const response = (await axios.post("/chat/chatapi", { question: value })).data.choices[0].message.content;
    setResponse(response);
  };

  return (
    <div className={styles.chat}>
      <Navbar />
      {response && (
        <div className={styles.request}>
          <p>{previousQuestion}</p>
        </div>
      )}
      {response && (
        <div className={styles.response}>
          <p>{response}</p>
        </div>
      )}
      <div className={styles.textbox}>
        <input
          type="text"
          className={styles.textboxChild}
          value={value}
          onChange={onChange}
          placeholder="Start the conversation..."
        />
        <button
          className={styles.arrowRightIcon}
          onClick={handleSubmit}
        >
          <Image src="/images/arrow-right.svg" alt="" width="25" height="25" />
        </button>
      </div>
    </div>
  );
};

export default App;