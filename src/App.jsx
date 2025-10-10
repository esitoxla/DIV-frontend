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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import { PrivateRoute, PublicRoute } from "./Helper/ProtectRoutes";
import UpdateProfile from "./pages/UpdateProfile";
import ChangePassword from "./pages/ChangePassword";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <PublicRoute>
          <RootLayout />
        </PublicRoute>
      ),
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
      element: (
        <PrivateRoute>
          <VendorLayout />
        </PrivateRoute>
      ),
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
        {
          path: "update",
          Component: UpdateProfile,
        },
        {
          path: "changePass",
          Component: ChangePassword,
        },
      ],
    },
    {
      path: "auth",
      element: (
        <PublicRoute>
          <AuthLayout />
        </PublicRoute>
      ),
      children: [
        {
          path: "login",
          Component: SignIn,
        },
        {
          path: "signup",
          Component: SignUp,
        },
        {
          path: "forgot-password",
          Component: ForgotPassword,
        },
      ],
    },
    {
      path: "/resetPassword/:resetToken",
      Component: ResetPassword,
    },
  ]);

  //
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
