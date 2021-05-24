const router = require("express").Router();
const fetch = require("node-fetch")

const client_id = process.env.UNSPLASH_API_KEY;
const unsplashUrl = `https://api.unsplash.com/photos/random?query=reading&count=10&client_id=${client_id}`;

router.get("/background", async (req, res) => {
    const picturesRaw = await fetch(unsplashUrl);
    const pictures = await picturesRaw.json();
    const backgrounds = pictures.map(picture => ({
        artist: picture.user.name,
        profile: picture.user.links.html,
        image: picture.urls.regular
    }))
    res.json(backgrounds);
});

module.exports = router;