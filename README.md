Gutenberg Explorer
A web application to explore, fetch, and analyze e-books from Project Gutenberg using modern web technologies and large language models (LLMs).

Features
-Fetch & Display Books:
-Users can input a Project Gutenberg book ID to fetch and view the book's content and metadata.

Book Management:
-Save and display a list of previously accessed books for easy retrieval.

Text Analysis:
-Perform various analyses on book content, including:

Identifying key characters
Language detection
Sentiment analysis
Plot summaries
(Extendable to more analyses)
Modern UI:
Designed with TailwindCSS and Framer Motion for a responsive and visually appealing experience.

LLM Integration:
Analyze book content using large language models (LLMs) from providers like Groq or SambaNova.

Tech Stack
Frontend
Framework: Next.js with TypeScript
Styling: TailwindCSS and Framer Motion for animations

Backend
Framework: Express.js

Database: MongoDB for storing book data and metadata
API Integration: Accessing Project Gutenberg content programmatically
Getting Started
Prerequisites
Node.js (v16+)
MongoDB (local or cloud instance)
Git
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/princehabeeb/GutenbergBooksAnalyzer.git
cd repo-name
Install dependencies for both the frontend and backend:

bash
Copy code
cd frontend
npm install
cd ../backend
npm install
Configure environment variables:
Create a .env file in the backend folder and add the following:

makefile
Copy code
MONGO_URI=your_mongodb_connection_string
PORT=5000
Start the backend server:

bash
Copy code
cd backend
npm start
Start the frontend server:

bash
Copy code
cd frontend
npm run dev
Open your browser and navigate to:

arduino
Copy code
http://localhost:3000

Usage
Input Book ID:
Enter a Project Gutenberg book ID in the input field and fetch the book.

Analyze Book:
Use the analysis tools to perform text analysis.

View Saved Books:
Access the list of previously fetched books from the dashboard.

Deployment
Deploy the frontend to platforms like Vercel or Netlify.
Deploy the backend to platforms like Heroku, Render, or AWS.
Ensure the frontend API requests point to the deployed backend URL.

Contributing

Contributions are welcome! If you have ideas or find bugs, feel free to open an issue or submit a pull request.

License
This project is open-source under the MIT License.

Contact
Name: Habibullahi Abdulwasiu
Email: habiy3400@gmail.com
GitHub: princehabeeb
