import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import UsersListPage from "../pages/UsersListPage";
import UsersDetailPage from "../pages/UsersDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/users",
    element: <UsersListPage />,
  },
  {
    path: "/users/:id",
    element: <UsersDetailPage />,
  },
]);

export default router