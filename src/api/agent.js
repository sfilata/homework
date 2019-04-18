import axios from 'axios';

export const fetchAgentList = data =>
  axios.get('http://localhost:3001/agents', {params: data});

export const updateAgent = (id, data) => 
  axios.put(`http://localhost:3001/agents/${id}`, data);