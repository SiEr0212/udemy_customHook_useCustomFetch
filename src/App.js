import React, { useState } from "react";
import "./App.css";
import useCustomFetch from "./hooks/useCustomFetch";

function App() {
  const [url, seturl] = useState(null);
  const [data, loading, error] = useCustomFetch(url);
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
          <input onKeyPress={getFolowers} style={{ height: "50px" }}></input>
          {loading && url && <div>Loading...</div>}
          {!loading && data && data.resData && data.resData.followers && (
            <div>Followers: {data.resData.followers}</div>
          )}
          {error && <div>Error: {error}</div>}
        </h2>
      </header>
    </div>
  );
}

export default App;
