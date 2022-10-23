import axios from 'axios';

const baseURL = 'http://localhost:3000';

export const requestTicketInfo = (data) => {
  return axios.post(`${baseURL}/tickets/request-ticket-info/`, data);
};

export const getPurchasedTicketInfo = (id) => {
  return axios.get(`${baseURL}/tickets/get-purchased-journey/${id}`);
};

export const purchaseTicket = (id) => {
  return axios.post(`${baseURL}/tickets/purchase-ticket/`, id);
};

export const getTicketInfo = (id) => {
  return axios.get(`${baseURL}/tickets/get-all-tickets/${id}`);
};
