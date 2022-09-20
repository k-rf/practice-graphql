import { RouteObject, useRoutes, Navigate } from "react-router-dom";

import { PostRoute } from "~/features/post";

export const AppRouter = () => {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <PostRoute />,
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ];

  const element = useRoutes(routes);

  return <>{element}</>;
};
