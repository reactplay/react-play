import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';

const Article = () => {
  const [article, setArticle] = useState({});
  const [tags, setTags] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await axios.get(`https://dev.to/api/articles/${id}`);
        setArticle(res.data);
        setTags(res.data.tags);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchArticles();

    return () => {
      setArticle(null);
    };
  }, [id]);

  if (error) {
    return <>{error}</>;
  }

  return (
    <div className="px-5 py-8">
      {article ? (
        <div className="container md:w-[65%] mx-auto">
          <div>
            <img alt={article.title} src={article.cover_image} />
          </div>
          <h2 className="py-5 text-4xl font-bold">{article.title}</h2>
          <div className="flex">
            {tags &&
              tags.map((tag, i) => (
                <div className="mr-4 rounded-sm px-2 py-1 hover:bg-blue-100" key={i}>
                  #{tag}
                </div>
              ))}
          </div>

          <div
            className="mt-10 devBlog-article"
            dangerouslySetInnerHTML={{ __html: article.body_html }}
          />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Article;
