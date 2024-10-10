import ReactDom from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { NavLinksProvider } from "./data/NavLinksContext.jsx";

const Layout = () => {
  return (
    <NavLinksProvider>
      <div className="bg-primaryColor h-screen font-satoshi">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </NavLinksProvider>
  );
};

// Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
    ],
  },
]);

ReactDom.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
