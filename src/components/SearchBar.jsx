import "./SearchBar.css";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="searchbar">
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
  );
}