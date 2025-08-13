import React from "react";
import { blogs } from "../../helpers/blogs";
import { BsArrowRight } from "react-icons/bs";



export default function Blogs() {
  const previewBlogs = blogs.slice(0, 3);

  return (
    <>
      <h3 className="font-bold text-4xl text-center pt-8">Our Blog</h3>
      <div className="flex justify-center px-8 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full">
          {previewBlogs.map((blog) => (
            <div key={blog.id} className="flex flex-col">
              <div className="w-full h-56 overflow-hidden ">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-sm text-gray-500 mt-4">{blog.date}</p>

              <h3 className="text-xl font-semibold mt-2">{blog.title}</h3>

              <p className="text-gray-700 line-clamp-2 mt-1">
                {blog.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="my-6 mx-8 text-gray-400">
        
          <div className=" flex gap-2 items-center cursor-pointer ">
            <p>View More Blog </p>
            <span>
              <BsArrowRight />
            </span>
          </div>
        

        <p className="border-b-2 lg:w-[11%] w-[50%] "></p>
      </div>
    </>
  );
}
