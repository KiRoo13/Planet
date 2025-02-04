import { Input } from "@mui/material";



function BasicInput({placeholder, handleChange}) {
   return ( 
       <Input placeholder={placeholder} onChange={handleChange}></Input>
    );
}

export default BasicInput;