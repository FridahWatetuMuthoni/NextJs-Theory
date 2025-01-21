"use client";

import React from "react";

type ButtonProps = {
  backgroundColor: string;
  fontSize: number;
  color: string;
};

function Button2({
  styles,
}: //   handleClick,
{
  styles: ButtonProps;
  //   handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <div>
      <button
        //   onClick={handleClick}
        style={styles}
      >
        Hello World
      </button>
    </div>
  );
}

export default Button2;
