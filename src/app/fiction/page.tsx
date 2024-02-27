type Book = {
  id: number;
  name: string;
  type: string;
  available: boolean;
};

async function getFiction() {
  const response = await fetch(
    `https://simple-books-api.glitch.me/books?type=non-fiction&limit=20`
  );
  const data = await response.json();
  return data;
}

export default async function fBook() {
  const fictionbook = await getFiction();
  console.log(fictionbook);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-black">Fiction Books</h1>
      <ul>
        {fictionbook.map((book: Book) => (
          <li key={book.id} className="mb-4">
            <div className="bg-gray-900 p-4 rounded-md">
              <h2 className="text-xl font-semibold my-2 text-white">
                {book.name}
              </h2>
              <p className="text-gray-400 my-4">Type: {book.type}</p>
              <span
                className={`px-4 py-1 rounded ${
                  book.available
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                }`}
              >
                {book.available ? "Available" : "Not Available"}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

  /* return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Fiction Books</h1>
      <ul>
        {fictionbook.map((book: Book) => (
          <li key={book.id} className="mb-2">
            <div className="flex items-center justify-between bg-gray-100 p-4 rounded-md">
              <div>
                <h2 className="text-xl font-semibold text-black">
                  {book.name}
                </h2>
                <p className="text-gray-600">{book.type}</p>
              </div>
              <span
                className={`px-4 py-2 rounded ${
                  book.available
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                }`}
              >
                {book.available ? "Available" : "Not Available"}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  ); */
}
