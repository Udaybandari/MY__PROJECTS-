
import { useState, useRef } from "react";

function SearchBar({ onSearch }) {

  const [search, setSearch] = useState("");
  const inputRef = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(search);
  };

  const handleClear = () => {
    setSearch("");
    onSearch("");
    inputRef.current.focus();
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex gap-2 w-full max-w-xl mx-auto"
    >
      <input
        ref={inputRef}
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search products..."
        className="flex-1 border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-5 rounded-lg"
      >
        Search
      </button>

      {search && (
        <button
          type="button"
          onClick={handleClear}
          className="bg-gray-200 px-4 rounded-lg"
        >
          Clear
        </button>
      )}
    </form>
  );
}

export default SearchBar;
