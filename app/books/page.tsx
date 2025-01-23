import Link from "next/link";
import React from "react";

type Book = {
  id: number;
  name: string;
};

const url = `http://localhost:3000/api/books`;

async function get_books() {
  const response = await fetch(url);
  const books = await response.json();
  return books;
}

async function page() {
  const books: Book[] = await get_books();
  return (
    <div>
      {books.map((book) => (
        <li key={book.id}>
          <Link href={`/books/${book.id}`}>{book.name}</Link>
        </li>
      ))}
    </div>
  );
}

export default page;
