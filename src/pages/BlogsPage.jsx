import React from 'react'
import { blogs } from '../../helpers/blogs';

export default function BlogsPage() {
  return (
    <>
      <h3 className="font-bold text-4xl text-center pt-8">Our Blog</h3>
      <div className="flex justify-center px-12 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full">
          {blogs.map((blog) => (
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
    </>
  );
}
