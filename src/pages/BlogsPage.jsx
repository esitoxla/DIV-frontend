import React, { useState, useEffect } from "react";
import { blogs } from "../Helper/blogs";
import { useLocation } from "react-router";

export default function BlogsPage() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  // If a blog ID was passed from the homepage, set it as selected
  useEffect(() => {
    if (location.state && location.state.selectedBlogId) {
      const foundBlog = blogs.find(
        (b) => b.id === location.state.selectedBlogId
      );
      setSelectedBlog(foundBlog);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setSelectedBlog(null); // Normal state when user comes directly
    }
  }, [location.state]);

  return (
    <>
      <h3 className="font-bold text-4xl text-center pt-8">Our Blogs</h3>

      <div className="flex flex-col items-center px-6 md:px-12 mt-10 mb-6 max-w-7xl mx-auto">
        {/* SELECTED BLOG ON TOP */}
        {selectedBlog && (
          <div className="w-full md:w-[40%] cursor-pointer overflow-hidden shadow-sm hover:shadow-md transition mb-10">
            <img
              src={selectedBlog.image}
              alt={selectedBlog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500">{selectedBlog.date}</p>
              <h3 className="text-lg font-semibold mt-1">
                {selectedBlog.title}
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                {selectedBlog.description}
              </p>
            </div>
          </div>
        )}

        {/* ALL BLOGS BELOW (NO FILTERING) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              onClick={() => {
                setSelectedBlog(blog);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`cursor-pointer flex flex-col overflow-hidden shadow-sm hover:shadow-md transition ${
                selectedBlog && selectedBlog.id === blog.id
                  ? "border-blue-400"
                  : ""
              }`}
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-gray-500">{blog.date}</p>
                <h3 className="text-lg font-semibold mt-1 line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                  {blog.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* BUTTON TO CLEAR SELECTION */}
        {selectedBlog && (
          <button
            onClick={() => setSelectedBlog(null)}
            className="mt-8 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Back to Normal View
          </button>
        )}
      </div>
    </>
  );
}
