import axios from 'axios';

const baseURL = 'http://localhost:3000/api/v1';

export const requestTicketInfo = (data) => {
  return axios.post(`${baseURL}/tickets`, data);
};

export const getPurchasedTicketInfo = (id) => {
  return axios.get(`${baseURL}/get-purchased-journey/${id}`);
};

export const purchaseTicket = (id, data) => {
  return axios.post(`${baseURL}/purchase-ticket/${id}`, data);
};

export const getTicketInfo = (id) => {
  return axios.get(`${baseURL}/get-all-tickets/${id}`);
};
