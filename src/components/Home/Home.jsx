// https://api.nasa.gov/planetary/apod?api_key=2zvYZtezOhSeLkCr7av3Nrv0i6M5k5hSiBLX9vOO

import { Outlet, useLocation} from "react-router";


function Home() {

  const { pathname } = useLocation()
  

  // const data = useSelector((state) => state.loadHomePage.data);
  // const isLoading = useSelector((state) => state.loadHomePage.isLoading);
  // const error = useSelector((state) => state.loadHomePage.error);

  // const dispatch = useDispatch();

  // console.log(data, dispatch);

  // useEffect(() => {
  //   console.log("effectHome");
  //   dispatch(
  //     getPhotoDays(
  //       "https://images-api.nasa.gov/search?q=Jupiter&media_type=image"
  //     )
  //   );
  // }, []);

  return (
    <div className="main">
      <div className="main__mask"></div>
      <div className="z">
        {pathname === '/' && <div className="main__text">Приветствую! На данном веб-ресурсе вы ознакомитесь с обширным массивом уникальных данных о нашей планете и космическом пространстве. Я искренне надеюсь, что это познавательное путешествие вызовет у вас неподдельный интерес и восхищение. Пожалуйста, переходите на соответствующие страницы и углубляйтесь в изучение этого удивительного мира!</div>}
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
