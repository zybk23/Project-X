import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchProducts } from "../store/actions";

const Searchbar = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const handleChangeText = (e) => {
    setText(e.target.value);
  };
  const handleSearchProducts = () => {
    dispatch(searchProducts(text));
  };
  return (
    <div className="searchbar_container">
      <img src="images/search_icon.png" alt="" />
      <input
        value={text}
        onChange={handleChangeText}
        // onKeyPress={handleSearchProducts}
        type="text"
        placeholder="Ürün Ara"
        className="searchbar_container_input"
      />
      <button
        onClick={handleSearchProducts}
        className="searchbar_container_button"
      >
        Ara
      </button>
    </div>
  );
};

export default Searchbar;
