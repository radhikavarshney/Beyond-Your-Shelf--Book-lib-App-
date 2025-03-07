import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";
import { useBookStore } from "../store/bookStore";

export default function AddBook() {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [author, setAuthor] = useState("");
  const [link, setLink] = useState("");
  const [review, setReview] = useState("");
  const { addBook, isLoading, error } = useBookStore();
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    let reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = function () {
      setImage(reader.result);
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image || !title || !author || !link) {
      toast.error("Please enter the required info.");
    }

    const { message } = await addBook(
      image,
      title,
      subtitle,
      author,
      link,
      review
    );

    toast.success(message);
    navigate("/");
  };

  return (
    <div className="min-h-screen text-[#252422] bg-[#f5f5f5] px-4 md:px-12 pb-2">
      <h2 className="text-center font-semibold pt-8 md:text-2xl w-full max-w-xl mx-auto">
        Add book to Library
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center w-full max-w-xl mx-auto space-y-4 mt-10"
      >
        <div className="flex flex-col w-full">
          <label className="md:text-lg">
            Book Image*:
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500"
            />
          </label>
        </div>
        <div className="flex flex-col w-full">
          <label className="md:text-lg">Title*:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter book title"
            className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="md:text-lg">Subtitle (optional):</label>
          <input
            type="text"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            placeholder="Enter subtitle (if any)"
            className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="md:text-lg">Author*:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Enter author's name"
            className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="md:text-lg">Link*:</label>
          <input
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="Enter active link of book"
            className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="md:text-lg">Personal Revirew (optional):</label>
          <textarea
            rows={4}
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder=". . . write your reviews"
            className="w-full px-3 py-1.5 md:py-2 text-[#252422] rounded-lg bg-white border border-gray-500"
          />
        </div>

        {error && <p className="text-red-500">{error}</p>}

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-[#403D39] text-[#FFFCF2] py-2 font-medium rounded-lg"
        >
          {isLoading ? "Please wait . . ." : "Add Book"}
        </button>
      </form>
    </div>
  );
}
