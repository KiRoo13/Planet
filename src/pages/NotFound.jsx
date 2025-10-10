import { NavLink } from "react-router-dom";
import BasicButton from "../components/UI/BasicButton";

function NotFound() {
  return (
    <section className="section">
      <div className="conteiner">
        <div className="not-faund">
          <h1>404 - Страница не найдена</h1>
          <p>Страница, которую вы ищете, не существует.</p>
          <div>
            <NavLink to="/">
              <BasicButton text={"Вернуться на главную"} />
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
