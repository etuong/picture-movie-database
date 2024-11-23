import { useState } from "react";
import { Link } from "react-router-dom";

const MovieList = () => {
  const apiKey = process.env.REACT_APP_TMDB_API_KEY;

  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const imgPath = "https://image.tmdb.org/t/p/w1280";
  const searchUrl = `https://api.themoviedb.org/3/search/movie?&api_key=${apiKey}&query=`;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (searchTerm) {
      fetchMovies(searchUrl + searchTerm);
      setSearchTerm("");
    }
  };

  const fetchMovies = async (url) => {
    const response = await fetch(url);
    const data = await response.json();

    const movieArray = data.results.map((movie) => ({
      id: movie.id,
      title: movie.title,
      poster: movie.poster_path,
    }));

    setMovies(movieArray);
  };

  return (
    <div className="terminal">
      <h1>Movies</h1>

      <p className="output">Search for movies on the Movie Database</p>

      <form id="form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={searchTerm}
          placeholder="Search"
          className="search-box"
          onChange={e => setSearchTerm(e.target.value)}
        />
      </form>

      <main>
        {movies.map((movie, index) => (
          <Link to={`${movie.id}`} key={index}>
            <div>
              <img src={`${imgPath + movie.poster}`} alt="" />
              <h2>{movie.title}</h2>
            </div>
          </Link>
        ))}
      </main>
    </div>
  );
};

export default MovieList;
