import React from "react";

function Box(props) {
  return (
    <div>
      <div
        style={{
          height: `${props.height}em`,
          width: `${props.width}em`,
          backgroundColor: props.color,
        }}
      ></div>
      <button>x</button>
    </div>
  );
}

export default Box;
