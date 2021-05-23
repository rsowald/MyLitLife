const router = require("express").Router();
const booksController = require("../../client/controllers/booksController");

router.route("/completed")
    .get(booksController.completed)
    .post(booksController.createCompleted);

router.route("/queue")
    .get(booksController.queue)
    .post(booksController.createEnqueued);

router.route("/completed/:id")
    .delete(booksController.removeCompleted);

router.route("/queue/:id")
    .delete(booksController.removeEnqueued);

module.exports = router;