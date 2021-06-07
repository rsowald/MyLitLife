
const router = require("express").Router();
const bookRoutes = require("./books");
const unsplashRoutes = require("./unsplash");
const userRoutes = require("./user");

// Book routes
router.use("/books", bookRoutes);

router.use("/user", userRoutes);

router.use("/unsplash", unsplashRoutes);

module.exports = router;