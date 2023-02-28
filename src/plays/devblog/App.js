import './dracula.css';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

import 'highlight.js/styles/github.css';
import hljs from 'highlight.js';

import Header from './components/Header';
import Home from './Pages/Home';
import Article from './Pages/Article';

function App() {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const articles = await axios.get('https://dev.to/api/articles');
        setArticles(articles.data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchArticles();

    hljs.highlightAll();
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route element={<Home articles={articles} error={error} />} path="/devblog" />
        <Route element={<Article />} path="/devblog/article/:id" />
      </Routes>
    </div>
  );
}

export default App;
