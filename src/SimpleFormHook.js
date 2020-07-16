import React, { useState } from "react";

function SimpleFormHook() {
  const [email, setEmail] = useState("");
  return (
    <div>
      <h1>The email is: {email}</h1>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <button onClick={() => setEmail('')}>Submit</button>
    </div>
  );
}

export default SimpleFormHook;
