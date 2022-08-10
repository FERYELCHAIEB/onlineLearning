import { React, useState } from "react";
import TextField from "@mui/material/TextField";



function Search() {
  return (
    <div className="main">
      <h1 className="rech">React Search</h1>
      <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
     
    </div>
  );
}

export default Search;