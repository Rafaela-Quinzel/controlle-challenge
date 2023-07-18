import axios from 'axios';

import { BASE_URL, axiosConfig } from '../config/requestConfig';

console.log(BASE_URL)

export const getFilterResults = async (setData: any) => {
    await axios.get(`${BASE_URL}/fakeData`, axiosConfig)
        .then(response => {
            setData(response.data);
        }).catch(error => {
            console.log(error.message);
        });
}