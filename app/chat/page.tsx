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
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const handleSubmit = async () => {
    setIsLoading(true);
    const response = (
      await axios.post("/chat/chatapi", { question: value })
    ).data.choices[0].message.content;
    setConversations((prevConversations) => [
      ...prevConversations,
      { question: value, response },
    ]);
    setValue("");
    setIsLoading(false);
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
          disabled={isLoading}
        />
        <button
          className={styles.arrowRightIcon}
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? (
            <div className={styles.loadingSpinner}></div>
          ) : (
            <Image src="/images/arrow-right.svg" alt="" width="25" height="25" />
          )}
        </button>
      </div>
    </div>
  );
};

export default App;
