import axios from "axios";

const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZF91c2VyIjoiVXNlci8xNzI5IiwidGltZXN0YW1wIjoxNjcyNzYyMjY3fQ.l60-VK2Oxl4Oen2OsDIssFuldD1XkC2Bgddnhr4B8-A";

export const getTags = async () => {
  const result = await axios.get(
    `${process.env.REACT_APP_BACKEND_URL_API}tags/get`,
    {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": token,
      },
    }
  );
  return result;
};

export const getConnections = async () => {
  const result = await axios.post(
    `${process.env.REACT_APP_BACKEND_URL_API}connector/list`,
    {
      project_id: "Project/79133",
    },
    {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": token,
      },
    }
  );
  return result;
};
