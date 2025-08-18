
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import FAQs from "./components/FAQs";
import QrAction from "./components/QrAction";
import PricingPage from "./pages/PricingPage";
import Blogs from "./components/blogs";
import BlogsPage from "./pages/BlogsPage";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import MyQrCodes from "./components/DonutCharts";
import VendorLayout from "./Layouts/VendorLayout";
import RootLayout from "./Layouts/RootLayout";
import QrFolder from "./pages/QrFolder";
import QrCodesPage from "./pages/QrCodesPage";
import QRCodeGenerator from "./components/QrCodeGenerator";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AuthLayout from "./Layouts/AuthLayout";
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
  const router = createBrowserRouter([
    {
      path: "/",
      Component: RootLayout,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          Component: Home,
        },
        {
          path: "faqs",
          Component: FAQs,
        },
        {
          path: "blogs",
          Component: BlogsPage,
        },
        {
          path: "price",
          Component: PricingPage,
        },
      ],
    },
    {
      path: "dashboard",
      Component: VendorLayout,
      children: [
        {
          path: "myqrcodes",
          Component: QrCodesPage,
          children: [
            {
              path: "create",
              Component: QRCodeGenerator,
            },
          ],
        },
        {
          path: "analytics",
          Component: QrFolder,
        },
        {
          path: "price",
          Component: PricingPage,
        },
      ],
    },
    {
      path: "auth",
      Component: AuthLayout,
      children: [
        {
          path: "login",
          Component: SignIn,
        },
        {
          path: "signup",
          Component: SignUp,
        },
      ],
    },
  ]);

  //
  return <RouterProvider router={router} />;
  return (
    <RouterProvider router={router}>
      {/* Removed LayOut since it's now provided through the router */}
    </RouterProvider>

  );
}

export default App;
