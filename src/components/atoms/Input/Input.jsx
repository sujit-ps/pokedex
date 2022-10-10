import React from "react";
import "./Input.css";
const options = [
  { label: "NORMAL", value: "NORMAL" },
  { label: "FIGHTING", value: "FIGHTING" },
  { label: "FLYING", value: "FLYING" },
  { label: "POISION", value: "POISION" },
  { label: "GROUND", value: "GROUND" },
  { label: "ROCK", value: "ROCK" },
];
function Input(props) {
  return (
    <section className="Search-Section">
      <div className="SearchBar">
        <label className="search-text">Search by</label>
        <input
          type="text"
          className="InputWidth"
          value={props.filterText}
          onChange={async (e) => await props.setFilterText(e.target.value)}
        />
      </div>
    </section>
  );
}
export default Input;
