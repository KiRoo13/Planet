import { Outlet } from "react-router";
import { useLocation } from "react-router";
import LoaderHomePage from "../LoaderHomePage";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPhotoDays } from "../../store/slice/homePageSlice";



function Home() {
  const location = useLocation();

  const firstLoad = useSelector((state) => state.loadHomePage.data);
  const isLoading = useSelector((state) => state.loadHomePage.isLoading);
  const error = useSelector((state) => state.loadHomePage.error);

  const dispatch = useDispatch();


  useEffect(() => {
    if (Object.keys(firstLoad).length === 0) {
       dispatch(getPhotoDays('https://api.nasa.gov/planetary/apod?api_key=2zvYZtezOhSeLkCr7av3Nrv0i6M5k5hSiBLX9vOO'))
    }
  }, []);

  return (
    <div className="main" style={{ backgroundImage: `url(${firstLoad.url})`}}>
      <div className="main__mask"></div>
      <div className="z">
        {location.pathname === "/" ? (
          !isLoading ? (
            <div className="main-info">
              <div className="main-info__head">
                <h3>{firstLoad.title}</h3>
                <strong>{firstLoad.date}</strong>
              </div>
              <div className="main-info__body">
                <p>{firstLoad.explanation}</p>
              </div>
            </div>
          ) : (
            <LoaderHomePage />
          )
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
}

export default Home;
