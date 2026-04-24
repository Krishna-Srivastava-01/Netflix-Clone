import { useState, useEffect } from "react";
import "./app.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MovieRow from "./components/MovieRow";
import MovieModal from "./components/MovieModal";

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

const App = () => {
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
  
  return (
    <div>
      
    </div>
  )
}

export default App