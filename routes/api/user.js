const router = require("express").Router();
const userController = require("../../client/controllers/userController");

router.route("/:user")
    .get(userController.getUser)
    .post(userController.upsertUser);

module.exports = router;