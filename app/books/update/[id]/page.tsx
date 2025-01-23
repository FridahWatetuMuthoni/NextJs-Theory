"use client";

import React, { FormEvent, useEffect, useState } from "react";

const getBook = async (id: string) => {
  try {
    const response = await fetch(`http://localhost:3000/api/books/${id}`);
    if (!response.ok) throw new Error("Failed to fetch book");
    const book = await response.json();
    return book;
  } catch (err) {
    console.log(err);
    return null;
  }
};

function Update({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);
  const [title, setTitle] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  //fetch book on component mount
  useEffect(() => {
    const fetchBook = async () => {
      try {
        const book = await getBook(id);

        if (book) {
          setTitle(book.name || "");
        } else {
          setError("Book not found");
        }
      } catch (err) {
        console.log(err);
        setError("An error occurred while fetching the book");
      }
    };
    fetchBook();
  }, [id]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const url = `http://localhost:3000/api/books/${id}`;
      const book = { id: id, name: title };
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(book),
      });

      if (response.ok) {
        console.log("Book updated successfully");
        console.log(response);
        setTitle("");
      }
    } catch (err) {
      console.log(err);
    }
  };
  if (error) return <p className="text-red-500">{error}</p>;

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
          Update
        </button>
      </form>
    </div>
  );
}

export default Update;
