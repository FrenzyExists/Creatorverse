import { useState } from "react";
import Navbar from "./components/Navigator";
import {
  BrowserRouter as Router,
  useRoutes,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { NavigationInterfaceItem } from "./components/GeneralModal";

const App = () => {
  const [navigation, setNavigation] = useState<NavigationInterfaceItem[]>([
    { name: "Home", route: "/", current: true, leftSide: true },
    {name: "All Creators", route: "/user/all", current:false, leftSide: true}
  ]);

  const handleNavigation = (name: string) => {

  }

  return (
    <Router>
      <Navbar
        nav={navigation}
        handleNavigation={function (name: string): void {
          throw new Error("Function not implemented.");
        }}
      />
      <AppRoutes />
    </Router>
  );
};

export default App;
