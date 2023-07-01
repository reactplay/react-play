import { useEffect, useRef, useState } from 'react';

const Posts = ({ posts }) => {
  const [displayPosts, setDisplayPosts] = useState([]);
  const [lastPost, setLastPost] = useState(null);
  const [pageNo, setPageNo] = useState(0);

  const fetchMoreData = (pageNo) => {
    const tempPosts = JSON.parse(JSON.stringify(posts));
    let start = pageNo * 20;
    let end = (pageNo + 1) * 20;
    if (pageNo) setDisplayPosts((prev) => [...prev, ...tempPosts.slice(start, end)]);
    else setDisplayPosts(tempPosts.slice(start, end));
  };

  useEffect(() => {
    fetchMoreData(0);
  }, [posts]);

  useEffect(() => {
    if (pageNo) fetchMoreData(pageNo);
  }, [pageNo]);

  // observer will observe last post in viewport
  const observer = useRef(
    new IntersectionObserver((entries) => {
      const first = entries[0];
      if (first.isIntersecting) {
        setPageNo((prev) => prev + 1);
      }
    })
  );

  useEffect(() => {
    const currentElement = lastPost;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [lastPost]);

  return (
    <div className="infinite-scrolling">
      <div className="infinite-scrolling__Container">
        {displayPosts.map((post, idx) => (
          <div
            className="infinite-scrolling__Container__Post"
            key={post.id}
            ref={idx === displayPosts.length - 1 ? setLastPost : null}
          >
            <img alt={`Post No: ${idx + 1}`} src={post.url} />
            <h5>{post.title}</h5>
          </div>
        ))}
      </div>
      <div className="infinite-scrolling__count">
        <h2>Total Post Fetched: {posts.length}</h2>
        <h2>Total Post Rendered: {displayPosts.length}</h2>
      </div>
    </div>
  );
};

export default Posts;
