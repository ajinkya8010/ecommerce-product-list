
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ProductPage from "./pages/ProductPage/ProductPage";
import CartPage from "./pages/CartPage/CartPage";
import { Layout } from "./pages/layout/layout";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/product/:id",
          element: <ProductPage />
        },
        {
          path: "/cart",
          element: <CartPage />
        }
      ]
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
