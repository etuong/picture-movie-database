import { useState } from "react";

const MovieList = () => {
    const KEY = process.env.REACT_APP_TMDB_API_KEY;

    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);

    const IMGPATH = "https://image.tmdb.org/t/p/w1280";
    const SEARCHAPI =
        `https://api.themoviedb.org/3/search/movie?&api_key=${KEY}&query=`;

    const handleSubmit = (event) => {
        event.preventDefault();
        if (search) {
            showMovies(SEARCHAPI + search);
            setSearch("");
        }
    }

    const showMovies = async (url) => {
        setMovies([]);

        const data = await fetch(url).then(res => res.json());

        console.log(data.results);
        const array = [];

        data.results.forEach(element => {
            array.push({ title: element.title, poster: element.poster_path });
        });

        setMovies(array);
    }

    return (
        <div className="terminal">
            <h1>Movies</h1>

            <p className="output">Search for movies on the Movie Database</p>

            <form id="form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={search}
                    placeholder="Search"
                    className="search-box"
                    onChange={e => setSearch(e.target.value)}
                />
            </form>

            <main>
                {movies.map((movie, index) => {
                    return <div key={index}>
                        <img src={`https://image.tmdb.org/t/p/w1280/${IMGPATH + movie.poster}`} alt="" />
                        <h2>{movie.title}</h2>
                    </div>
                })}
            </main>
        </div>
    );
}

export default MovieList;
