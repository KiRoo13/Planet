import { useState } from "react";
import { ROVERS, CAMERA } from "../utils/Constans/selectRovers";
import { useDispatch } from "react-redux";
import { getRoversPhoto } from "../store/slice/roversSlice";
import BasicSelect from "./UI/BasicSelect";
import BasicInput from "./UI/BasicInput";
import BasicButton from "./UI/BasicButton";

function Form() {
  const [selectRover, setSelectRover] = useState("curiosity");
  const [selectCamera, setSelectCamera] = useState("");
  const [sol, setSol] = useState(0);



  //let URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/${selectRover}/photos?sol=${sol}&camera=${selectCamera}&api_key=2zvYZtezOhSeLkCr7av3Nrv0i6M5k5hSiBLX9vOO`

  // let [data, load, erorr] = useData(url);

  // console.log(process.env.REACT_APP_DEMO_KEY_NASA);

  const dispatch = useDispatch();

  return (
    <div className="form">
      <div className="form-left">
        <BasicSelect
          options={ROVERS}
          title={"Выбери ровер:"}
          handleValue={(e) => {setSelectRover(e.target.value)}}
          value={selectRover}
        />
        <BasicSelect
          options={CAMERA[selectRover]}
          title={"Выбери камеру:"}
          handleValue={(e) => {setSelectCamera(e.target.value)}}
          value={selectCamera}
        />
        <div>
          <BasicInput
            placeholder={"sol"}
            handleChange={(e) => setSol(e.target.value)}
          />
        </div>
      </div>
      <div>
        <BasicButton 
        text={'Send'}
        handleClick={() =>
            dispatch(
              getRoversPhoto(
                `https://api.nasa.gov/mars-photos/api/v1/rovers/${selectRover}/photos?sol=${sol}&camera=${selectCamera}&api_key=2zvYZtezOhSeLkCr7av3Nrv0i6M5k5hSiBLX9vOO`
              )
            )}/>
      </div>
    </div>
  );
}

export default Form;
