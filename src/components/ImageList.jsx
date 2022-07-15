import { useState } from "react";

const ImageList = () => {
    const KEY = process.env.REACT_APP_FLICKR_API_KEY;

    const [search, setSearch] = useState("");
    const [images, setImages] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (search) {
            const SEARCHAPI = `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${KEY}&tags=${search}&per_page=24&format=json&nojsoncallback=1`;
            showPictures(SEARCHAPI);
            setSearch("");
        }
    }

    const showPictures = async (url) => {
        // setImages([]);
        const response = await fetch(url).then(res => res.json());
        setImages(response.photos.photo);
    }

    return (
        <div className="body-content">
            <header>
                <h1>Pictures</h1>
                <form id="form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={search}
                        placeholder="Search"
                        className="search"
                        onChange={e => setSearch(e.target.value)}
                    />
                </form>
            </header>
            <main>
                {images.map(image => {
                    let farm = image.farm;
                    let server = image.server;
                    let id = image.id;
                    let secret = image.secret;
                    let title = image.title;
                    let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
                    return (
                        <div className="gallery" key={id} >
                            <img src={url} alt={title} />
                        </div>
                    );
                })}
            </main>
        </div>
    )
}

export default ImageList;
