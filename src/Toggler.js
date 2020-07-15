import React from "react";
import useToggle from "./hooks/useToggle";

function Toggler() {
  const [isHappy, toggleIsHappy] = useToggle(true);
  const [isHeartBroken, toggleHeartBroken] = useToggle(false);
  return (
    <div>
      <h1 onClick={toggleIsHappy}>{isHappy ? "happy" : "sad"}</h1>
      <h1 onClick={toggleHeartBroken}>{isHeartBroken ? "<3" : ":-("}</h1>
    </div>
  );
}

export default Toggler;
