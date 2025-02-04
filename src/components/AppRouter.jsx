import { Route, Routes } from "react-router";
import Home from "./Home/Home";
import Rovers from "../pages/Rovers";
import PlanetInfo from "../pages/PlanetInfo";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/rovers" element={<Rovers />} />
        <Route path="/planetinfo" element={<PlanetInfo />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;
