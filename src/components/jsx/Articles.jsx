import { useEffect, useState } from "react";
import axios from "axios";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  const API_URL = "https://api.nasa.gov/techtransfer/patent/?engine";

  const API_KEY = "F7WtrS9t2B3a2hNWC3NuEGlCVM0goueOjBDt4VYM";

  const URL = `${API_URL}&api_key=${API_KEY}`;

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        response.data.results = response.data.results.slice(0, 8);
        setArticles(response.data.results);
      })
      .catch((error) => {
        console.error("Error al obtener datos de la API:", error);
      });
  }, []);

  return (
    <div>
      {articles.length != 0
        ? articles.map((article, index) => {
            return (
              <div
                className="flex flex-col items-center justify-center p-4 "
                key={index}
              >
                <a article={article} href="/Documentacion/">
                  <img
                    className=" w-[300px] h-[220px] rounded-lg"
                    src={article[10]}
                    alt=""
                  />
                </a>
                <h1 className="font-semibold text-base tracking-wides uppercase pt-2 ">
                  {article[5]}
                </h1>
              </div>
            );
          })
        : "No hay datos disponibles 🦕"}
    </div>
  );
};

export default Articles;
