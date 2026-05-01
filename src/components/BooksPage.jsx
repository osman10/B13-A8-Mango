"use client";

import { useState } from "react";
import Card from "@/components/Card";

const BooksPage = ({ books }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // filter logic (category + search)
  const filteredBooks = books.filter((book) => {
    const matchCategory =
      activeCategory === "All" || book.category === activeCategory;

    const matchSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchCategory && matchSearch;
  });

  // button style
  const getBtnClass = (category) =>
    activeCategory === category
      ? "bg-blue-500 text-white px-4 py-2 rounded-md"
      : "bg-gray-300 text-gray-700 px-4 py-2 rounded-md";

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">
        Book List
      </h1>

      {/* Category + Search */}
      <div className="flex justify-between items-center flex-wrap gap-4 mb-6">
        
        {/* Categories */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Categories</h2>
          <div className="flex flex-wrap gap-2">
            {["All", "Story", "Tech", "Science"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={getBtnClass(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Search */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Search Book</h2>
          <input
            type="text"
            placeholder="Search books..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 w-[250px]"
          />
        </div>
      </div>

      {/* Books */}
      {filteredBooks.length > 0 ? (
        <div className="flex flex-wrap justify-between gap-4">
          {filteredBooks.map((book) => (
            <Card key={book.id} item={book} />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 mt-10 min-h-[50vh] flex items-center justify-center">
          <h2 className="text-4xl text-gray-500">No books found 😔</h2>
        </div>
      )}
    </div>
  );
};

export default BooksPage;