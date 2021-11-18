import React, { useState, useEffect } from "react";
import Card from "./Card";

export default function ViewChar(props) {
  const [bachelors, setBachelors] = useState([]);
  const [bachelorettes, setBachelorettes] = useState([]);

  useEffect(() => {
    fetch("data/characters.json")
      .then((response) => response.json())
      .then((data) => {
        setBachelorettes(data[0].Bachelorettes);
        setBachelors(data[1].Bachelors);
      });
  }, []);

  const guys = bachelors.map((guy, key) => (
    <Card
      id={key}
      name={guy.name}
      area={guy.area}
      address={guy.address}
      birthday={guy.birthday}
      family={guy.family}
      friends={guy.friends}
      gifts={guy.gifts}
      image={guy.image}
    />
  ));

  const gals = bachelorettes.map((gal, key) => (
    <Card
      id={key}
      name={gal.name}
      area={gal.area}
      address={gal.address}
      birthday={gal.birthday}
      family={gal.family}
      friends={gal.friends}
      gifts={gal.gifts}
      image={gal.image}
    />
  ));

  // console.log(characters[0].Bachelorettes[0]);

  return (
    <div className="content">
      <div className="headers">
        <h1 className="SVFont">Stardew Valley</h1>
        <h2 className="SVFont">Marriage Cards</h2>
      </div>

      <div className="characters">
        <div>{guys}</div>
        <div>{gals}</div>
      </div>
    </div>
  );
}
