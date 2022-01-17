import React from "react";

function Filter({ value, onChange }) {
  return (
    <div>
      <label for="filter">Find contacts by name </label>
      <input
        id="filter"
        type="text"
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}

export default Filter;
