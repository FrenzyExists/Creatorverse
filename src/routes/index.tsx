
import Home from "../pages/Home";
import ShowAllCreators from "../pages/ShowAllCreators";
import AddCreator from "../pages/AddCreator";
import ViewCreator from "../pages/ViewAndEditCreator";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/creator/:id", element: <ViewCreator /> },
  { path: "/all-creators", element: <ShowAllCreators /> },
  { path: "/new-creator", element: <AddCreator /> },
];

export default routes;
