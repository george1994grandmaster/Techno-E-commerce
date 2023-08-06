
import { FC } from "react";
import { useDispatch } from "react-redux";
import { filterProductsByLetter } from "../store/productsSlice";


const SearchBar: FC = () => {

  const dispatch = useDispatch();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    dispatch(filterProductsByLetter(query)); // Dispatch the action to filter products
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
}

export default SearchBar;


  