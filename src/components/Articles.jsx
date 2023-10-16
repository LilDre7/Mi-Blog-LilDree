import { useEffect, useState } from "react";
import axios from "axios";
import "@fontsource-variable/lora";

const Articles = () => {
  const [isArticles, setArticles] = useState([]);

  const API_BASE_URL = "http://api.mediastack.com/v1/news";
  const API_KEY = "7114a5ea9dea4441bf0cbd532d82c82e";

  useEffect(() => {
    axios.defaults.baseURL = API_BASE_URL;
    axios.defaults.params = { access_key: API_KEY };

    axios
      .get(API_BASE_URL, {
        params: {
          access_key: API_KEY,
        },
      })
      .then((res) => setArticles(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1
        style={{
          fontFamily: "Lora Variable",
        }}
        className="text-center p-2 font-semibold text-3xl "
      >
        All Articles
      </h1>
      <ul>
        {isArticles.map((article) => (
          <li> {article.title} </li>
        ))}
      </ul>
    </>
  );
};

export default Articles;
