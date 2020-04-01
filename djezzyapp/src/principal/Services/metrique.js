import axios from 'axios'
const MetriqueUrl = "http://localhost:8000/metrique";
const baseUrl= '';

export function addMetrique(nom,type,explication) {

    const myApi = axios.create({
        baseURL: baseUrl,
        withCredentials: true,
    });

    const data = {
        nom: nom,
        type: type,
        explication: explication
    };


        return (
             myApi.post('/metrique/', data)
        );
}


export function getMetrique() {

    const myApi = axios.create({
        baseURL: baseUrl,
        withCredentials: true,
    });

    return (
        myApi.get('/metrique/')
    );
}