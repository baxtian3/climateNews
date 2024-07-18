import React, { useEffect, useState } from 'react';
import api from '../services/api';

const NewsList = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await api.get('/news');
      setNews(response.data);
    };

    fetchNews();
  }, []);

  return (
    <div>
      <h1>Climate News</h1>
      <ul>
        {news.map(article => (
          <li key={article._id}>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsList;
