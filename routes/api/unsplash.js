const router = require("express").Router();
const fetch = require("node-fetch")

const client_id = process.env.UNSPLASH_API_KEY;
const unsplashUrl = `https://api.unsplash.com/collections/9951269/photos?orientation=landscape&client_id=${client_id}`;

router.get("/background", async (req, res) => {
    const picturesRaw = await fetch(unsplashUrl);
    const pictures = await picturesRaw.json();
    const backgrounds = pictures.map(picture => ({
        artist: picture.user.name,
        profile: picture.user.links.html,
        image: picture.urls.regular,
        blur: picture.blur_hash
    }))
    res.json(backgrounds);
});

module.exports = router;