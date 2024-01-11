import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/posts/";
  {
    /* axios method */
  }
  useEffect(() => {
    axios.get(url).then((res) => {
      setData(res.data);
    });
  }, []);

  {
    /* fetch method */
  }
  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      {data.map((array) => {
        return (
          <>
            <p>Id: {array.id}</p>
            <p>Title: {array.title}</p>
          </>
        );
      })}
    </>
  );
};

export default App;
