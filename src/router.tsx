import { Navigate, createBrowserRouter } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import DashboardPage from './pages/dashboard/DashboardPage';
import ButtonPage from './pages/button/ButtonPage';
import TreePage from './pages/tree/TreePage';
import NavMenuPage from './pages/navMenu/NavMenuPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      {
        path: '/',
        element: <DashboardPage />,
      },
      {
        path: 'button',
        element: <ButtonPage />,
      },
      {
        path: 'navMenu',
        element: <NavMenuPage />,
      },
      {
        path: 'navMenu/2',
        element: <NavMenuPage />,
      },
      {
        path: 'tree',
        element: <TreePage />,
      },
      {
        path: 'tree/2',
        element: <TreePage />,
      },
      {
        path: 'tree/x-1',
        element: <TreePage />,
      },
      {
        path: 'tree/x-2',
        element: <TreePage />,
      },
    ],
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
]);

export default router;
