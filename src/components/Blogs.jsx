import React from "react";
import { blogs } from "../Helper/blogs";
import { BsArrowRight } from "react-icons/bs";
import { useNavigate } from "react-router";


export default function Blogs() {
  const previewBlogs = blogs.slice(0, 3);
  const navigate = useNavigate();

  const handleBlogClick = (blog) => {
    navigate("/blogs", { state: { selectedBlogId: blog.id } });
  };

  return (
    <>
      <h3 className="font-bold text-4xl text-center pt-8">Our Blogs</h3>

      <div className="flex justify-center px-8 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full ">
          {previewBlogs.map((blog) => (
            <div
              key={blog.id}
              className="cursor-pointer flex flex-col overflow-hidden shadow-sm hover:shadow-md transition"
              onClick={() => handleBlogClick(blog)}
            >
              <div className="w-full h-56 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

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
      </div>

      <div className="my-6 mx-8 text-gray-400">
        <div
          onClick={() => navigate("/blogs")}
          className="flex gap-2 items-center cursor-pointer"
        >
          <p>View More Blogs</p>
          <span>
            <BsArrowRight />
          </span>
        </div>

        <p className="border-b-2 lg:w-[11%] w-[50%]"></p>
      </div>
    </>
  );
}
