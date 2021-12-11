// This file lets you decide if you want to view Bachelors, Bachelorettes, or Both. This function will be what is in App.js
// Imports for every file in our program, since the three views contains Card.js
import React, { useState } from "react";
import Bachelors from "../characters/Bachelors";
import Bachelorettes from "../characters/Bachelorettes";
import ViewAll from "../characters/ViewAll";
import Menu from "./Menu";

export default function SelectView() {
  // View starts out on the Menu as a sort of homepage. View is a React State since we're going to be updating it
  const [view, setView] = useState(
    <Menu
      bachelors={setBachelors}
      bachelorettes={setBachelorettes}
      viewAll={setViewAll}
    />
  );

  // Displays the view in HTML div, plugs in kind of like an MVC model
  return <div className="content">{view}</div>;

  // Selector for the bachelors view, and uses a back button to get back to Menu
  function setBachelors() {
    setView(<Bachelors back={setMenu} />);
  }

  // Selector for the bachelors view, and uses a back button to get back to Menu
  function setBachelorettes() {
    setView(<Bachelorettes back={setMenu} />);
  }

  // Selector for the bachelors view, and uses a back button to get back to Menu
  function setViewAll() {
    setView(<ViewAll back={setMenu} />);
  }

  // Selector for the Menu view, uses the above three functions for Menus buttons
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
