import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Erro ao buscar os dados");
        }
        const jsonData = await response.json();
        setData(jsonData);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, error };
}




import React from 'react';
import useFetch from './useFetch'; // Importando o custom hook


function ComponentePrincipal() {
  const { data, isLoading, error } = useFetch("https://api.example.com/data");

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <div>{/* Renderizar os dados da API */}</div>;
}
