import React, { useState } from "react";
import ReactDOM from "react-dom";
import Toggler from "./Toggler";
// import SimpleFormHook from "./SimpleFormHook";
import SimpleFormInput from './SimpleFormInputHook'

function App() {
  return (
    <div>
      {/* <SimpleFormHook /> */}
      <SimpleFormInput />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
