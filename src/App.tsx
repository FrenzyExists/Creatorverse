import { useState } from "react";
import Navbar from "./components/Navigator";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { NavigationInterfaceItem } from "./util";


const App = () => {
  const [navigation] = useState<NavigationInterfaceItem[]>([
    { name: "Home", route: "/", current: true, leftSide: true },
    {name: "All Creators", route: "/all-creators", current:false, leftSide: true}
  ]);

  return (
    <Router>
      <Navbar
        nav={navigation}
        handleNavigation={function (name: string): void {
          throw new Error(`Function ${name} not implemented.`);
        }}
      />
      <AppRoutes />
    </Router>
  );
};

export default App;
