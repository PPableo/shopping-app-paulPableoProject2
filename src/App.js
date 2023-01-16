import "./App.scss";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
// Note: First time using createBrowserRouter, and Router Provider, pretty cool, learned something new; initially was use to routes/route can be considered a technical win
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import "./App.scss"
import "./styles/fonts/Mazius Display Regular.otf";
import "./styles/fonts/Gilroy-Light.otf";

// LOG: We're creating a layout that will hold NavBar and Footer and we can call the pages in between them!
function Layout() {
  return (
    <div className="app">
      <NavBar />
      {/* LOG: Outlet will represent our different pages */}
      <Outlet />
      <Footer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // LOG: We're creating a Layer - hence Layout that holds NAV / FOOTER with the children being our pages
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
    ],
  },
  // {
  //   path:"/products/:id",
  //   element:<Products />,
  // },
  // {
  //   path:"/product/:id",
  //   element:<Product />,
  // },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
