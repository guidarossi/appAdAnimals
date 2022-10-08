import axios  from 'axios'


   const api =  axios.create({
    baseURL: 'https://619e80d71ac52a0017ba43ea.mockapi.io/api/v1',
   }

);

// console.log(api)

export default api