"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Navbar from "@/components/home/Navbar";

interface Book {
  id: number;
  title: string;
  author: string;
}

const BooksPage = () => {
  const { theme } = useTheme();
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      // Replace this with your API call to fetch books
      const userBooks = [
        { id: 1, title: "Pride and Prejudice", author: "Jane Austen" },
        { id: 2, title: "1984", author: "George Orwell" },
        { id: 3, title: "Moby Dick", author: "Herman Melville" },
      ];
      setBooks(userBooks);
      setLoading(false);
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

  return (
    <div
      className={`min-h-screen p-4 ${
        theme === "dark" ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-900"
      }`}
    >
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mt-[100px] mx-auto"
      >
        <h1 className="text-3xl font-bold mb-6">
          Your Saved Books
        </h1>
        {books.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-400">No books saved yet.</p>
        ) : (
          <ul className="space-y-4">
            {books.map((book) => (
              <motion.li
                key={book.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * book.id }}
                className="p-4 bg-white dark:bg-gray-800 shadow rounded-lg"
              >
                <h2 className="text-xl font-semibold">
                  {book.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  by {book.author}
                </p>
              </motion.li>
            ))}
          </ul>
        )}
      </motion.div>
    </div>
  );
};

export default BooksPage;
