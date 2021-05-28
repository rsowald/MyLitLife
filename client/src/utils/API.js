import axios from 'axios';

// https://www.googleapis.com/books/v1/volumes?q=search+terms&key=api_key
// q - intitle, inauthor, inpublisher, subject, isbn, 

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;


export default {
    getBackground: function () {
        return axios.get(`/api/unsplash/background`)
    },
    getCompleted: function (user) {
        return axios.get(`/api/books/completed/${user}`)
    },
    getCompletedLimit: function (user) {
        return axios.get(`/api/books/recent/${user}`)
    },
    getQueue: function (user) {
        return axios.get(`/api/books/queue/${user}`)
    },
    searchBooks: function (query) {
        return axios.get(`${BASEURL}${query}&key=${API_KEY}`);
    },
    queue: function (user) {
        return axios.get(`/api/books/queue/${user}`);
    },
    addToQueue: function (item, user) {
        return axios.post(`/api/books/queue/${user}`, item);
    },
    removeFromQueue: function (id, user) {
        return axios.delete(`/api/books/queue/${user}/${id}`);
    },
    completed: function (user) {
        return axios.get(`/api/books/completed/${user}`);
    },
    addToCompleted: function (item, user) {
        return axios.post(`/api/books/completed/${user}`, item);
    },
    removeFromCompleted: function (id, user) {
        return axios.delete(`/api/books/completed/${user}/${id}`);
    }

};