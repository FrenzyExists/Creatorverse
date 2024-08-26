import React from "react";
import Home from "../pages/Home";
import ViewCreator from "../pages/ViewCreator";
import ShowAllCreators from "../pages/ShowAllCreators";
import EditCreator from "../pages/EditCreator";
import AddCreator from "../pages/AddCreator";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/user/:id", element: <ViewCreator /> },
  { path: "user/:id/edit", element: <EditCreator /> },
  { path: "/user/all", element: <ShowAllCreators /> },
  { path: "/new-creator", element: <AddCreator /> },
];

export default routes;
