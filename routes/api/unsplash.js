const router = require("express").Router();
const fetch = require("node-fetch")

const client_id = process.env.UNSPLASH_API_KEY;


router.get("/background/:width", async (req, res) => {
    const unsplashUrl = `https://api.unsplash.com/collections/9951269/photos?orientation=${req.params.width > 480 ? "landscape" : "portrait"}&page=2&client_id=${client_id}`;
    const picturesRaw = await fetch(unsplashUrl);
    const pictures = await picturesRaw.json();
    const backgrounds = pictures.map(picture => ({
        artist: picture.user.name,
        profile: picture.user.links.html,
        image: picture.urls.full,
        blur: picture.blur_hash
    }))
    res.json(backgrounds);
});

module.exports = router;