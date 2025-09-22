import { Route, Routes } from "react-router";
import Home from "./Home/Home";
import PlanetInfo from "../pages/PlanetInfo";
import NotFound from "../pages/NotFound";
import SolarSystem from "../pages/SolarSystem";


function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/solarSystem" element={<SolarSystem/>} />
        <Route path="/planetinfo" element={<PlanetInfo />} />
        <Route path="*" element={<NotFound/>}></Route>
      </Route>
    </Routes>
  );
}

export default AppRouter;
