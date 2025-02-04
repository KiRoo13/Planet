import { useEffect, useState } from "react"
import { getData } from "../requsts/getData"



export const useData =  (url) => {
   const [userData, setUserData] = useState([]);
   const [load, setLoad] = useState(false)
   const [erorr, setErorr] = useState(null)
   useEffect(() => {
     setLoad(true)
     getData(url)
       .then((data) => {
         setUserData(data)
         setLoad(false)
      })
       .catch((e) => setErorr(e));
   }, [url]);
   return [userData, load, erorr];
}