"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type AnalysisResult = {
  keyCharacters: string[];
  language: string;
  sentiment: string;
} | null;

const AnalyzePage = () => {
  const router = useRouter();
  const { bookTitle, bookContent } = router.query; // Fetch passed parameters
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult>(null);

  useEffect(() => {
    if (bookContent) {
      performAnalysis(bookContent as string);
    }
  }, [bookContent]);

  const performAnalysis = async (content: string) => {
    try {
      const analysis: AnalysisResult = {
        keyCharacters: extractCharacters(content),
        language: detectLanguage(content),
        sentiment: performSentimentAnalysis(content),
      };
      setAnalysisResult(analysis);
      toast.success("Analysis completed!");
    } catch (error) {
      console.error("Analysis Error:", error);
      toast.error("Failed to perform analysis.");
    }
  };

  const extractCharacters = (text: string) => {
    // Mock logic for extracting characters
    return ["Character A", "Character B"];
  };

  const detectLanguage = (text: string) => {
    // Mock language detection logic
    return "English";
  };

  const performSentimentAnalysis = (text: string) => {
    // Mock sentiment analysis logic
    return "Positive";
  };

  return (
    <div className="container">
      <ToastContainer />
      <h1 className="text-2xl font-bold">Analysis for "{bookTitle}"</h1>
      {analysisResult ? (
        <div className="mt-4 p-4 bg-white rounded shadow">
          <h2 className="font-bold">Results:</h2>
          <p><strong>Key Characters:</strong> {analysisResult.keyCharacters.join(", ")}</p>
          <p><strong>Language:</strong> {analysisResult.language}</p>
          <p><strong>Sentiment:</strong> {analysisResult.sentiment}</p>
        </div>
      ) : (
        <p className="mt-4">Analyzing text...</p>
      )}
      <button onClick={() => router.back()} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Go Back
      </button>
    </div>
  );
};

export default AnalyzePage;
