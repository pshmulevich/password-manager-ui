// Following https://github.com/jsjoeio/react-ts-example
import "./styles.css";

import React from "react";
import "./App.css";
import Encrypt from "./components/Encrypt.js";

const App: React.FC = () => {
  return (
    <div className="App">
      <div>
        <h1 className="Header">Password Manager Service</h1>
        <div className="Instructions">
          <div>
            <b>Instructions:</b>
          </div>
          <div>
            Please enter Password and Passphrase in the form. Press{" "}
            <b> Submit </b> and copy the result from the result box.
          </div>
        </div>
      </div>
      <div>
        <Encrypt />
      </div>
    </div>
  );
};

export default App;
