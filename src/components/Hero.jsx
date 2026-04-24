import "./Hero.css";

export default function Hero({ movie }) {
  if (!movie) {
    return <div className="hero hero-skeleton" />;
  }

  const bg =
    movie.Poster !== "N/A"
      ? movie.Poster
      : "https://via.placeholder.com/1280x720/111/333?text=NETFLUX";

  return (
    <div
      className="hero"
      style={{ "--hero-bg": `url(${bg})` }}
    >
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="hero-eyebrow">Featured Film</p>
        <h1 className="hero-title">{movie.Title}</h1>
        <div className="hero-meta">
          <span className="badge">HD</span>
          <span>{movie.Year}</span>
          <span className="dot">·</span>
          <span>{movie.Type}</span>
        </div>
        <div className="hero-buttons">
          <button className="btn-play">▶ Play</button>
          <button className="btn-info">ⓘ More Info</button>
        </div>
      </div>
    </div>
  );
}