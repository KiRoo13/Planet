import { Outlet, useLocation } from "react-router";

function Home() {
  const { pathname } = useLocation();


  return (
    <div className="main">
      <div className="main__mask"></div>
      <div className="z">
        {pathname === "/" && (
          <div className="main__text">
            Приветствую! На данном веб-ресурсе вы ознакомитесь с обширным
            массивом уникальных данных о нашей планете и космическом
            пространстве. Я искренне надеюсь, что это познавательное путешествие
            вызовет у вас неподдельный интерес и восхищение. Пожалуйста,
            переходите на соответствующие страницы и углубляйтесь в изучение
            этого удивительного мира!
          </div>
        )}
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
