import { createBrowserRouter } from 'react-router-dom';

import Home from './pages/home.jsx'
import Layout from './layout.jsx';
import NotFound from './pages/404.jsx';
import About from './pages/about.jsx';

const router = createBrowserRouter([
  {
    path: '/', 
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {index: true, element: <Home />},
      {path: 'about', element: <About />},
    ]
  },
])
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>

  )
}

export default App
