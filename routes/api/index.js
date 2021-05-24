
const router = require("express").Router();
const bookRoutes = require("./books");
const unsplashRoutes = require("./unsplash");

// Book routes
router.use("/books", bookRoutes);

router.use("/unsplash", unsplashRoutes);

module.exports = router;