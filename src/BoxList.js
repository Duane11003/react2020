import React, { useState } from "react";
import Box from "./Box";

function BoxList() {
  const [boxes, setBoxes] = useState([{width: 20, height: 20, color: 'orange'}]);
  const currentBoxes = boxes.map((box) => (
    <Box width={box.width} height={box.height} color={box.color} />
  ));
  return (
    <div>
      <h1>Color box</h1>
      {currentBoxes}
    </div>
  );
}

export default BoxList;
