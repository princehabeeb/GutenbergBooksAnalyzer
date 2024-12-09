"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { useTheme } from "next-themes";
import Navbar from "@/components/home/Navbar";
import { useRouter } from "next/navigation";
import { franc } from "franc-min";
import { IconHome2 } from "@tabler/icons-react"; // Import the home icon

interface Book {
  _id: string;
  title: string;
  metadata: string;
  content: string;
}

const BooksPage = () => {
  const { theme } = useTheme();
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const route = useRouter();
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const token = localStorage.getItem("gutenberg-auth-token");
        if (!token) {
          throw new Error("Authentication token not found.");
        }

        const response = await axios.get("http://localhost:5000/api/books", {
          headers: { "gutenberg-auth-token": token },
        });

        const fetchedBooks = response.data.books || [];
        setBooks(fetchedBooks);
      } catch (error) {
        route.push("/login");
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50 dark:bg-gray-900">
        <p className="text-lg text-gray-600 dark:text-gray-300">Loading...</p>
      </div>
    );
  }

  const analyzeText = async (book: Book) => {
    setSelectedBook(book);
    try {
      const detectedLanguage = franc(book.content);
      alert(`The detected language of the book is: ${detectedLanguage}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Navbar />
      <div
        className={`min-h-screen p-4 ${
          theme === "dark" ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-900"
        }`}
      >
       

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mt-[100px] mx-auto"
        >
           {/* Back to Home Button */}
        <div
          className="flex items-center space-x-2 mb-6 cursor-pointer text-blue-600 hover:underline"
          onClick={() => route.push("/")}
        >
          <IconHome2 size={24} />
          <span className="font-medium text-lg">Back to Home</span>
        </div>
          <h1 className="text-3xl font-bold mb-6">Your Saved Books</h1>
          {books.length === 0 ? (
            <p className="text-gray-600 dark:text-gray-400">No books saved yet.</p>
          ) : (
            <ul className="space-y-4">
              {books.map((book) => (
                <motion.li
                  key={book._id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="p-4 bg-white dark:bg-gray-800 shadow rounded-lg"
                >
                  <h2 className="text-xl font-semibold">{book.title}</h2>
                  <p className="text-gray-600 dark:text-gray-400">
                    <a
                      href={book.metadata}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      View Metadata
                    </a>
                  </p>
                  <button
                    onClick={() => analyzeText(book)}
                    className="mt-2 inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                  >
                    Analyze Book
                  </button>
                </motion.li>
              ))}
            </ul>
          )}
        </motion.div>
      </div>
    </>
  );
};

export default BooksPage;
