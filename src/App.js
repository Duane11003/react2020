import React from "react";
import ReactDOM from "react-dom";
import Box from './Box'

function App() {
 return (
   <div>
     <p>hello world</p>
     <Box height={10} width={10} color='red' />
   </div>
 )
}

ReactDOM.render(<App />, document.getElementById("root"));
