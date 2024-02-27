type Book = {
  id: number;
  name: string;
  type: string;
  available: boolean;
};

async function getNonFiction() {
  const response = await fetch(
    `https://simple-books-api.glitch.me/books?type=non-fiction&limit=20`
  );
  const data = await response.json();
  return data;
}

export default async function nfBook() {
  const nonfictionbook = await getNonFiction();
  console.log(nonfictionbook);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4 text-black">All Books</h1>
      <ul>
        {nonfictionbook.map((nonfictionbook: Book) => (
          <li key={nonfictionbook.id} className="mb-4">
            <div className="bg-gray-900 p-4 rounded-md">
              <h2 className="text-xl font-semibold my-2 text-white">
                {nonfictionbook.name}
              </h2>
              <p className="text-gray-400 my-4">Type: {nonfictionbook.type}</p>
              <span
                className={`px-4 py-1 rounded ${
                  nonfictionbook.available
                    ? "bg-green-500 text-white"
                    : "bg-red-500 text-white"
                }`}
              >
                {nonfictionbook.available ? "Available" : "Not Available"}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
