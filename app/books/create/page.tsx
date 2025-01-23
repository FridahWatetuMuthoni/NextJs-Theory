"use client";

import { redirect } from "next/navigation";
import { FormEvent, useState } from "react";

function Create() {
  const [title, setTitle] = useState<string>("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const url = `http://localhost:3000/api/books`;
    const id = new Date().getMilliseconds().toString();
    const data = { id: Number(id), name: title };
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    setTitle("");

    if (response.ok) {
      console.log("Book updated successfully");
      redirect("/books");
    }
  };

  return (
    <div className="max-w-xl py-6 px-8 h-80 mt-20 bg-white rounded shadow-xl">
      <form action="" onSubmit={handleSubmit}>
        <div className="mb-6">
          <label htmlFor="name" className="block text-gray-800 font-bold">
            Title:
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Enter Title ...."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
          />
        </div>
        <button
          type="submit"
          className="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded"
        >
          Create
        </button>
      </form>
    </div>
  );
}

export default Create;
