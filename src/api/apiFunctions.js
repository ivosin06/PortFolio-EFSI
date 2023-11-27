import axios from 'axios';

const baseURL = "http://localhost:3000/";

export const getInfoPersonal = async () => {
    try {
        const response = await axios.get(`info.json`);
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 404) {
            console.log('Resource could not be found!');
        } else {
            console.log(error.message);
        }
    }
}

export const getInfoProyects = async () => {
    try {
        const response = await axios.get(`info.json`);
        return response.data;
    } catch (error) {
        if (error.response && error.response.status === 404) {
            console.log('Resource could not be found!');
        } else {
            console.log(error.message);
        }
    }
}
