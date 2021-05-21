const Book = require("../../models/Book");

// Defining methods for the booksController
module.exports = {
    findAll: function (req, res) {
        Book
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .then(result => console.log(result))
            .catch(err => res.status(422).json(err));
    },
    completed: function (req, res) {
        Book
            .find({ isComplete: true })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    queue: function (req, res) {
        Book
        .find({ isComplete: false })
        .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        console.log(req.body)
        Book
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log(err));
    },
    remove: function (req, res) {
        Book
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};