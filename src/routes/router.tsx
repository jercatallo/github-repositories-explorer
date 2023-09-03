import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import User from '../pages/RepositoryExplorerPage';
import ErrorBoundary from "../components/ErrorBoundary";


const elementGetter: React.FC<JSX.Element> = Element => <ErrorBoundary>{Element}</ErrorBoundary>

const router = createBrowserRouter([
  {
    path: "/",
    element: elementGetter(<User></User>)
  },
]);

const AppRoutes = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default AppRoutes;