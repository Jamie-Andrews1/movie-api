import axios from 'axios';
require('dotenv').config({path: '/.env'});

export default axios.create({
  baseURL: process.env.REACT_APP_URL,
  params: {
    apikey: process.env.REACT_APP_API_KEY
  }
})
