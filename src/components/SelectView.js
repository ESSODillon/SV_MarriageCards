// This file will hold three buttons, which have on clicks that let you decide if you want to view Bachelors, Bachelorettes, or Both. This can be done using if statements

// Animate buttons and carousels in and out. Also maybe a back button??

// This function will be what is in App.js

import React, { useState } from "react";
import Bachelors from "../characters/Bachelors";
import Bachelorettes from "../characters/Bachelorettes";
import ViewAll from "../characters/ViewAll";
import Menu from "./Menu";

export default function SelectView() {
  const [view, setView] = useState(
    <Menu
      bachelors={setBachelors}
      bachelorettes={setBachelorettes}
      viewAll={setViewAll}
    />
  );

  return <div className="content">{view}</div>;

  function setBachelors() {
    setView(<Bachelors back={setMenu} />);
  }

  function setBachelorettes() {
    setView(<Bachelorettes back={setMenu} />);
  }

  function setViewAll() {
    setView(<ViewAll back={setMenu} />);
  }

  function setMenu() {
    setView(
      <Menu
        bachelors={setBachelors}
        bachelorettes={setBachelorettes}
        viewAll={setViewAll}
      />
    );
  }
}
