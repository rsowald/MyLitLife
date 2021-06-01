import axios from 'axios';

// https://www.googleapis.com/books/v1/volumes?q=search+terms&key=api_key
// q - intitle, inauthor, inpublisher, subject, isbn, 

const bookSearchBaseURL = "https://www.googleapis.com/books/v1/volumes?q=";
const API_KEY_Search_Book = process.env.REACT_APP_GOOGLE_API_KEY;


const APP_KEY_Merriam_Dictionary = process.env.REACT_APP_MERRIAM_API_KEY;
const merriam_Collegiate_Dictionary_Base_URL = 'https://www.dictionaryapi.com/api/v3/references/collegiate/json/';


const APP_KEY_NYT_Dictionary = process.env.REACT_APP_NYT_API_KEY;
const NYT_Base_URL = "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key="



export default {
    getBackground: function () {
        return axios.get(`/api/unsplash/background`)
    },
    searchBooks: function (query) {
        return axios.get(`${bookSearchBaseURL}${query}&key=${API_KEY_Search_Book}`);
    },
    searchInMerriamDictionary: function (query) {
        return axios.get(`${merriam_Collegiate_Dictionary_Base_URL}${query}?key=${APP_KEY_Merriam_Dictionary}`);
    },
    searchNYTBestSellers: function () {
        return axios.get(`${NYT_Base_URL}${APP_KEY_NYT_Dictionary}`);
    },
    getCompleted: function (user) {
        return axios.get(`/api/books/completed/${user}`);
    },
    getCompletedLimit: function (user) {
        return axios.get(`/api/books/recent/${user}`)
    },
    getQueue: function (user) {
        return axios.get(`/api/books/queue/${user}`)
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