const User = require("../../models/User");

module.exports = {
    getUser: function (req, res) {
        User
            .findOne({ userId: req.params.user })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err.message));
    },
    upsertUser: function (req, res) {
        User
            .findOneAndUpdate({
                userId: req.params.user
            }, req.body, {
                new: true,
                upsert: true
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err.message));
    }
}