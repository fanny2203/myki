import axios from 'axios';
import { useState, useEffect } from 'react';

const useAxios = (url, method = 'GET', body = null) => {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const x_api_key = localStorage.getItem('x-api-key')
  const token = x_api_key || "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91c2VyIjoiVXNlci8xNzI5IiwidGltZXN0YW1wIjoxNjcyNzYyMjY3fQ.l60-VK2Oxl4Oen2OsDIssFuldD1XkC2Bgddnhr4B8-A"
  const baseUrl = process.env.REACT_APP_BACKEND_URL_API;
  const fullUrl = `${baseUrl}${url}`

  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'x-api-key': token,
  };

  useEffect(() => {
    fetchData();
  }, [url, method]); // eslint-disable-line

  const fetchData = async () => {
    try {
      const response = await axios({
        data: JSON.stringify(body),
        method,
        headers,
        url:fullUrl,
      });
      setData(response.data);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

   return { data, error, loading };

};

export default useAxios;