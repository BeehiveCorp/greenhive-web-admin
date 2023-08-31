import axios from 'axios';

const token = localStorage.getItem('@token');

console.log(token);

export const api = axios.create({
  baseURL: 'http://localhost:3333',
  headers: {
    Authorization: token ?? null,
  },
});
