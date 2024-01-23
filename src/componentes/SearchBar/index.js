import React from 'react';
import './SearchBar.css';

const SearchBar = ({ value, onChange, onClick }) => {
  return (
    <input
      className="search"
      key="search"
      type="search"
      placeholder="Busque aqui o nome do personagem"
      value={value}
      onChange={onChange}
      onClick={onClick}
    />
  );
};

export default SearchBar;
