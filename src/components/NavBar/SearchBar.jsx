import React from "react";
import { useState } from "react";

import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

const SearchBar = ({setSearchQuery}) => (
    <form>
      <TextField
        id="search-bar"
        className="searchPokemon"
        onInput={(e) => {
          setSearchQuery(e.target.value);
        }}
        label="Enter a pokemon..."
        variant="outlined"
        placeholder="Search..."
        size="small"
      />
      <IconButton type="submit" aria-label="search">
        <SearchIcon style={{ fill: "white" }} />
      </IconButton>
    </form>
  );

export default SearchBar