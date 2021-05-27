import axios from 'axios';

// https://www.googleapis.com/books/v1/volumes?q=search+terms&key=api_key
// q - intitle, inauthor, inpublisher, subject, isbn, 

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;


export default {
    getBackground: function () {
        return axios.get(`/api/unsplash/background`)
    },
    getCompleted: function () {
        return axios.get(`/api/books/completed`)
    },
    getCompletedLimit: function () {
        return axios.get(`/api/books/recent`)
    },
    getQueue: function () {
        return axios.get(`/api/books/queue`)
    },
    searchBooks: function (query) {
        return axios.get(`${BASEURL}${query}&key=${API_KEY}`);
    },
    queue: function () {
        return axios.get("/api/books/queue");
    },
    addToQueue: function (item) {
        return axios.post("/api/books/queue", item);
    },
    removeFromQueue: function (item) {
        return axios.delete("/api/books/queue/" + item.id);
    },
    completed: function () {
        return axios.get("/api/books/completed");
    },
    addToCompleted: function (item) {
        return axios.post("/api/books/completed", item);
    },
    removeFromCompleted: function (item) {
        return axios.delete("/api/books/completed/" + item.id);
    },

};