import axios from 'axios';

export function createApiInstance() {
  const token = localStorage.getItem('@token');

  const headers: { Authorization?: string } = {};

  if (token) {
    headers.Authorization = token;
  }

  return axios.create({
    baseURL: 'http://localhost:3333',
    headers,
  });
}

export const api = createApiInstance();
