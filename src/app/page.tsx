type Book = {
  id: number;
  name: string;
  type: string;
  available: boolean;
};

async function getBooksinMain() {
  const response = await fetch(`https://simple-books-api.glitch.me/books`);
  const data = await response.json();
  return data;
}

export default async function Home() {
  const books = await getBooksinMain();
  console.log(books);
  return (
    <>
      <header className="bg-blue-500 text-white py-4 px-4 md:py-6 md:px-8 lg:px-12 mb-8 transition-colors hover:bg-blue-600">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-semibold mb-2 md:mb-0">
            Welcome to our Bookstore
          </h1>
          <p className="text-base md:text-lg mt-2 md:mt-0">
            Explore our vast collection of books
          </p>
        </div>
      </header>

      <main className="flex min-h-screen flex-col items-center justify-between p-8 lg:p-24">
        <div className="mb-16 grid gap-8 md:gap-12 lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
          <a
            href="/allbooks"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-blue-100 hover:dark:bg-orange-100 dark:hover:bg-blue-900/30 block w-full"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold text-blue-600 dark:text-blue-400">
              All Books{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-75 text-blue-800 dark:text-blue-400">
              Find in-depth information about all books available.
            </p>
          </a>

          <a
            href="/fiction"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-green-100 hover:dark:bg-orange-100 dark:hover:bg-green-900/30 block w-full"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold text-green-600 dark:text-green-400">
              Fiction Books{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-75 text-green-800 dark:text-green-400">
              Explore a collection of fiction books.
            </p>
          </a>

          <a
            href="/nonfiction"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-yellow-100 hover:dark:bg-orange-100 dark:hover:bg-yellow-900/30 block w-full"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold text-yellow-600 dark:text-yellow-400">
              Non-Fiction Books{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-75 text-yellow-800 dark:text-yellow-400">
              Explore a collection of non-fiction books.
            </p>
          </a>
        </div>

        <div className="mb-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Why Choose Our Bookstore?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-blue-100 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Wide Selection</h3>
              <p>Discover books catering to all tastes and interests.</p>
            </div>
            <div className="p-6 bg-green-100 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Fast Delivery</h3>
              <p>Enjoy quick and reliable delivery services.</p>
            </div>
            <div className="p-6 bg-yellow-100 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Excellent Service</h3>
              <p>
                Experience top-notch customer service for a pleasant shopping
                journey.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Explore More</h2>
          <p className="text-lg">
            Dive into our extensive collection and find your next favorite book!
          </p>
        </div>

        <div className="text-center mb-16 py-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {books.slice(0, 6).map((book: Book) => (
              <div
                key={book.id}
                className="bg-gray-200 p-4 rounded-md transition-transform hover:scale-105"
              >
                <h3 className="text-xl font-semibold mb-2">{book.name}</h3>
                <p>Type: {book.type}</p>
                <p className="py-4">
                  {book.available ? (
                    <span className="px-2 py-1 bg-green-500 text-white rounded">
                      Available
                    </span>
                  ) : (
                    <span className="px-2 py-1 bg-red-500 text-white rounded">
                      Not Available
                    </span>
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="bg-gray-200 text-gray-700 py-6 px-8 mt-auto transition-colors hover:bg-gray-300">
        <p className="text-center">
          &copy; 2024 Our Bookstore. All rights reserved.
        </p>
      </footer>
    </>
  );
}
