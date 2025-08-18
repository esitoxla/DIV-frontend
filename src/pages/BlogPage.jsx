import Blog from '../components/Blog'
import blogs from '../blog'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Recent Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map(blog => (
          <Blog key={blog.id} {...blog} />
        ))}
      </div>
    </div>
  );
}

export default App;

