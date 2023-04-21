import axios from 'axios';

const API_URL = 'https://api.punkapi.com/v2/';

export default {
  getBeers() {
    return axios.get(API_URL + 'beers');
  },
  getBeerById(id) {
    return axios.get(API_URL + `beers/${id}`);
  },
  getBeersByFood(food) {
    return axios.get(API_URL + `beers?food=${food}`);
  }
};