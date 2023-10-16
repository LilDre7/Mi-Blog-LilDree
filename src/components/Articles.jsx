import { useEffect, useState } from "react";
import axios from "axios";

const Articles = () => {
  const API_KEY = "fec174a5ef756ca94f1f721a54d28fbf";
  const API_URL_BASE = "http://api.mediastack.com/v1/news";

  const [articles, setArticles] = useState([]);

  const allArticles = async () => {
    try {
      const res = await axios.get(API_URL_BASE, {
        params: {
          access_key: API_KEY,
          sources: "cnn,bbc",
          categories: "business,sports",
          countries: "us,au",
          languages: "en,-de",
          keywords: "virus,-corona",
          sort: "published_desc",
          offset: 0,
          limit: 100,
        },
      });
      setArticles(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    allArticles();
  }, []);

  return (
    <>
      <h1>All Articles</h1>
      {articles.map((article, index) => (
        <div key={index}>
          <h2>{article.title}</h2>
          <p>{article.description}</p>
        </div>
      ))}
    </>
  );
};

export default Articles;
