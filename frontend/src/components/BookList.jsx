import { Link } from "react-router";
import { useBookStore } from "../store/bookStore";
import { useEffect } from "react";

export default function BookList() {
  const { books, fetchBooks } = useBookStore();

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);
  return (
    <div className="text[#252422] bg-[#F5F5F5] px-4 md:px-12 pb-20">
      <h1 className="py-6 text-xl md:text-2xl lg:text-3xl w-full max-w-6xl">
        Reader's favourites
      </h1>

      <div className="flex flex-wrap mx-4 gap-5 lg:gap-16.75 max-w-[120rem]">
        {books.map((book, index) => (
          <Link key={index} to={`/book/${book._id}`} className="block">
            <div className="cursor-pointer w-36 md:w-40 xl:w-44 shadow-sm hover:shadow-md rounded-b-md">
              <div className="h-48 md:h-52 xl:h-60 bg-gray-900">
                <img
                  src={book.image}
                  alt="book_img"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="p-2">
                <h2 className="mb-2 font-semibold text-base md:text-lg">
                  {book.title}
                </h2>
                <p className="text-sm md:text-base">{book.author}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
