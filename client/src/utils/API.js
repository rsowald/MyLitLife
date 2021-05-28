import axios from 'axios';

// https://www.googleapis.com/books/v1/volumes?q=search+terms&key=api_key
// q - intitle, inauthor, inpublisher, subject, isbn, 

const bookSearchBaseURL = "https://www.googleapis.com/books/v1/volumes?q=";
const API_KEY_Search_Book = process.env.REACT_APP_GOOGLE_API_KEY;

const GlossaryBaseURL = "https://od-api.oxforddictionaries.com/api/v2/entries/en-us/expand";
const APP_ID_Glossary = "ca8c5d3b"
const API_KEY_Glossary = "d0a0ba1b62842eb7b002340c1b1b7723"

const APP_KEY_Merriam_Dictionary = "f98cea37-bf71-4164-afc9-2bbaf979b4c3"
const APP_KEY_Merriam_Thesaurus = "9b0a6644-633b-4299-bc65-c30bb8137369"
const merriam_Collegiate_Dictionary_Base_URL = 'https://www.dictionaryapi.com/api/v3/references/collegiate/json/';
const merriam_Thesaurus_Dictionary_Base_URL = 'https://www.dictionaryapi.com/api/v3/references/thesaurus/json/';

export default {
    getBackground: function () {
        return axios.get(`/api/unsplash/background`)
    },
    searchBooks: function (query) {
        return axios.get(`${bookSearchBaseURL}${query}&key=${API_KEY_Search_Book}`);
    },
    searchInMerriamDictionary: function (query) {
        // console.log(query);
        // console.log(`${merriam_Dictionary_Base_URL}${query}?key=${APP_KEY_Merriam_Dictionary}`);
        return axios.get(`${merriam_Collegiate_Dictionary_Base_URL}${query}?key=${APP_KEY_Merriam_Dictionary}`);
    },
    searchInMerriamDictionaryy: function (query) {
        // console.log(query);
        // console.log(`${merriam_Dictionary_Base_URL}${query}?key=${APP_KEY_Merriam_Dictionary}`);
        return axios.get(`${merriam_Thesaurus_Dictionary_Base_URL}${query}?key=${APP_KEY_Merriam_Thesaurus}`);
    },
    // searchInDictionary: function (query) {
    //     return axios(
    //         {
    //             url: GlossaryBaseURL,
    //             method: 'get',
    //             headers: {
    //                 "app_id": APP_ID_Glossary,
    //                 "app_key": API_KEY_Glossary
    //             }
    //         });
    // },
    getCompleted: function () {
        return axios.get(`/api/books/completed`)
    },
    getCompletedLimit: function () {
        return axios.get(`/api/books/recent`)
    },
    getQueue: function () {
        return axios.get(`/api/books/queue`)
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