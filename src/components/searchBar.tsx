
import { FC, useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { filterProductsByLetter } from "../store/productsSlice";

const SearchBar: FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
 
  const [searchValue, setSearchValue] = useState<string>("")

 const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchProductItem = event.target.value;
    setSearchValue(searchProductItem)
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      navigate(`/products/${searchValue}`);
      setSearchValue("");
    }
  };

  return (
    <>
      <input
        type="search"
        placeholder="Search products..."
        onChange={handleSearchChange}
        onKeyDown={handleKeyPress}
        value={searchValue}
      />
    </>
  );
};

export default SearchBar;



