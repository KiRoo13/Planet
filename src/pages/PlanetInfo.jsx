import { useSelector } from "react-redux";
import LoaderCard from "../components/LoaderCard";
import Form from "../components/Form";
import CardRover from "../components/Card";

function PlanetInfo() {
  const { data } = useSelector((state) => state.planet);
  const { isLoading } = useSelector((state) => state.planet);
  const { error } = useSelector((state) => state.planet);
  console.log(data);

  return (
    <>
      <Form />
      {Object.keys(data).length === 0 && (
        <div className="planet-info-text">
          На данной странице представлены визуальные материалы, включающие
          изображения и видеоматериалы, иллюстрирующие различные аспекты планет.
          Для того чтобы ознакомиться с интересующей вас планетой,
          воспользуйтесь предложенным списком, который охватывает широкий спектр
          небесных тел.
        </div>
      )}
      <div className="planet-card">
        {isLoading && <LoaderCard/>}
        {Object.keys(data).length !== 0 &&
          data.items.map((item) => (
            <CardRover key={item.data[0].nasa_id} item={item} />
          ))}
      </div>
    </>
  );
}

export default PlanetInfo;
