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
import Profile from "./pages/Profile";
import QrCodeModal from "./pages/QrCodeModal";
import QrCodeLayout from "./Layouts/QrCodeLayout";
import Settings from "./pages/Settings";

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
          Component: QrCodeLayout,
          children: [
            {
              index: true,
              Component: QrCodesPage,
            },
            {
              path: "create",
              Component: QrCodeModal,
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
        {
          path: "profile",
          Component: Profile,
        },
        {
          path: "settings",
          Component: Settings,
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
}

export default App;
