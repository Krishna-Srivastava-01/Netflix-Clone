import "./MovieCard.css";

export default function MovieCard({ movie, onCardClick }) {
  const hasPoster = movie.Poster && movie.Poster !== "N/A";

  return (
    <div className="movie-card" onClick={() => onCardClick(movie)}>
      <div className="card-img-wrap">
        {hasPoster ? (
          <img src={movie.Poster} alt={movie.Title} loading="lazy" />
        ) : (
          <div className="card-no-poster">
            <span>{movie.Title}</span>
          </div>
        )}
        <div className="card-hover-overlay">
          <button className="card-play-btn">▶</button>
          <p className="card-hover-title">{movie.Title}</p>
          <span className="card-hover-year">{movie.Year}</span>
        </div>
      </div>
      <p className="card-title">{movie.Title}</p>
    </div>
  );
}