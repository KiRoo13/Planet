import { Button } from "@mui/material";

function BasicButton({text, handleClick}) {
   return ( <Button onClick={handleClick}>{text}</Button> );
}

export default BasicButton;