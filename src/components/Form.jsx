import { useState } from "react";
import { PLANET_NAME, TYPE_DATA } from "../utils/Constans/namePlanet";
import { useDispatch } from "react-redux";
import { getInformationPlanet } from "../store/slice/planetSlice";
import BasicSelect from "./UI/BasicSelect";
import BasicButton from "./UI/BasicButton";

function Form() {
  const [planetName, setPlanetName,] = useState("Earth");
  const [typeData, setTypeData] = useState("image");



  const dispatch = useDispatch();

  return (
    <div className="form">
      <div className="form-left">
        <BasicSelect
          options={PLANET_NAME}
          title={"Название планеты:"}
          handleValue={(e) => {setPlanetName(e.target.value)}}
          value={planetName}
        />
        <BasicSelect
          options={TYPE_DATA}
          title={"Тип данных:"}
          handleValue={(e) => {setTypeData(e.target.value)}}
          value={typeData}
        />
      </div>
      <div>
        <BasicButton 
        text={'Send'}
        handleClick={() =>
            dispatch(
              getInformationPlanet(
                `https://images-api.nasa.gov/search?q=${planetName}&media_type=${typeData}`
              )
            )}/>
      </div>
    </div>
  );
}

export default Form;
