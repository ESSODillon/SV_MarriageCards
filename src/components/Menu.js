// This file will hold three buttons, which have on clicks that let you decide if you want to view Bachelors, Bachelorettes, or Both. This can be done using if statements

// Animate buttons and carousels in and out. Also maybe a back button??

// This function will be what is in App.js

import { useState } from "react";
import Button from "@mui/material/Button";

export default function Menu({ bachelors, bachelorettes, viewAll }) {
  const [buttonWidth, setButtonWidth] = useState("30%");

  window.addEventListener("load", changeButtonWidth);
  window.addEventListener("resize", changeButtonWidth);

  return (
    <div className="content">
      <div className="menu">
        <img
          className="menu_button"
          src={process.env.PUBLIC_URL + "/data/img/guys.png"}
          onClick={bachelors}
        />
        <img
          className="menu_button"
          src={process.env.PUBLIC_URL + "/data/img/gals.png"}
          onClick={bachelorettes}
        />
        <img
          className="menu_button"
          src={process.env.PUBLIC_URL + "/data/img/viewAll.png"}
          onClick={viewAll}
        />
      </div>
    </div>
  );

  function changeButtonWidth() {
    if (window.innerWidth > 1200) {
      setButtonWidth("30%");
    }

    if (window.innerWidth < 1200) {
      setButtonWidth("50%");
    }
  }
}
