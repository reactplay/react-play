/* eslint-disable jsx-a11y/alt-text */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const NewsCard = (props) => {
  return (
    <Card
      className="card"
      sx={{ maxWidth: 345 }}
      onClick={() => window.open(props.news.url)}
    >
      <CardMedia component="img" height="140" image={props.news.urlToImage} />
      <CardContent>
        <div style={{ fontSize: "16px", fontWeight: 600, lineHeight: 1.5 }}>
          {props.news.title}
        </div>
      </CardContent>
      <div className="footer">
        <div className="author">
          {props.news.author !== null &&
            props.news.author !== "" &&
            "- " + props.news.author}
        </div>
        <div className="published-at">
        {"published at: " + new Date(props.news.publishedAt).toLocaleString()}
        </div>
      </div>
    </Card>
  );
};

export default NewsCard;
