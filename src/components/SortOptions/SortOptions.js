import React from 'react';
import './SortOptions.css';

const SortOptions = ({ onSortChange }) => {
  const handleSortChange = (e) => {
    onSortChange(e.target.value);
  };

  return (
    <div className="sort-options">
      <label>
        Sort By:
        <select onChange={handleSortChange}>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </select>
      </label>
    </div>
  );
};

export default SortOptions;
