import { useMemo, useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDispatch } from "react-redux";
import { getPlanetVideoOrAudio } from "../store/slice/planetSlice";
import BasicButton from "./UI/BasicButton";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;

  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function CardRover({ item }) {
  const [expanded, setExpanded] = useState(false);

  const dispatch = useDispatch();

  const info = item.data[0];

  const type = useMemo(() => {

    switch (info.media_type) {
      case "image":
        return "image";
      case "video":
        return "video";
      case "audio":
        return "audio";
      default:
        return "image";
    }
  }, [info]);

  let img = null 

  if (type !== 'audio') {
    img = item.links[0];
  }



  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const vieVideo = (href, type) => {
    dispatch(getPlanetVideoOrAudio({href, type}));
  };

  return (
    <Card sx={{ maxWidth: 345, marginBottom: 10 }}>
      <CardHeader
        title={info.title}
        subheader={new Date(info.date_created).toDateString()}
      />
     {type !== 'audio' &&  <CardMedia component="img" height="194" image={img.href} alt={img.rel} />}
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
      <CardActions>
        {type === "video" && (
          <BasicButton
            text={"Cмотреть"}
            handleClick={() => vieVideo(item.href, type)}
          />
        )}
         {type === "audio" && (
          <BasicButton
            text={"Cлушать"}
            handleClick={() => vieVideo(item.href, type)}
          />
        )}
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{info.description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default CardRover;
