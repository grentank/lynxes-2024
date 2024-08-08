import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/pages/Main';
import Favorites from './components/pages/Favorites';
import Layout from './components/ui/Layout';

function App(): JSX.Element {
  // const [value, setValue] = useState('');
  // // const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void =>
  // //   setValue(e.target.value);
  // const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) =>
  //   setValue(e.target.value);
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Main />,
        },
        {
          path: '/favs',
          element: <Favorites />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
