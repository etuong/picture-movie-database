import React, { useState } from "react";

const ImageList = () => {
    const apiKey = process.env.REACT_APP_FLICKR_API_KEY;

    const [searchTerm, setSearchTerm] = useState("");
    const [images, setImages] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (searchTerm) {
            const searchUrl = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${searchTerm}&per_page=24&format=json&nojsoncallback=1`;
            fetchImages(searchUrl);
            setSearchTerm("");
        }
    }

    const fetchImages = async (url) => {
        const response = await fetch(url);
        const data = await response.json();
        setImages(data.photos.photo);
    }

    return (
        <div className="terminal">
            <h1>Pictures</h1>

            <p className="output">Search for pictures on Flickr</p>

            <form id="form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={searchTerm}
                    placeholder="Search"
                    className="search-box"
                    onChange={e => setSearchTerm(e.target.value)}
                />
            </form>

            <div className="gallery-container">
                {images.map(image => {
                    const { farm, server, id, secret, title } = image;
                    const url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
                    return (
                        <div className="gallery" key={id} >
                            <img src={url} alt={title} />
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default ImageList;
