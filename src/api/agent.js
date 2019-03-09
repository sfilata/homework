import axios from 'axios';

export const fetchAgentList = data =>
  axios.get('http://localhost:3001/agents', {params: data});