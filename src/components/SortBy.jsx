import React from 'react';
import './SortBy.css';

const SortArticles = props => {
  return (
    <div className="sort_by_container">
      <form>
        <label htmlFor="sort_by">
          {' '}
          Sort By:
          <select
            onChange={props.handleChange}
            name="sort_by"
            className="sort_by_button"
          >
            <option selected disabled>
              Choose
            </option>
            <option value="created_at">Date</option>
            <option value="comment_count">Comments</option>
            <option value="votes">Votes</option>
          </select>
        </label>
      </form>
    </div>
  );
};

export default SortArticles;
