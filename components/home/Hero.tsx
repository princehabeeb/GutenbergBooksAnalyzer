"use client";
import browserDark from "@/public/images/home/browser-dark.png";
import browser from "@/public/images/home/browser.png";
import HeroImg from "@/public/images/home/main.png";
import osDark from "@/public/images/home/os-dark.png";
import os from "@/public/images/home/os.png";
import projectStatusDark from "@/public/images/home/projects-status-dark.png";
import projectStatus from "@/public/images/home/projects-status.png";
import transactionsDark from "@/public/images/home/transactions-dark.png";
import transactions from "@/public/images/home/transactions.png";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import { useState } from "react";
import axios from "axios";

interface Book {
  title: string;
  metadata: string;
}

const Hero = () => {
  const { theme } = useTheme();
  const [bookID, setBookID] = useState("");
  const [books, setBooks] = useState<Book[]>([]);

  const fetchBook = async () => {
    try {
      const response = await axios.get(`/api/books?id=${bookID}`);
      setBooks((prev) => [...prev, response.data as Book]);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className=" bg-cover bg-no-repeat relative">
      <div className="bg-gradient-to-b from-primary/20 to-n0 dark:to-[#1B232D] pt-28 lg:pt-32">
        <Navbar />
        <div className="container">
          <div className="min-h-screen p-4 flex flex-col items-center">
            <h1 className="text-2xl font-bold">Project Gutenberg Book Explorer</h1>
            <div className="mt-4 ">
              <input
                type="text"
                placeholder="Enter Book ID"
                className="p-2 border border-gray-400 rounded"
                value={bookID}
                onChange={(e) => setBookID(e.target.value)}
              />
              <button
                onClick={fetchBook}
                className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
              >
                Fetch Book
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
