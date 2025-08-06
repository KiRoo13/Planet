import { useEffect, useMemo, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { getPlanetVideo } from "../store/slice/planetSlice";
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
  // const dispatch = useDispatch()
  // const video = useSelector((state)=> state.planet)
  const info = item.data[0];
  const img = item.links[0];

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
  console.log(type);

  // console.log(info);
  // console.log(img);
  // console.log(item)
  // console.log(video.video[0])

  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345, marginBottom: 10 }}>
      <CardHeader
        title={info.title}
        subheader={new Date(info.date_created).toDateString()}
      />
      <CardMedia component="img" height="194" image={img.href} alt={img.rel} />
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
      <CardActions>{type === "video" && <BasicButton text={'Cмотреть'}/>}</CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{info.description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default CardRover;
