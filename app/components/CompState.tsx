"use client";
import React, { FormEvent, useState } from "react";

function CompState({
  setUsername,
}: {
  setUsername: React.Dispatch<React.SetStateAction<string>>;
}) {
  const [name, setName] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setUsername(name);
    setName("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Set Username</h1>
      <input
        className="border border-slate-900"
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button type="submit">Set Name</button>
    </form>
  );
}

export default CompState;
