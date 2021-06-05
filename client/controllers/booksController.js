const Completed = require("../../models/Completed");
const Enqueued = require("../../models/Enqueued");

const update = (req, res, model) => {
    const { id, user: userId } = req.params;
    const { rating, notes, review, ending } = req.body;
    model
        .findOneAndUpdate(
            { id, userId },
            { rating, notes, review, ending }
        )
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
};

// Defining methods for the booksController
module.exports = {

    getCompleted: function (req, res) {
        Completed
            .find({ userId: req.params.user }, '-_id')
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    getQueue: function (req, res) {
        Enqueued
            .find({ userId: req.params.user }, '-_id')
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    createCompleted: function (req, res) {
        const newBook = {
            userId: req.params.user,
            id: req.body.id,
            volumeInfo: req.body.volumeInfo
        }
        Completed
            .create(newBook)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(400).send('This book is already in your completed list'));
    },
    removeCompleted: function (req, res) {
        Completed
            .findOne({
                id: req.params.id,
                userId: req.params.user
            })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    createEnqueued: function (req, res) {
        const newBook = {
            userId: req.params.user,
            id: req.body.id,
            volumeInfo: req.body.volumeInfo
        }
        Enqueued
            .create(newBook)
            .then(dbModel => res.json(dbModel))
            .catch(() => console.send('This book is already in your book queue.'));
    },
    removeEnqueued: function (req, res) {
        Enqueued
            .findOne({
                id: req.params.id,
                userId: req.params.user
            })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    getCompletedLimit: function (req, res) {
        Completed
            .find({ userId: req.params.user }, '-_id')
            .sort({ createdAt: -1 })
            .limit(5)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    getCompletedBook: function (req, res) {
        Completed
            .findOne({
                id: req.params.id,
                userId: req.params.user
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    getQueuedBook: function (req, res) {
        Enqueued
            .findOne({
                id: req.params.id,
                userId: req.params.user
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    updateQueued: function (req, res) {
        update(req, res, Enqueued);
    },
    updateCompleted: function (req, res) {
        update(req, res, Completed);
    }
};