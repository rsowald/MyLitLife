const router = require("express").Router();
const booksController = require("../../client/controllers/booksController");

// Matches with "/api/books"
router.route("/")
    .get(booksController.findAll)
    .post(booksController.create);

router.route("/completed")
    .get(booksController.completed)
    .post(booksController.create);

router.route("/queue")
    .get(booksController.queue)
    .post(booksController.create);    

// Matches with "/api/books/:id"
router.route("/:id")
    .delete(booksController.remove);

module.exports = router;