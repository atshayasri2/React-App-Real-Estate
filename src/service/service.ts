import axios from 'axios';

const api = axios.create({
    //baseURL: `https://jsonplaceholder.typicode.com/todos/`,
    baseURL: `https://fakestoreapi.com/products/`,
});
export const GET_Property = (id: number) => {
    return api.get(`/${id}`)
}

