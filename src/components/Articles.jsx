import React, { useEffect, useState } from "react";
import axios from "axios";
import "@fontsource-variable/lora";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  const URL =
    "https://api.nasa.gov/techtransfer/patent/?engine&api_key=F7WtrS9t2B3a2hNWC3NuEGlCVM0goueOjBDt4VYM";

  // Solo debe mostrar los 10 primeros

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        response.data.results = response.data.results.slice(0, 10);
        setArticles(response.data.results);
      })
      .catch((error) => {
        console.error("Error al obtener datos de la API:", error);
      });
  }, []);

  return (
    <div>
      <h1
        style={{
          fontFamily: "Lora Variable",
        }}
        className="text-center p-2 font-semibold text-3xl"
      >
        All Articles
      </h1>
      {articles.length != 0
        ? articles.map((article, index) => {
            return (
              <div
                className="flex flex-col items-center justify-center p-4 "
                index={index}
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
        : "No hay datos disponibles 🦕 "}
    </div>
  );
};

export default Articles;
