import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import App from '../App';
import Home from '../pages/Home';
import About from '../pages/About';
import Accomodation from '../pages/Accomodation';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/accomodation/:id',
        element: <Accomodation />
      }
    ]
  },
]);

export default Router;
