import { useState } from "react";
import "./Navbar.css";

const NAV_ITEMS = ["Home", "TV Shows", "Movies", "New & Popular", "My List"];

export default function Navbar({
  onSearch, searchQuery, activeNav, onNavClick,
  filterType, onFilterChange, filterTypes, theme, onThemeToggle,
}) {
  const [searchOpen, setSearchOpen] = useState(false);

  const handleSearchIconClick = () => {
    setSearchOpen(true);
  };

  const handleBlur = () => {
    if (!searchQuery) setSearchOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="navbar-logo">NETFLUX</span>
        <ul className="navbar-links">
          {NAV_ITEMS.map((item) => (
            <li
              key={item}
              className={activeNav === item ? "nav-active" : ""}
              onClick={() => onNavClick(item)}
            >
              {item}
              {activeNav === item && <span className="nav-underline" />}
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-right">
        <div className={"search-wrapper" + (searchOpen || searchQuery ? " expanded" : "")}>
          <span className="search-icon" onClick={handleSearchIconClick}>⌕</span>
          <input
            type="text"
            placeholder="Search titles, genres…"
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
            onFocus={() => setSearchOpen(true)}
            onBlur={handleBlur}
          />
          {searchQuery && (
            <span className="search-clear" onClick={() => onSearch("")}>✕</span>
          )}
        </div>
        {/* <button
          className="theme-toggle"
          onClick={onThemeToggle}
          title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        >
          {theme === "dark" ? "☀" : "☾"}
        </button>
        <div className="avatar">N</div> */}
      </div>
    </nav>
  );
}