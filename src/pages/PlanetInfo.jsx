import { useSelector } from "react-redux";
import { Alert, Collapse } from "@mui/material";
import LoaderCard from "../components/LoaderCard";
import Form from "../components/Form";
import CardRover from "../components/Card";
import { useEffect, useState } from "react";
import BasicButton from "../components/UI/BasicButton";

function PlanetInfo() {
  const [ open, setOpen ] = useState(true);
  const { data, isLoading, error } = useSelector((state) => state.planet);


  useEffect(()=>{
    if(isLoading) {
      setOpen(!open)
    }
  }, [isLoading])

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
      {error && (
        <Collapse in={open}>
          <Alert
            variant="outlined"
            severity="error"
            action={<BasicButton text={'Закрыть'} handleClick={() => setOpen(false)} />}
          >
            {error}
          </Alert>
        </Collapse>
      )}
      {data.items.length === 0 && (
        <Collapse in={open}>
          <Alert
            variant="outlined"
            severity="info"
            action={<BasicButton text={'Закрыть'} handleClick={() => setOpen(false)} />}
          >
            По запросу данные не найдены
          </Alert>
        </Collapse>
      )}
      <div className="planet-card">
        {isLoading && <LoaderCard />}
        {Object.keys(data).length !== 0 &&
          data.items.map((item) => (
            <CardRover key={item.data[0].nasa_id} item={item} />
          ))}
      </div>
    </>
  );
}

export default PlanetInfo;
