const Completed = require("../../models/Completed");
const Enqueued = require("../../models/Enqueued");

// Defining methods for the booksController
module.exports = {

    completed: function (req, res) {
        //  TODO: add userId to search criteria (done?)
        Completed
            //  --waiting to access currentUser
            .find({ userId: req.params.user }, '-_id')
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    queue: function (req, res) {
        //  TODO: add userId to search criteria (done?)
        Enqueued
            //  --waiting to access currentUser
            .find({ userId: req.params.user }, '-_id')
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    //  TODO: create object with req.body data and userId then insert it (done?)
    createCompleted: function (req, res) {
        const newBook = {
            //  --waiting to access currentUser
            userId: req.params.user,
            //              title: req.body.volumeInfo.title,    // CHECK: see if others are using these fields -- these are inside volumeInfo
            //              pageCount: req.body.volumeInfo.pageCount,
            id: req.body.id,
            volumeInfo: req.body.volumeInfo
        }
        Completed
            .create(newBook)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(400).send('This book is already in your completed list'));
    },
    removeCompleted: function (req, res) {
        //  TODO: add userId to search criteria (done?)
        Completed
            .findOne({
                id: req.params.id,
                //  --waiting to access currentUser
                userId: req.params.user
            })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    //  TODO: create object with req.body data and userId then insert it (done?)
    createEnqueued: function (req, res) {
        const newBook = {
            //  --waiting to access currentUser
            userId: req.params.user,
            id: req.body.id,
            volumeInfo: req.body.volumeInfo
        }
        Enqueued
            .create(newBook)
            .then(dbModel => res.json(dbModel))
            .catch(err => console.send('This book is already in your book queue.'));
    },
    //  TODO: add userId to search criteria (done?)
    removeEnqueued: function (req, res) {
        Enqueued
            .findOne({
                id: req.params.id,
                //  --waiting to access currentUser
                userId: req.params.user
            })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    getCompletedLimit: function (req, res) {
        //  TODO: add userId to search criteria (done?)
        Completed
            //  --waiting to access currentUser
            .find({ userId: req.params.user }, '-_id')
            .sort({ createdAt: -1 })
            .limit(5)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};