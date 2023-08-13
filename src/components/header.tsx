import { FC } from "react";
import SearchBar from "./searchBar";
import Cart from "./cart";

const Header: FC = () => {
  return (
    <>
      <SearchBar/>
      <Cart/>
    </>
  )
};

export default Header;