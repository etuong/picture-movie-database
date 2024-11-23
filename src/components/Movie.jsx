import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Movie = () => {
  const { id } = useParams();
  const [movieData, setMovieData] = useState(undefined);

  useEffect(() => {
    const fetchMovie = async () => {
      const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`;
      const response = await fetch(apiUrl);
      const data = await response.json();

      setMovieData({
        title: data.title,
        genres: data.genres.map((genre) => genre.name).join(", "),
        overview: data.overview,
        language: data.spoken_languages[0].english_name,
        posterPath: data.poster_path,
        releaseDate: data.release_date,
        runtime: data.runtime,
        voteAverage: data.vote_average,
      });
    };

    fetchMovie();
  }, [id]);

  return (
    <div className="terminal">
      {movieData && (
        <React.Fragment>
          <h1>{movieData.title}</h1>
          <div className="movie">
            <img
              src={`https://image.tmdb.org/t/p/w1280${movieData.posterPath}`}
              alt={movieData.title}
            />
            <div className="meta">
              <p className="output">Overview: {movieData.overview}</p>
              <p className="output">Genre(s): {movieData.genres}</p>
              <p className="output">Language: {movieData.language}</p>
              <p className="output">Release Date: {movieData.releaseDate}</p>
              <p className="output">Runtime (minutes): {movieData.runtime}</p>
              <p className="output">
                Average Score (out of 10): {movieData.voteAverage}
              </p>
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default Movie;
