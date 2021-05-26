import React, { useEffect, useState } from "react";
import API from '../utils/API';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

function Background(props) {
    const [images, setImages] = useState([]);
    const [imageIndex, setImageIndex] = useState(0);

    useEffect(() => {
        async function callAPI() {
            try {
                const backgroundsRaw = await API.getBackground();
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
    }, []);

    const currentImage = images[imageIndex];

    return (
        <>
            <ImageGallery
                items={images}
                showNav={false}
                autoPlay={true}
                showThumbnails={false}
                infinite={true}
                showPlayButton={false}
                showFullscreenButton={false}
                disableKeyDown={true}
                disableSwipe={true}
                preventDefaultTouchmoveEvent={true}
                stopPropagation={true}
                slideInterval={5000}
                onBeforeSlide={setImageIndex}
                style={{ display: "block", clear: "both" }}
            />
            { currentImage &&
                <span className="bg-dark text-muted" style={{ paddingLeft: "20px" }}>Photo by&nbsp;
                   <a href={`${currentImage.profile}?utm_source=my-lit-life&utm_medium=referral`} target="_blank" rel="noopener noreferrer">{currentImage.artist}</a>
                   &nbsp;on <a href="https://unsplash.com/?utm_source=my-lit-life&utm_medium=referral" target="_blank" rel="noopener noreferrer">Unsplash</a>
                </span>
            }
        </>
    )
}

export default Background;