const router = require("express").Router();
const booksController = require("../../client/controllers/booksController");

router.route("/completed/:user")
    .get(booksController.completed)
    .post(booksController.createCompleted);

router.route("/queue/:user")
    .get(booksController.queue)
    .post(booksController.createEnqueued);

router.route("/completed/:user/:id")
    .delete(booksController.removeCompleted);

router.route("/recent/:user")
    .get(booksController.getCompletedLimit)

router.route("/queue/:user/:id")
    .delete(booksController.removeEnqueued);

module.exports = router;