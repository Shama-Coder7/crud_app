import axios from 'axios';

const url = 'http://localhost:3003/data';

export const getUsers = async (id) => {
  id = id || '';
  return await axios.get(`${url}/${id}`);
};

export const addUser = async (data) => {
  return await axios.post(url, data);
};

export const deleteUser = async (id) => {
  return await axios.delete(`${url}/${id}`);
};

export const editUser = async (id, data) => {
  return await axios.put(`${url}/${id}`, data);
};

export const viewUser = async (id) => {
  return await axios.put(`${url}/${id}`);
};
