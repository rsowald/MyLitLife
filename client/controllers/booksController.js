const Completed = require("../../models/Completed");
const Enqueued = require("../../models/Enqueued");

// Defining methods for the booksController
module.exports = {
    completed: function (req, res) {
        Completed
            .find({}, '-_id')
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    queue: function (req, res) {
        Enqueued
        .find({}, '-_id')
        .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    createCompleted: function (req, res) {
        Completed
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log(err));
    },
    removeCompleted: function (req, res) {
console.log(req.params.id);        
        Completed
            .findOne({ id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    createEnqueued: function (req, res) {
        Enqueued
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log(err));
    },
    removeEnqueued: function (req, res) {
        console.log(req.params.id);
                Enqueued
            .findOne({ id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};