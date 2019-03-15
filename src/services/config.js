import axios from 'axios';

const service = axios.create({
  baseURL: 'http://localhost:5555',
});

export default service;
