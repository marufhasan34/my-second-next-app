"use client";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2 className="text-5xl">counter : {count}</h2>
      <button
        onClick={() => setCount(count + 1)}
        className="px-5 py-2 bg-blue-900"
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
