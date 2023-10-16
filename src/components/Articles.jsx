import { useEffect, useState } from "react";

const Articles = () => {
  const [data, setData] = useState([]);

  const API__URL = "https://jsonplaceholder.typicode.com/users";
  // https://randomuser.me/api/

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <h1>All Articles API REACT</h1>
      <ul>
        {data.map((dat) => (
          <li key={dat.id}>
            <h2>{dat.name}</h2>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Articles;
