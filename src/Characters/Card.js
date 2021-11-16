import React from "react";
// import { Button } from "@mui/material/Button";

function Bachelors({ name, area, address }) {
  return (
    <div className="App">
      {/* <Button>hey there</Button> */}
      <div className="Character">
        <h2>{name}</h2>
        <p>Lives In: {area}</p>
        <p>Address: {address}</p>
        {/* <p>{birthday.month}</p>
        <p>{birthday.day}</p> */}
      </div>
    </div>
  );
}

export default Bachelors;
