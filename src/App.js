import React, { useState } from "react";
import ReactDOM from "react-dom";
import Toggler from './Toggler'

function App() {
  return (
    <div>
      <Toggler />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
