/* eslint-disable jsx-a11y/alt-text */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const NewsCard = (props) => {

  return (
    <Card className="card" sx={{ maxWidth: 345 }}  onClick={() => window.open(props.news.url)} >
      <CardMedia component="img" height="140" image={props.news.urlToImage} />
      <CardContent>
        <Typography variant="body2" component="div">
          {props.news.title}
        </Typography>
      </CardContent>
      <div className="author">
        <Typography variant="caption" component="div">
          {props.news.author !== null && props.news.author !== "" && "- " + props.news.author}
        </Typography>
        <Typography variant="caption" component="div">
          {"published at: " + new Date(props.news.publishedAt).toLocaleString()}
        </Typography>
      </div>
    </Card>
  );
};

export default NewsCard;
