import axios from 'axios';

// https://www.googleapis.com/books/v1/volumes?q=search+terms&key=api_key
// q - intitle, inauthor, inpublisher, subject, isbn, 



const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";

// const API_KEY = process.env.API_KEY;
const API_KEY = "AIzaSyD941-spNv5FIwmDGKp71VhEVUEWCU4Fi8"

export default {
    searchBooks: function (query) {
        return axios.get(`${BASEURL}${query}&key=${API_KEY}`);
    },

};