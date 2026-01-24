import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const apiData = async () => {
    if (loading) return;

    setLoading(true);
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
    );

    setData(prev => [...prev, ...response.data]);
    setLoading(false);
  };

  useEffect(() => {
    apiData();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = window.innerHeight;

      if (scrollTop + clientHeight >= scrollHeight - 5 && !loading) {
        setPage(prev => prev + 1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loading]);

  return (
    <div>
      {data.map((d,idx) => (
        <div key={idx} style={{ backgroundColor: "pink", marginBottom: "16px" }}>
          <h1>{d.title}</h1>
          <p>{d.body}</p>
        </div>
      ))}

      {loading && <h1 style={{ textAlign: "center" }}>Loading...</h1>}
    </div>
  );
};

export default App;
