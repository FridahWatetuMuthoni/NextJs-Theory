"use client";
import React from "react";

function Delete({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params);
  const url = `http://localhost:3000/api/books/${id}`;

  const handleDelete = async () => {
    try {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log("book deleted successfully");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="max-w-xl py-6 px-8 h-80 mt-20 bg-white rounded shadow-xl">
      <form onSubmit={handleDelete} method="POST">
        <p>Are you sure you want to delete this book?</p>
        <button
          type="submit"
          className="cursor-pointer py-2 px-4 block mt-6 bg-indigo-500 text-white font-bold w-full text-center rounded"
        >
          Delete Post
        </button>
      </form>
    </div>
  );
}

export default Delete;
