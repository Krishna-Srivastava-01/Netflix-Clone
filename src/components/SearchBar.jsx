import React from 'react'
import "./SearchBar.css";

const SearchBar = ({ value, onChange }) => {
  return (
    <div>
      <span className="searchbar-icon">⌕</span>
      <input
        type="text"
        placeholder="Search movies, shows..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {value && (
        <button className="searchbar-clear" onClick={() => onChange("")}>
          ✕
        </button>
      )}
    </div>
  )
}

export default SearchBar