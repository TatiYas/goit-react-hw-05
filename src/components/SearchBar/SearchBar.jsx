

import PropTypes from "prop-types";
import s from "./SearchBar.module.css";

const SearchBar = ({ onSubmit, filterValue }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.elements.search.value.trim();
    onSubmit(value);
  };

  return (
    <div className={s.searchf}>
      <form onSubmit={handleSubmit}>
        <input
          className={s.input}
          name="search"
          type="search"
          placeholder="Search"
          defaultValue={filterValue}
        />
        <button className={s.button} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired,
};

export default SearchBar



