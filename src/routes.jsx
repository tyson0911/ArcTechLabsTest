import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import MindMap from './components/MindMap';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/mindmap',
    element: <MindMap />,
  },
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}