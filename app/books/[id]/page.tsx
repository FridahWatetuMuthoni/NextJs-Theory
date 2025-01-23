"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

type Book = {
  id: string;
  name: string;
};

function Book({ params }: { params: Promise<{ id: string }> }) {
  const [book, setBook] = useState<Book | null>(null);

  const { id } = React.use(params);
  console.log(book);

  useEffect(() => {
    const getBook = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/books/${id}`);
        const book = await response.json();
        if (book) {
          setBook(book);
        } else {
          console.log("error fetching the book");
        }
      } catch (err) {
        console.log(err);
      }
    };
    getBook();
  }, [id]);
  return (
    <div className="h-screen w-full flex items-center justify-center ">
      <section className="flex flex-col shadow-lg p-10 items-center justify-center h-64 w-96">
        <h1>{book?.name}</h1>
        <section className="my-4">
          <Link
            href={`/books/update/${id}`}
            className="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline"
          >
            Update
          </Link>
          <Link
            href={`/books/delete/${id}`}
            className="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline"
          >
            Delete
          </Link>
        </section>
      </section>
    </div>
  );
}

export default Book;
