const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/MyLitLife");

const bookSeed = [
    {
      "title": "The Fellowship of the Ring",
      "pageCount": 531,
      "isComplete": true,
      "id": "_FjrugAACAAJ",
      "volumeInfo": {
        "title": "The Fellowship of the Ring",
        "subtitle": "Being the First Part of the Lord of the Rings",
        "authors": [
          "John Ronald Reuel Tolkien"
        ],
        "publisher": "HarperCollins Publishers",
        "publishedDate": "2012",
        "description": "Continuing the story begun in The Hobbit, this is the first part of Tolkien s epic masterpiece, The Lord of the Rings, featuring an exclusive cover image from the film, the definitive text, and a detailed map of Middle-earth. Sauron, the Dark Lord, has gathered to him all the Rings of Power the means by which he intends to rule Middle-earth. All he lacks in his plans for dominion is the One Ring the ring that rules them all which has fallen into the hands of the hobbit, Bilbo Baggins. In a sleepy village in the Shire, young Frodo Baggins finds himself faced with an immense task, as his elderly cousin Bilbo entrusts the Ring to his care. Frodo must leave his home and make a perilous journey across Middle-earth to the Cracks of Doom, there to destroy the Ring and foil the Dark Lord in his evil purpose. To celebrate the release of the first of Peter Jackson s two-part film adaptation of The Hobbit, THE HOBBIT: AN UNEXPECTED JOURNEY, this first part of The Lord of the Rings is available for a limited time with an exclusive cover image from Peter Jackson s award-winning trilogy.\"",
        "industryIdentifiers": [
          {
            "type": "ISBN_10",
            "identifier": "0007488300"
          },
          {
            "type": "ISBN_13",
            "identifier": "9780007488308"
          }
        ],
        "readingModes": {
          "text": false,
          "image": false
        },
        "pageCount": 531,
        "printType": "BOOK",
        "categories": [
          "Baggins, Frodo (Fictitious character)"
        ],
        "averageRating": 4,
        "ratingsCount": 2718,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=_FjrugAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=_FjrugAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=_FjrugAACAAJ&dq=fantasy&hl=&cd=1&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=_FjrugAACAAJ&dq=fantasy&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/The_Fellowship_of_the_Ring.html?hl=&id=_FjrugAACAAJ"
      },
    },
    {
      "title": "A Midnight Fantasy",
      "pageCount": 96,
      "isComplete": false,
      "id": "XtY-AAAAYAAJ",
      "volumeInfo": {
        "title": "A Midnight Fantasy",
        "subtitle": "And The Little Violinist",
        "authors": [
          "Thomas Bailey Aldrich"
        ],
        "publishedDate": "1877",
        "industryIdentifiers": [
          {
            "type": "OTHER",
            "identifier": "HARVARD:HWJSK6"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 96,
        "printType": "BOOK",
        "categories": [
          "Hamlet (Legendary character)"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "0.2.3.0.full.1",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=XtY-AAAAYAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=XtY-AAAAYAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=XtY-AAAAYAAJ&pg=PA70&dq=fantasy&hl=&cd=2&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=XtY-AAAAYAAJ&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=XtY-AAAAYAAJ"
      }
    },
    {
      "title": "A Fantasy in Fustian",
      "pageCount": 309,
      "isComplete": true,
      "id": "a-H5L-lSsR0C",
      "volumeInfo": {
        "title": "A Fantasy in Fustian",
        "authors": [
          "George Wemyss"
        ],
        "publishedDate": "1899",
        "industryIdentifiers": [
          {
            "type": "OTHER",
            "identifier": "STANFORD:36105213336956"
          }
        ],
        "readingModes": {
          "text": false,
          "image": true
        },
        "pageCount": 309,
        "printType": "BOOK",
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "0.1.2.0.full.1",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=a-H5L-lSsR0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=a-H5L-lSsR0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=a-H5L-lSsR0C&pg=PP7&dq=fantasy&hl=&cd=3&source=gbs_api",
        "infoLink": "https://play.google.com/store/books/details?id=a-H5L-lSsR0C&source=gbs_api",
        "canonicalVolumeLink": "https://play.google.com/store/books/details?id=a-H5L-lSsR0C"
      }
    },
    {
      "title": "Fantasy League",
      "pageCount": 293,
      "isComplete": true,
      "id": "zPDkDQAAQBAJ",
      "volumeInfo": {
        "title": "Fantasy League",
        "authors": [
          "Mike Lupica"
        ],
        "publisher": "Penguin",
        "publishedDate": "2014",
        "description": "From OKing of SportswritersO and \"New York Times\"-bestselling author Lupica. In Los Angeles, 12-year-old Charlie's skill at fantasy football gains the attention of both the local media and the owner of a professional football team.",
        "industryIdentifiers": [
          {
            "type": "ISBN_13",
            "identifier": "9780399256073"
          },
          {
            "type": "ISBN_10",
            "identifier": "0399256075"
          }
        ],
        "readingModes": {
          "text": false,
          "image": false
        },
        "pageCount": 293,
        "printType": "BOOK",
        "categories": [
          "Juvenile Fiction"
        ],
        "averageRating": 4.5,
        "ratingsCount": 2,
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "0.1.0.0.preview.0",
        "panelizationSummary": {
          "containsEpubBubbles": false,
          "containsImageBubbles": false
        },
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=zPDkDQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=zPDkDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=zPDkDQAAQBAJ&printsec=frontcover&dq=fantasy&hl=&cd=4&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=zPDkDQAAQBAJ&dq=fantasy&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Fantasy_League.html?hl=&id=zPDkDQAAQBAJ"
      }
    }
  ];
  
  db.Book.deleteMany({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });