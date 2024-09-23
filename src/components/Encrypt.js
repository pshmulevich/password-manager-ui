import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Encrypt: React.FC = () => {
  const [passwordLength, setPasswordLength] = useState(8);
  const [masterPassword, setMasterPassword] = useState("");
  const [passphrase, setPassphrase] = useState("");
  const [result, setResult] = useState("");

  // Resouce: https://codedamn.com/news/reactjs/axios-network-requests

  handleClick = (event) => {
    event.preventDefault();

    axios
      .post(`http://localhost:8081/api/genPassword`, {
        passwordLength,
        masterPassword,
        passphrase,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setResult(res.data);
      });
  };

  return (
    <div>
      <div className="Form">
        <div>
          <label>(WIP) Select password length:</label>
          <select
            className="Select"
            value={passwordLength}
            onChange={(e) => setPasswordLength(e.target.value)}
          >
            {/* https://www.geeksforgeeks.org/how-to-set-selected-option-of-a-select-in-react/ */}
            <option value="8">8</option>
            <option value="12">12</option>
            <option value="16">16</option>
          </select>
        </div>
        <div>
          <label>
            Enter Master Password:
            <input
              className="Select"
              type="text"
              placeholder="master password"
              value={masterPassword}
              onChange={(e) => setMasterPassword(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Enter Passphrase:
            <input
              className="Select"
              type="text"
              placeholder="passphrase"
              value={passphrase}
              onChange={(e) => setPassphrase(e.target.value)}
            />
          </label>
        </div>
        <div>
          <button className="Button" onClick={handleClick}>
            Submit
          </button>
        </div>

        <div>
          <label>
            Result:
            <input
              type="text"
              readOnly={true}
              className="Select"
              value={result}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Encrypt;
