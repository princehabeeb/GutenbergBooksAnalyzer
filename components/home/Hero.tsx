"use client";
import ReactModal from "react-modal";
import {
  IconSearch,
  IconLoader,
  IconBook,
  IconBookmark,
  IconTex,
} from "@tabler/icons-react";
import { useTheme } from "next-themes";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Book {
  title: string;
  metadata: string;
  content: string;
  isFullContentShown: boolean;
}

ReactModal.setAppElement("#modal-root");


const Hero = () => {
  const { theme } = useTheme();
  const [bookID, setBookID] = useState("");
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [analysisResults, setAnalysisResults] = useState<any>(null);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  useEffect(() => {
    // Use the body as the app element for React Modal
    ReactModal.setAppElement("body");
  }, []);

  const fetchBook = async () => {
    if (!bookID) {
      toast.error("Please enter a Book ID.");
      return;
    }

    setIsLoading(true);

    const contentUrl = `http://localhost:5000/api/proxy?url=${encodeURIComponent(
      `https://www.gutenberg.org/files/${bookID}/${bookID}-0.txt`
    )}`;
    const metadataUrl = `http://localhost:5000/api/proxy?url=${encodeURIComponent(
      `https://www.gutenberg.org/ebooks/${bookID}`
    )}`;

    try {
      const [contentResponse, metadataResponse] = await Promise.all([
        axios.get(contentUrl),
        axios.get(metadataUrl),
      ]);

      if (contentResponse.status === 200 && metadataResponse.status === 200) {
        const bookContent = contentResponse.data;
        const bookMetadata = metadataResponse.request.responseURL;

        setBooks((prev) => [
          ...prev,
          {
            title: `Book ID: ${bookID}`,
            metadata: bookMetadata,
            content: bookContent,
            isFullContentShown: false,
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

  const analyzeText = async (book: Book) => {
    setSelectedBook(book);
    setIsModalOpen(true);

    try {
      toast.info(`Analyzing text of "${book.title}"...`);
      const response = await axios.post("https://groq.com/analyze", {
        text: book.content,
      });

      setAnalysisResults(response.data);
    } catch (err) {
      toast.error("Error analyzing text. Please try again.");
      console.error(err);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setAnalysisResults(null);
  };

  const handleSave = async (book: Book) => {
    const token = localStorage.getItem("gutenberg-auth-token");
  
    if (!token) {
      toast.error("You must be logged in to save books.");
      setTimeout(() => {
        window.location.href = "/login"; 
      }, 1000);
      return;
    }
  
    try {
      const response = await axios.post(
        "http://localhost:5000/api/books",
        {
          title: book.title,
          metadata: book.metadata,
          content: book.content,
        },
        {
          headers: {
            Authorization:token,
          },
        }
      );
  
      if (response.status === 200) {
        toast.success(`"${book.title}" has been saved successfully!`);
      } else {
        toast.error("Failed to save the book. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred while saving the book.");
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
                {isLoading ? <IconLoader className="animate-spin" /> : <IconSearch />}
                <span className="ml-2 hidden md:block">Fetch Book</span>
              </button>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-4">
              {books.map((book, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded shadow mb-4 ${
                    theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
                  }`}
                >
                  <h2 className="font-bold">{book.title}</h2>
                  <p>
                    {book.isFullContentShown
                      ? book.content
                      : book.content.slice(0, 100) + "..."}
                  </p>
                  <div className="flex justify-end mt-4 space-x-4">
                    <button
                      onClick={() => toggleContent(idx)}
                      className={`flex items-center ${
                        theme === "dark" ? "text-blue-400" : "text-blue-500"
                      }`}
                    >
                      <IconBook className="mr-1" />{" "}
                      {book.isFullContentShown ? "Show Less" : "Show More"}
                    </button>
                    <button
                      onClick={() => analyzeText(book)}
                      className={`flex items-center ${
                        theme === "dark" ? "text-purple-400" : "text-purple-500"
                      }`}
                    >
                      <IconTex className="mr-1" /> Analyze
                    </button>
                    <button
                      onClick={() => handleSave(book)}
                      className={`flex items-center ${
                        theme === "dark" ? "text-green-400" : "text-green-500"
                      }`}
                    >
                      <IconBookmark className="mr-1" /> Save
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ReactModal isOpen={isModalOpen} onRequestClose={closeModal} className="modal">
        <h2 className="font-bold text-xl mb-4">Analysis of {selectedBook?.title}</h2>
        {analysisResults ? (
          <div>
            <p><strong>Key Characters:</strong> {analysisResults.characters.join(", ")}</p>
            <p><strong>Language:</strong> {analysisResults.language}</p>
            <p><strong>Sentiment:</strong> {analysisResults.sentiment}</p>
            <p><strong>Plot Summary:</strong> {analysisResults.plotSummary}</p>
          </div>
        ) : (
          <p>Loading analysis...</p>
        )}
        <button onClick={closeModal} className="text-red-500 mt-4">Close</button>
      </ReactModal>
    </div>
  );
};

export default Hero;
