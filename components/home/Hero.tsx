"use client";
import { IconArrowUpRight, IconMenu2, IconSearch, IconLoader } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import Navbar from "./Navbar";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Book {
  title: string;
  metadata: string;
}

const Hero = () => {
  const { theme } = useTheme();
  const [bookID, setBookID] = useState("");
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchBook = async () => {
    if (!bookID) {
      toast.error("Please enter a Book ID.");
      return;
    }

    setIsLoading(true);

    const contentUrl = `https://www.gutenberg.org/files/${bookID}/${bookID}-0.txt`;
    const metadataUrl = `https://www.gutenberg.org/ebooks/${bookID}`;

    try {
      // Fetch content and metadata
      const [contentResponse, metadataResponse] = await Promise.all([
        axios.get(contentUrl),
        axios.get(metadataUrl),
      ]);

      // Extract the first 100 characters of the content as a preview
      const bookContent = contentResponse.data.slice(0, 100) + "...";
      const bookMetadata = metadataResponse.request.responseURL; 

      setBooks((prev) => [
        ...prev,
        { title: `Book ID: ${bookID}`, metadata: `${bookMetadata}\n${bookContent}` },
      ]);

      toast.success("Book fetched successfully!");
    } catch (err) {
      toast.error("Error fetching book. Please check the Book ID and try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className=" bg-cover bg-no-repeat relative">
      <ToastContainer />
      <div className="bg-gradient-to-b from-primary/20 to-n0 dark:to-[#1B232D] pt-28 lg:pt-32">
        <Navbar />
        <div className="container">
          <div className="min-h-screen p-4 flex flex-col items-center">
            <h1 className="text-2xl font-bold">Project Gutenberg Book Explorer</h1>
            <div className="mt-4 w-full flex items-center justify-center">
              <input
                type="text"
                placeholder="Enter Book ID"
                className="bg-transparent text-black px-5 py-2 xxl:py-3 rounded-[30px] border bg-white focus:outline-none md:w-[400px]"
                value={bookID}
                onChange={(e) => setBookID(e.target.value)}
              />
              <button
                onClick={fetchBook}
                className="ml-2 px-4 py-2 flex rounded-[30px] border bg-blue-500 text-white items-center"
              >
                {isLoading ? (
                  <IconLoader className="animate-spin" />
                ) : (
                  <IconSearch />
                )}
                <span className="ml-2">Fetch Book</span>
              </button>
            </div>
            <div className="mt-8">
              {books.map((book, idx) => (
                <div key={idx} className="p-4 bg-white rounded shadow mb-4">
                  <h2 className="font-bold">{book.title}</h2>
                  <p>{book.metadata}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
