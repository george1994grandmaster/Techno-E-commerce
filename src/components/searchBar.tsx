import { FC, useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { StyledTextField, StyledTypography } from './material_Ui';
import { SearchIcon } from "./svgFormat";
import Button  from "./button"


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

  const handleSearchProductFind = () => {
    navigate(`/products/${searchValue}`);
    setSearchValue("");
  };

  return (
    <div className="d-flex ai-center" style={{height: "100%"}}>
      <StyledTextField padding="0" fullWidth variant="outlined" placeholder="Search" value={searchValue} style={{height: "100%", flex: "1"}}
        onChange={handleSearchChange} onKeyDown={handleKeyPress}/>
        <div className="searchIcon-content">
          <Button svg={<SearchIcon/>}  onClick={() => handleSearchProductFind()}/>
        </div>
    </div>
  );
};

export default SearchBar;



