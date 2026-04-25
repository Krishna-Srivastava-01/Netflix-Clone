import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MovieRow from "./components/MovieRow";
import MovieModal from "./components/MovieModal";
import Footer from "./components/Footer";

const API_KEY = "95075bd0";
const BASE_URL = "http://www.omdbapi.com/";

const NAV_ROWS = {
  Home: [
    { label: "Trending Now", term: "action" },
    { label: "Epic Adventures", term: "adventure" },
    { label: "Dark Thrillers", term: "thriller" },
    { label: "Comedy Gold", term: "comedy" },
    { label: "Sci-Fi Universe", term: "science" },
    { label: "True Crime", term: "crime" },
  ],
  "TV Shows": [
    { label: "Popular Series", term: "series" },
    { label: "Drama Series", term: "drama" },
    { label: "Crime Shows", term: "crime show" },
    { label: "Sci-Fi Series", term: "space" },
  ],
  Movies: [
    { label: "Blockbusters", term: "blockbuster" },
    { label: "Classic Films", term: "classic" },
    { label: "Romance", term: "romance" },
    { label: "Horror", term: "horror" },
  ],
  "New & Popular": [
    { label: "New Releases", term: "2024" },
    { label: "Award Winners", term: "oscar" },
    { label: "Most Watched", term: "popular" },
  ],
  "My List": [
    { label: "Action Picks", term: "superhero" },
    { label: "Comedy Picks", term: "funny" },
  ],
};

const FILTER_TYPES = ["All", "Movies", "Series", "Episodes"];

export default function App() {
  const [rowData, setRowData] = useState({});
  const [heroMovie, setHeroMovie] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  const [activeNav, setActiveNav] = useState("Home");
  const [filterType, setFilterType] = useState("All");
  const [theme, setTheme] = useState("dark");
  const [selectedMovie, setSelectedMovie] = useState(null);

  const currentRows = NAV_ROWS[activeNav] || NAV_ROWS["Home"];

  useEffect(() => {
    currentRows.forEach(({ term }) => {
      if (rowData[term]) return;
      fetch(`${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(term)}&type=movie`)
        .then((r) => r.json())
        .then((data) => {
          if (data.Search) {
            setRowData((prev) => ({ ...prev, [term]: data.Search }));
          }
        });
    });
  }, [activeNav]);

  useEffect(() => {
    const firstRow = currentRows[0];
    if (firstRow && rowData[firstRow.term]) {
      const featured = rowData[firstRow.term].find((m) => m.Poster !== "N/A");
      if (featured) setHeroMovie(featured);
    }
  }, [activeNav, rowData]);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }
    setSearchLoading(true);
    const typeParam =
      filterType === "Series" ? "series" :
      filterType === "Episodes" ? "episode" : "movie";
    const timer = setTimeout(() => {
      fetch(`${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(searchQuery)}&type=${typeParam}`)
        .then((r) => r.json())
        .then((data) => {
          setSearchResults(data.Search || []);
          setSearchLoading(false);
        })
        .catch(() => setSearchLoading(false));
    }, 400);
    return () => clearTimeout(timer);
  }, [searchQuery, filterType]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setSelectedMovie(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleNavClick = (item) => {
    setActiveNav(item);
    setSearchQuery("");
  };

  const filteredResults =
    filterType === "All"
      ? searchResults
      : searchResults.filter((m) => {
          if (filterType === "Movies") return m.Type === "movie";
          if (filterType === "Series") return m.Type === "series";
          if (filterType === "Episodes") return m.Type === "episode";
          return true;
        });

  return (
    <div className={"app theme-" + theme}>
      <Navbar
        onSearch={setSearchQuery}
        searchQuery={searchQuery}
        activeNav={activeNav}
        onNavClick={handleNavClick}
        filterType={filterType}
        onFilterChange={setFilterType}
        filterTypes={FILTER_TYPES}
        theme={theme}
        onThemeToggle={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
      />

      {!searchQuery.trim() ? (
        <>
          <Hero movie={heroMovie} onCardClick={setSelectedMovie} />
          <div className="rows-container">
            {currentRows.map(({ label, term }) => (
              <MovieRow
                key={term}
                label={label}
                movies={rowData[term] || []}
                onCardClick={setSelectedMovie}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="search-page">
          <div className="search-filter-bar">
            {FILTER_TYPES.map((f) => (
              <button
                key={f}
                className={"filter-pill" + (filterType === f ? " active" : "")}
                onClick={() => setFilterType(f)}
              >
                {f}
              </button>
            ))}
          </div>
          <h2 className="search-heading">
            {searchLoading
              ? "Searching…"
              : filteredResults.length
              ? "Results for \"" + searchQuery + "\""
              : "No results for \"" + searchQuery + "\""}
          </h2>
          <div className="search-grid">
            {filteredResults.map((movie) => (
              <div
                key={movie.imdbID}
                className="search-card"
                onClick={() => setSelectedMovie(movie)}
              >
                <div className="search-card-img-wrap">
                  {movie.Poster !== "N/A" ? (
                    <img src={movie.Poster} alt={movie.Title} />
                  ) : (
                    <div className="no-poster">{movie.Title}</div>
                  )}
                </div>
                <div className="search-card-content">
                  <div className="search-play-icon">▶</div>
                  <div className="search-info">
                    <p className="search-title">{movie.Title}</p>
                    <div className="search-meta">
                      <span className="search-year">{movie.Year}</span>
                      <span className="search-type-badge">{movie.Type}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}

      <Footer />
    </div>
  );
}