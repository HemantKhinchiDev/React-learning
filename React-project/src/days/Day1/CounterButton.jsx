import React from "react";
import { useState } from "react";

export const CounterButton = () => {
  const [count, setCount] = useState(0);
    return (
      <div className="view">
        on click count tracking: {count} 
        <button onClick={()=>setCount(count +1)}>Start Counter</button> 
        <button onClick={()=>setCount(0)}>Reset Counter </button> 
      </div>
    );
};
