import React, { useState } from "react";
import "./App.css";
import useCustomFetch from "./hooks/useCustomFetch";

function App() {
  const [url, seturl] = useState(null);
  const [data, loadig, error] = useCustomFetch(url);
  const getFolowers = (e) => {
    if (e.key === "Enter") {
      seturl("https://api.github.com/users/" + e.target.value);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>
          GitID:
          <input onKeyPress={getFolowers}></input>
        </h2>
      </header>
    </div>
  );
}

export default App;
