import React, { useEffect, useState } from "react";
import API from '../utils/API';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

function Background(props) {
    const [images, setImages] = useState([]);

    useEffect(() => {
        async function callAPI() {
            try {
                const backgroundsRaw = await API.getBackground();
                const backgrounds = backgroundsRaw.data.map((picture) => ({
                    blur_hash: picture.blur,
                    original: picture.image,
                    description: `Photo by <a href="${picture.profile}?utm_source=my-lit-life&utm_medium=referral">${picture.artist}</a> on <a href="https://unsplash.com/?utm_source=my-lit-life&utm_medium=referral">Unsplash</a>`
                }));
                setImages(backgrounds);
            } catch (error) {
                console.error(error);
            }
        }
        callAPI()
    }, []);

    return (
        <ImageGallery items={images}>

        </ImageGallery>
    )
}

export default Background;