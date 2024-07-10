"use client";

import { useState } from "react";

import axios from "axios";

const App = () => {
  const [response, setResponse] = useState<string>(
    ""
  );
  const [value, setValue] = useState<string>("");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);
  const handleSubmit = async () => {
    const response = (await axios.post("/chat/chatapi", { question: value })).data
      .choices[0].message.content;
    setResponse(response);
  };

  return (
    <div className="container">
      <div>
        <input type="text" value={value} onChange={onChange}></input>
      </div>
      <div>
        <button onClick={handleSubmit}>Click me for answers!</button>
      </div>
      <div>
        <p>Chatbot: {response}</p>
      </div>
    </div>
  );
};

export default App;
