import axios from 'axios';

// https://www.googleapis.com/books/v1/volumes?q=search+terms&key=api_key
// q - intitle, inauthor, inpublisher, subject, isbn, 

const bookSearchBaseURL = "https://www.googleapis.com/books/v1/volumes?q=";
const API_KEY_Search_Book = process.env.REACT_APP_GOOGLE_API_KEY;

const REACT_APP_KEY_Merriam_Dictionary = process.env.REACT_APP_KEY_MERRIAM_WEBSTER;
const merriam_Collegiate_Dictionary_Base_URL = 'https://www.dictionaryapi.com/api/v3/references/collegiate/json/';

const APP_KEY_NYT_Dictionary = process.env.REACT_APP_NYT_API_KEY;
const NYT_Category_Base_URL = "https://api.nytimes.com/svc/books/v3/lists/current/hardcover";
const NYT_Else_Base_URL = "https://api.nytimes.com/svc/books/v3/lists/current/";
const NYT_All_Time_Base_URL = "https://api.nytimes.com/svc/books/v3/lists/best-sellers/history";

export default {
    getBackground: function (width) {
        return axios.get(`/api/unsplash/background/${width}`);
    },
    searchBooks: async function (query) {
        const res = await axios.get(`${bookSearchBaseURL}${query}&key=${API_KEY_Search_Book}`);
        if (res.status === 200 && res.data.totalItems > 0) {
            //some book data did not have authors. We prefer not to show these results at all.
            res.data.items = res.data.items.filter(b => b.volumeInfo.authors);
        }
        return res;
    },
    searchInMerriamDictionary: function (query) {
        return axios.get(`${merriam_Collegiate_Dictionary_Base_URL}${query}?key=${REACT_APP_KEY_Merriam_Dictionary}`);
    },
    searchNYTByCategory: function (category) {
        return axios.get(`${NYT_Category_Base_URL}-${category}.json?api-key=${APP_KEY_NYT_Dictionary}`);
    },
    searchNYTBestAllTime: function (category) {
        return axios.get(`${NYT_All_Time_Base_URL}.json?api-key=${APP_KEY_NYT_Dictionary}`);
    },
    searchNYTByElse: function (query) {
        return axios.get(`${NYT_Else_Base_URL}${query}.json?api-key=${APP_KEY_NYT_Dictionary}`);
    },
    getCompleted: function (userId) {
        return axios.get(`/api/books/completed/${userId}`);
    },
    getCompletedLimit: function (userId) {
        return axios.get(`/api/books/recent/${userId}`);
    },
    updateCompletedBook: function (book, userId) {
        return axios.put(`/api/books/completed/${userId}/${book.id}`, book);
    },
    addToCompleted: function (book, userId) {
        return axios.post(`/api/books/completed/${userId}`, book);
    },
    removeFromCompleted: function (id, userId) {
        return axios.delete(`/api/books/completed/${userId}/${id}`);
    },
    getCompletedBook: function (id, userId) {
        return axios.get(`/api/books/completed/${userId}/${id}`);
    },
    getQueue: function (userId) {
        return axios.get(`/api/books/queue/${userId}`);
    },
    addToQueue: function (book, userId) {
        return axios.post(`/api/books/queue/${userId}`, book);
    },
    removeFromQueue: function (id, userId) {
        return axios.delete(`/api/books/queue/${userId}/${id}`);
    },
    updateQueuedBook: function (book, userId) {
        return axios.put(`/api/books/queue/${userId}/${book.id}`, book);
    },
    getQueuedBook: function (id, userId) {
        return axios.get(`/api/books/queue/${userId}/${id}`);
    },
    getUser: function (userId) {
        return axios.get(`/api/user/${userId}`);
    },
    upsertUser: function (user) {
        return axios.post(`/api/user/${user.userId}`, user);
    }
};
