import React from 'react'

function MovieRow() {
  return (
    <div className="movie-row">
      <h2 className="row-label">{label}</h2>
      <div className="row-scroll">
        {movies.length === 0
          ? Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="card-skeleton" />
            ))
          : movies.map((movie) => (
              <MovieCard
                key={movie.imdbID}
                movie={movie}
                onCardClick={onCardClick}
              />
            ))}
      </div>
    </div>
  )
}

export default MovieRow