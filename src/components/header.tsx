import { FC } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./searchBar";
import Cart from "./cart";

const Header: FC = () => {
  return (
    <>
      <SearchBar/>
      <Cart/>
      <Link to="/auth">login</Link>
    </>
  )
};

export default Header;