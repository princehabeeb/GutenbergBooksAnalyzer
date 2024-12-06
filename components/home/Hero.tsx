"use client";
import { IconArrowUpRight, IconMenu2, IconSearch, IconLoader, IconBook, IconBookmark, IconTex  } from "@tabler/icons-react";
import { useTheme } from "next-themes";
import Navbar from "./Navbar";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Book {
  title: string;
  metadata: string;
  content: string;
  isFullContentShown: boolean; // New state for toggling content display
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

    const contentUrl = `http://localhost:5000/api/proxy?url=${encodeURIComponent(`https://www.gutenberg.org/files/${bookID}/${bookID}-0.txt`)}`;
    const metadataUrl = `http://localhost:5000/api/proxy?url=${encodeURIComponent(`https://www.gutenberg.org/ebooks/${bookID}`)}`;

    try {
      const [contentResponse, metadataResponse] = await Promise.all([
        axios.get(contentUrl),
        axios.get(metadataUrl),
      ]);

      if (contentResponse.status === 200 && metadataResponse.status === 200) {
        const bookContent = contentResponse.data; // Full content
        const bookMetadata = metadataResponse.request.responseURL; // Metadata URL

        setBooks((prev) => [
          ...prev,
          {
            title: `Book ID: ${bookID}`,
            metadata: bookMetadata,
            content: bookContent,
            isFullContentShown: false, // Default to showing short content
          },
        ]);

        toast.success("Book fetched successfully!");
      } else {
        toast.error("Unable to fetch book. Please check the Book ID.");
      }
    } catch (err) {
      toast.error("Error fetching book. Please check the Book ID and try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleContent = (index: number) => {
    setBooks((prev) =>
      prev.map((book, idx) =>
        idx === index
          ? { ...book, isFullContentShown: !book.isFullContentShown }
          : book
      )
    );
  };

  const saveToCollection = (book: Book) => {
    toast.success(`Saved "${book.title}" to your collection!`);
  };

  const analyzeText = (book: Book) => {
    toast.info(`Analyzing text of "${book.title}"...`);
    // Mock text analysis logic here
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
                <span className="ml-2 hidden md:block">Fetch Book</span>
              </button>
            </div>
            <div className="mt-8 grid grid-cols-1  gap-4">
              {books.map((book, idx) => (
                <div key={idx} className="p-4 bg-white rounded shadow mb-4">
                  <h2 className="font-bold">{book.title}</h2>
                  <p>{book.isFullContentShown ? book.content : book.content.slice(0, 100) + "..."}</p>
                  <div className="flex justify-end mt-4 space-x-4">
                    <button
                      onClick={() => toggleContent(idx)}
                      className="text-blue-500 flex items-center"
                    >
                      <IconBook className="mr-1" /> {book.isFullContentShown ? "Show Less" : "Show More"}
                    </button>
                    <button
                      onClick={() => saveToCollection(book)}
                      className="text-green-500 flex items-center"
                    >
                      <IconBookmark className="mr-1" /> Save
                    </button>
                    <button
                      onClick={() => analyzeText(book)}
                      className="text-purple-500 flex items-center"
                    >
                      <IconTex  className="mr-1" /> Analyze
                    </button>
                  </div>
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
