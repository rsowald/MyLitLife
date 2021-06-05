const router = require("express").Router();
const booksController = require("../../client/controllers/booksController");

router.route("/completed/:user")
    .get(booksController.getCompleted)
    .post(booksController.createCompleted);

router.route("/queue/:user")
    .get(booksController.getQueue)
    .post(booksController.createEnqueued);

router.route("/completed/:user/:id")
    .delete(booksController.removeCompleted)
    .put(booksController.updateCompleted)
    .get(booksController.getCompletedBook);

router.route("/recent/:user")
    .get(booksController.getCompletedLimit);

router.route("/queue/:user/:id")
    .delete(booksController.removeEnqueued)
    .put(booksController.updateQueued)
    .get(booksController.getQueuedBook);


module.exports = router;