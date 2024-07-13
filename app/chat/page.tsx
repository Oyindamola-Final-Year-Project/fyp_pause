"use client";

import { useState } from "react";
import styles from "./page.module.css";
import axios from "axios";
import Navbar from "@/components/navbar/page";
import Image from "next/image";

const App = () => {
  const [conversations, setConversations] = useState<
    { question: string; response: string }[]
  >([]);
  const [value, setValue] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const handleSubmit = async () => {
    const response = (
      await axios.post("/chat/chatapi", { question: value })
    ).data.choices[0].message.content;
    setConversations((prevConversations) => [
      ...prevConversations,
      { question: value, response },
    ]);
    setValue("");
  };

  return (
    <div className={styles.chat}>
      <Navbar />
      {conversations.map((conversation, index) => (
        <div key={index}>
          <div className={styles.request}>
            <p>{conversation.question}</p>
          </div>
          <div className={styles.response}>
            <p>{conversation.response}</p>
          </div>
        </div>
      ))}
      <div className={styles.textbox}>
        <input
          type="text"
          className={styles.textboxChild}
          value={value}
          onChange={onChange}
          placeholder="How are you feeling?"
        />
        <button className={styles.arrowRightIcon} onClick={handleSubmit}>
          <Image src="/images/arrow-right.svg" alt="" width="25" height="25" />
        </button>
      </div>
    </div>
  );
};

export default App;
