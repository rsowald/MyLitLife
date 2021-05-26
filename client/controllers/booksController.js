const Completed = require("../../models/Completed");
const Enqueued = require("../../models/Enqueued");

//////??//////////////////////////////
//                                  //
//   cannot get useAuth to import   //
//                                  //
//////////////////////////////////////
//import { useAuth } from "../src/components/authentication/context/AuthContext";
//const { currentUser } = useAuth();

///////////////   DELETE THESE WHEN currentUser is available
//const currentUser = 1;
const currentUser = 2;

// Defining methods for the booksController
module.exports = {

    completed: function (req, res) {
        //  TODO: add userId to search criteria (done?)
        Completed
        //  --waiting to access currentUser
            .find({ userId: currentUser }, '-_id')
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    queue: function (req, res) {
        //  TODO: add userId to search criteria (done?)
        Enqueued
        //  --waiting to access currentUser
        .find({ userId: currentUser }, '-_id')
        .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
        //  TODO: create object with req.body data and userId then insert it (done?)
        createCompleted: function (req, res) {
          const newBook = {
        //  --waiting to access currentUser
        userId: currentUser,
//              title: req.body.volumeInfo.title,    // CHECK: see if others are using these fields -- these are inside volumeInfo
//              pageCount: req.body.volumeInfo.pageCount,
              id: req.body.id,
              volumeInfo: req.body.volumeInfo
          }  
        Completed
            .create(newBook)
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log(err));
    },
    removeCompleted: function (req, res) {
        //  TODO: add userId to search criteria (done?)
        Completed
            .findOne({ 
                id: req.params.id,
        //  --waiting to access currentUser
        userId: currentUser 
            })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
        //  TODO: create object with req.body data and userId then insert it (done?)
        createEnqueued: function (req, res) {
            const newBook = {
        //  --waiting to access currentUser
        userId: currentUser,
  //              title: req.body.volumeInfo.title,    // CHECK: see if others are using these fields -- these are inside volumeInfo
  //              pageCount: req.body.volumeInfo.pageCount,
                id: req.body.id,
                volumeInfo: req.body.volumeInfo
            }  
          Enqueued
            .create(newBook)
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log(err));
    },
        //  TODO: add userId to search criteria (done?)
        removeEnqueued: function (req, res) {
          Enqueued
            .findOne({ 
                id: req.params.id,
        //  --waiting to access currentUser
        userId: currentUser 
             })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};