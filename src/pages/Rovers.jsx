import { useSelector } from "react-redux";
import CardRover from "../components/Card";
import Form from "../components/Form";
import LoaderCard from '../components/LoaderCard'
import ModalWindow from "../components/ModalWindow";

function Rovers() {

  const roversData = useSelector((state)=> state.rovers.roversData)
  const isLoading = useSelector((state)=> state.rovers.isLoading)
  const error = useSelector((state)=> state.rovers.error)



  return (
    <section className="section-rovers">
      <div className="conteiner">
        <Form />
        <div className="rovers-card">
         {isLoading && <LoaderCard/>}
           {!roversData.length 
             ? <ModalWindow>Нет данных... Попробуйте изменить параметры запроса!</ModalWindow>
             : roversData?.map((rover) => <CardRover key={rover.id} rover={rover}/>)
           }
        </div>
      </div>
    </section>
  );
}

export default Rovers;
