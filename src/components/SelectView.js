// This file will hold three buttons, which have on clicks that let you decide if you want to view Bachelors, Bachelorettes, or Both. This can be done using if statements

// Animate buttons and carousels in and out. Also maybe a back button??

// This function will be what is in App.js

import React, { useState } from "react";
import Bachelors from "../characters/Bachelors";
import Bachelorettes from "../characters/Bachelorettes";
import ViewAll from "../characters/ViewAll";

export default function SelectView() {
  const [view, setView] = useState(<ViewAll />);

  return (
    <div className="content">
      <button onClick={setBachelors}>Bachelors</button>
      <button onClick={setBachelorettes}>Bachelorettes</button>
      <button onClick={setViewAll}>View All</button>

      {view}
    </div>
  );

  function setBachelors() {
    setView(<Bachelors />);
  }

  function setBachelorettes() {
    setView(<Bachelorettes />);
  }

  function setViewAll() {
    setView(<ViewAll />);
  }
}
