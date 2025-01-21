"use client";
import { useState } from "react";

function Couter() {
  const [couter, setCounter] = useState<number>(0);

  const handleIncrease = () => {
    setCounter((prev) => (prev += 1));
  };

  const handleDecrease = () => {
    setCounter((prev) => (prev -= 1));
  };

  const handleReset = () => {
    setCounter(0);
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex gap-5 shadow-lg p-10 flex-col">
        <section className="flex gap-2  text-white">
          <button
            className="bg-blue-600 py-1 px-3 rounded-sm"
            onClick={handleIncrease}
          >
            Increase
          </button>
          <button
            className="bg-green-700 py-1 px-3 rounded-sm"
            onClick={handleReset}
          >
            Reset
          </button>
          <button
            className="bg-red-600 py-1 px-3 rounded-sm"
            onClick={handleDecrease}
          >
            Decrease
          </button>
        </section>
        <h1 className="text-3xl text-center">{couter}</h1>
      </div>
    </div>
  );
}

export default Couter;
