"use client";
import React, { useState } from "react";
import CompState from "./CompState";

function Comp({ children }: { children: React.ReactNode }) {
  const [username, setUsername] = useState("Jane");
  console.log(children);
  console.log(username);

  return (
    <div>
      <CompState setUsername={setUsername} />
    </div>
  );
}

export default Comp;
