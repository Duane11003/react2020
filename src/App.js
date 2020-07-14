import React from "react";
import ReactDOM from "react-dom";
import BoxList from "./BoxList";

function App() {
  return (
    <div>
      <p>hello world</p>
      <BoxList />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
