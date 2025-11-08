import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/pages/Layout";
import GameDetailPage from "./components/pages/GameDetailPage";
import HomePage from "./components/pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <h1>Oops! An error occurred.</h1>,
    children: [
      { index: true, element: <HomePage /> },
      { path: "games/:id", element: <GameDetailPage /> },
    ],
  },
]);

export default router;
