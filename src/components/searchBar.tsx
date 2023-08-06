
import React, { FC, useState } from "react";
import { Link } from "react-router-dom";

const SearchBar: FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
  };

  return (
    <>
      <input
        type="search"
        placeholder="Search products..."
        onChange={handleSearchChange}
      />
      <Link to={`/search/${searchQuery}`}>Search</Link>
    </>
  );
};

export default SearchBar;
  