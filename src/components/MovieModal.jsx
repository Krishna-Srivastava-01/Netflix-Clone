import { useEffect, useState } from "react";
import "./MovieModal.css";

const API_KEY = "95075bd0";
const BASE_URL = "http://www.omdbapi.com/";

export default function MovieModal({ movie, onClose }) {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    fetch(`${BASE_URL}?apikey=${API_KEY}&i=${movie.imdbID}&plot=full`)
      .then((r) => r.json())
      .then((data) => {
        setDetails(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
    return () => {
      document.body.style.overflow = "";
    };
  }, [movie.imdbID]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const ratingValue = details?.imdbRating && details.imdbRating !== "N/A"
    ? parseFloat(details.imdbRating)
    : null;

  const ratingStars = ratingValue ? Math.round(ratingValue / 2) : null;

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal">
        <button className="modal-close" onClick={onClose}>✕</button>

        {loading ? (
          <div className="modal-loading">
            <div className="modal-spinner" />
            <p>Loading details…</p>
          </div>
        ) : (
          <>
            <div
              className="modal-banner"
              style={{
                backgroundImage:
                  details?.Poster && details.Poster !== "N/A"
                    ? `url(${details.Poster})`
                    : "none",
              }}
            >
              <div className="modal-banner-overlay" />
              <div className="modal-banner-content">
                <span className="modal-type-badge">{details?.Type}</span>
                <h2 className="modal-title">{details?.Title}</h2>
                <div className="modal-meta-row">
                  {details?.Year && <span className="modal-year">{details.Year}</span>}
                  {details?.Runtime && details.Runtime !== "N/A" && (
                    <span className="modal-runtime">{details.Runtime}</span>
                  )}
                  {details?.Rated && details.Rated !== "N/A" && (
                    <span className="modal-rated">{details.Rated}</span>
                  )}
                </div>
              </div>
            </div>

            <div className="modal-body">
              <div className="modal-body-left">
                {details?.Plot && details.Plot !== "N/A" && (
                  <p className="modal-plot">{details.Plot}</p>
                )}

                <div className="modal-info-grid">
                  {details?.Genre && details.Genre !== "N/A" && (
                    <div className="modal-info-item">
                      <span className="modal-info-label">Genre</span>
                      <div className="modal-genre-tags">
                        {details.Genre.split(", ").map((g) => (
                          <span key={g} className="genre-tag">{g}</span>
                        ))}
                      </div>
                    </div>
                  )}
                  {details?.Director && details.Director !== "N/A" && (
                    <div className="modal-info-item">
                      <span className="modal-info-label">Director</span>
                      <span className="modal-info-value">{details.Director}</span>
                    </div>
                  )}
                  {details?.Actors && details.Actors !== "N/A" && (
                    <div className="modal-info-item">
                      <span className="modal-info-label">Cast</span>
                      <span className="modal-info-value">{details.Actors}</span>
                    </div>
                  )}
                  {details?.Language && details.Language !== "N/A" && (
                    <div className="modal-info-item">
                      <span className="modal-info-label">Language</span>
                      <span className="modal-info-value">{details.Language}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="modal-body-right">
                {ratingValue && (
                  <div className="modal-rating-box">
                    <span className="modal-rating-label">IMDb Rating</span>
                    <div className="modal-rating-score">
                      <span className="modal-rating-num">{details.imdbRating}</span>
                      <span className="modal-rating-max">/10</span>
                    </div>
                    <div className="modal-stars">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span
                          key={i}
                          className={"star" + (i < ratingStars ? " filled" : "")}
                        >★</span>
                      ))}
                    </div>
                    {details?.imdbVotes && details.imdbVotes !== "N/A" && (
                      <span className="modal-votes">{details.imdbVotes} votes</span>
                    )}
                  </div>
                )}

                {details?.Awards && details.Awards !== "N/A" && (
                  <div className="modal-awards">
                    <span className="modal-info-label">🏆 Awards</span>
                    <p className="modal-awards-text">{details.Awards}</p>
                  </div>
                )}

                {details?.BoxOffice && details.BoxOffice !== "N/A" && (
                  <div className="modal-boxoffice">
                    <span className="modal-info-label">Box Office</span>
                    <span className="modal-info-value modal-money">{details.BoxOffice}</span>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}