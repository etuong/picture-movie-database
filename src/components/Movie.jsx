import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Movie = () => {
  const { id } = useParams();

  const KEY = process.env.REACT_APP_TMDB_API_KEY;

  const [movie, setMovie] = useState(undefined);

  const IMGPATH = "https://image.tmdb.org/t/p/w1280";

  useEffect(() => {
    async function getMovie() {
      const api = `https://api.themoviedb.org/3/movie/${id}?&api_key=${KEY}`;
      const data = await fetch(api).then((res) => res.json());

      setMovie({
        genres: data.genres.map((genre) => genre.name).join(", "),
        language: data.spoken_languages.english_name,
        title: data.title,
        overview: data.overview,
        poster_path: data.poster_path,
        release_date: data.release_date,
        runtime: data.runtime,
        vote_average: data.vote_average,
      });
    }

    getMovie().catch(console.error);
  }, []);

  return (
    <div className="terminal">
      {movie && (
        <React.Fragment>
          <h1>{movie.title}</h1>
          <div className="movie">
            <img src={`${IMGPATH + movie.poster_path}`} alt="" />
            <div className="meta">
              <p className="output">Overview: {movie.overview}</p>
              <p className="output">Genre(s): {movie.genres}</p>
              <p className="output">Language: {movie.language}</p>
              <p className="output">Release Date: {movie.release_date}</p>
              <p className="output">Runtime (minutes): {movie.runtime}</p>
              <p className="output">
                Average Score (out of 10): {movie.vote_average}
              </p>
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default Movie;
