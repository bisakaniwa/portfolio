import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { PresentationPage } from './pages/PresentationPage';
import { LoginProjects } from './pages/LoginProjects';
import { NoLoginProjects } from './pages/NoLoginProjects';

const routes = createBrowserRouter([
   { path: '/', Component: PresentationPage },
   { path: "/withLogin", Component: LoginProjects },
   { path: "/noLogin", Component: NoLoginProjects },
]);

export const PresentationRoutes = () => {
   return (
      <RouterProvider router={routes} />
   );
};