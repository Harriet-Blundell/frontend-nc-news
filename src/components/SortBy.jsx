import React from 'react';

const SortArticles = props => {
  return (
    <div>
      <p>Sort By: </p>
      <form>
        <label htmlFor="sort_by">
          <select onChange={props.handleChange} name="sort_by">
            <option selected disabled>
              Choose:
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
