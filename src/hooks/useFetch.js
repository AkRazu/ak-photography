import React, { useEffect, useState } from 'react';

const useFetch = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://api.npoint.io/f1ee1e9ef3ff9c290b21")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return [services, setServices];
};

export default useFetch;