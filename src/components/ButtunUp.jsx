import BasicButton from "./UI/BasicButton";

function ButtonUp () {
   const pageUp = () => {
    document.querySelector('.main').scrollTo({ top: 0, behavior: 'smooth' })
   }

   return <div className="button-up">
      <BasicButton handleClick={pageUp} text={'Вверх'}/>
   </div>
}

export default ButtonUp