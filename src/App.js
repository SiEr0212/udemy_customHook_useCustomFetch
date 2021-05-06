import React from "react";
import "./App.css";

function App() {
const getFolowers = (e) => {
if(e.key === 'Enter'){
  alert('enter pressed')
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
