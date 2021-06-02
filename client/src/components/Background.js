import React, { useEffect, useState } from "react";
import API from '../utils/API';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import useWindowSize from "../utils/windowWidth";
import "./background.css";

function Background() {
    const [images, setImages] = useState([]);
    const [imageIndex, setImageIndex] = useState(0);
    const [portrait, setPortrait] = useState(false);
    const windowSize = useWindowSize();

    useEffect(() => {

        async function callAPI() {
            try {
                const backgroundsRaw = await API.getBackground(windowSize);
                const backgrounds = backgroundsRaw.data.map((picture) => ({
                    blur_hash: picture.blur,
                    original: picture.image,
                    profile: picture.profile,
                    artist: picture.artist
                }));
                setImages(backgrounds);
            } catch (error) {
                console.error(error);
            }
        }
        callAPI();
    }, [portrait]);

    useEffect(() => {
        windowSize > 480 ? setPortrait(false) : setPortrait(true)
    }, [windowSize]);

    const currentImage = images[imageIndex];

    return (
        <>
            <ImageGallery
                items={images}
                showNav={false}
                autoPlay={true}
                showThumbnails={false}
                infinite={true}
                fullscreen={true}
                sizes="(min-width: 36em) 33.3vw, 100vw"
                showPlayButton={false}
                showFullscreenButton={false}
                disableKeyDown={true}
                disableSwipe={true}
                preventDefaultTouchmoveEvent={true}
                stopPropagation={true}
                slideInterval={5000}
                onBeforeSlide={setImageIndex}
            />
            { currentImage &&
                <span className="text-muted">Photo by&nbsp;
                   <a href={`${currentImage.profile}?utm_source=my-lit-life&utm_medium=referral`} target="_blank" rel="noopener noreferrer">{currentImage.artist}</a>
                   &nbsp;on <a href="https://unsplash.com/?utm_source=my-lit-life&amputm_medium=referral" target="_blank" rel="noopener noreferrer">Unsplash</a>
                </span>
            }
        </>
    )
}

export default Background;