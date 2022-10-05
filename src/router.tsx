import { createBrowserRouter } from 'react-router-dom';
import { Program } from 'pages';
import App from 'App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: 'program',
    element: <Program />,
  },
]);

export default router;
