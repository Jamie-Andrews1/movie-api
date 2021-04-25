import axios from 'axios';

export default axios.create({
  baseURL: 'http://www.omdbapi.com', 
  params: {
    apikey:'e2297cad',
  }
});
