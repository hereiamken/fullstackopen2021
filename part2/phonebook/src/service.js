import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = async () => {
  const request = axios.get(baseUrl);
  const response = await request;
  return response.data;
};

const create = async (newObj) => {
  const request = axios.post(baseUrl, newObj);
  const response = await request;
  return response.data;
};

const update = async (id, newObj) => {
  const request = axios.put(`${baseUrl}/${id}`, newObj);
  const response = await request;
  return response.data;
};

const deletePerson = async (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  const response = await request;
  return response.data;
};

// eslint-disable-next-line
export default {
  getAll,
  create,
  update,
  deletePerson,
};
