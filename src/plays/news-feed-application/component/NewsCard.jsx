import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const NewsCard = ({ news }) => {
  return (
    <Card className="card" sx={{ maxWidth: 345 }} onClick={() => window.open(news.url)}>
      <CardMedia component="img" height="140" image={news.urlToImage} />
      <CardContent>
        <div style={{ fontSize: '16px', fontWeight: 600, lineHeight: 1.5 }}>{news.title}</div>
      </CardContent>
      <div className="footer">
        <div className="author">
          {news.author !== null && news.author !== '' && '- ' + news.author}
        </div>
        <div className="published-at">
          {'published at: ' + new Date(news.publishedAt).toLocaleString()}
        </div>
      </div>
    </Card>
  );
};

export default NewsCard;
