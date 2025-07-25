import { createBrowserRouter, RouterProvider } from "react-router";  // Corrected import path
import LayOut from "./LayOut/LayOutPage";  // Corrected the layout import to use the correct name
import LandingPage from "./Routes/LandingPage";  // Corrected the import path for LandingPage
import PricingPage from "./pages/PricingPage";
import BlogPage from './pages/BlogPage'
import SignUp from "./Routes/SignUp";
import SignIn from "./Routes/SignIn";


let router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,  // Corrected 'Component' to 'element'
    children: [
      {
        index: true,
        // path: "/landingpage",  // Fixed the path to remove the leading slash
        element: <LandingPage />,  // Corrected 'Component' to 'element'
      },
      {
        path: "/pricingpage",  // Fixed the path to remove the leading slash
        element: <PricingPage />,  // Corrected 'Component' to 'element'
      },
        {
            path: "/signup",
            element: <SignUp />
          },
          {
            path:"/signin",
            element: <SignIn />
          },
        {
          path: "/blogs",
          element: <BlogPage />
        }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router}>
      {/* Removed LayOut since it's now provided through the router */}
    </RouterProvider>
  );
}

export default App;
