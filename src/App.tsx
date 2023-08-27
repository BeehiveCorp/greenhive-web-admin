import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import { Login, Dashboard, NewArticle, NewChapter } from '@/pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/new-article" element={<NewArticle />} />
      <Route path="/new-chapter" element={<NewChapter />} />
    </>
  )
);

const App = () => <RouterProvider router={router} />;

export default App;
