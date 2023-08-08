
import { FC } from "react";
import { useNavigate } from 'react-router-dom';

const SearchBar: FC = () => {
  const navigate = useNavigate();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    navigate(`/products/${query}`);
  };

  return (
    <>
      <input
        type="search"
        placeholder="Search products..."
        onChange={handleSearchChange}
      />
    </>
  );
};

export default SearchBar;



/*import React, { FC, useState } from "react";
import { useNavigate } from 'react-router-dom';

const SearchBar: FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && searchQuery.trim() !== "") {
      navigate(`/search/${searchQuery}`);
    }
  };

  return (
    <>
      <input
        type="search"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleSearchChange}
        onKeyPress={handleKeyPress}
      />
    </>
  );
};

export default SearchBar;*/