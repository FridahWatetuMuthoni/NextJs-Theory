import books from "../../db";

type Book = {
  id: number;
  name: string;
};

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const index = books.findIndex((b) => b.id === Number(id));
  const book = books[index];
  if (!book) {
    return Response.json({ message: "book not found" });
  }

  return Response.json(book);
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const book = await request.json();
  const index = books.findIndex((b) => b.id === Number(id));
  if (index === -1) {
    return Response.json({ message: "Book not found" });
  }
  books[index] = book;
  console.log(books);

  return Response.json(books);
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  console.log(id);
  const new_books: Book[] = books.filter((book: Book) => book.id != Number(id));
  console.log(new_books);
  return Response.json(new_books);
}
