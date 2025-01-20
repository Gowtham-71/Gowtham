import React from "react";
import { SearchBar, ClearButton } from "../style/StyleDesign";

const SearchBarComponent = ({ searchTerm, onSearchChange, onClearSearch }) => {
  return (
    <div style={{ position: "relative" }}>
      <SearchBar
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={onSearchChange}
      />
      {searchTerm && (
        <ClearButton onClick={onClearSearch}  style={{
            position: "absolute",
            right: "10px",
            top: "30%",
            transform: "translateY(-50%)",
            border: "none",
            background: "transparent",
            cursor: "pointer",
            fontSize: "16px",
          }}>✖</ClearButton>
      )}
    </div>
  );
};

export default SearchBarComponent;