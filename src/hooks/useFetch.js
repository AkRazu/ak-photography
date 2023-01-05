import React, { useEffect, useState } from 'react';

const useFetch = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://api.npoint.io/7f4613af08bd5240073a")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return [services, setServices];
};

export default useFetch;