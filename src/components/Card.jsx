import { useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const ExpandMore = styled((props) => {
   const { expand, ...other } = props;

   return <IconButton {...other} />;
 })(({ theme, expand }) => ({
   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
   marginLeft: 'auto',
   transition: theme.transitions.create('transform', {
     duration: theme.transitions.duration.shortest,
   }),
 }));


function CardRover ({rover}) {
  console.log(rover)

   const [expanded, setExpanded] = useState(false);

   const handleExpandClick = () => {
     setExpanded(!expanded);
   };
 
   return (
     <Card sx={{ maxWidth: 345, marginBottom: 10 }}>
       <CardHeader
         title={rover.rover.name}
         subheader={rover.rover.launch_date}
       />
       <CardMedia
         component="img"
         height="194"
         image={rover.img_src}
         alt="Paella dish"
       />
       <CardActions disableSpacing>
          Справка:
         <ExpandMore
           expand={expanded}
           onClick={handleExpandClick}
           aria-expanded={expanded}
           aria-label="show more"
         >
           <ExpandMoreIcon />
         </ExpandMore>
       </CardActions>
       <Collapse in={expanded} timeout="auto" unmountOnExit>
         <CardContent>
           <Typography paragraph>Информация о камере:</Typography>
           <Typography paragraph>
            <ul>
              <li>Сокращенное название камеры: {rover.camera.name}</li>
              <li>Полное название камеры: {rover.camera.full_name}</li>
            </ul>
           </Typography>
           <Typography paragraph>
              Информация о ровере:
           </Typography>
           <Typography>
            <ul>
              <li>Имя: {rover.rover.name}</li>
              <li>Дата посадки марсохода на Марс: {rover.rover.landing_date}</li>
              <li>Дата запуска марсохода с Земли: {rover.rover.launch_date}</li>
              <li>Статус миссии: {rover.rover.status}</li>
              <li>Самая последняя марсианская солнечная система, фотографии с которой существуют: {rover.rover.max_sol}</li>
              <li>Самая последняя дата на Земле, с которой существуют фотографии: {rover.rover.max_date}</li>
              <li>Количество фотографий, сделанных марсоходом: {rover.rover.total_photos}</li>
            </ul>
           </Typography>
         </CardContent>
       </Collapse>
     </Card>
   );
}

export default CardRover;