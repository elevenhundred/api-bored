import "./App.css";
import React, { useState } from "react";
import { useEffect } from "react";

function App() {
  const [tips, setTips] = useState("");

  const getTip = async () => {
    const response = await fetch(`https://www.boredapi.com/api/activity`);
    const data = await response.json();
    //console.log(data.activity);
    setTips("");
    setTips(data.activity);
  };

  useEffect(() => {
    getTip();
  }, []);

  return (
    <div className="main">
      <div className="App">
        <h1> Are you bored? </h1>
      </div>
      <div className="App">
        <button onClick={getTip}> Press me </button>
      </div>
      <div className="App">
        <p className="animated_rainbow_1">{tips}</p>
      </div>
    </div>
  );
}

export default App;
