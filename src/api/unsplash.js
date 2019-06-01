import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 425339c80dfb72420e89a416402ff63850c13a0a0f95cd57a0ead242dad98a3d'
    }
})