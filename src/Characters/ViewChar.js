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
    <Card id={key} name={guy.name} area={guy.area} address={guy.address} />
  ));

  const gals = bachelorettes.map((gal, key) => (
    <Card id={key} name={gal.name} area={gal.area} address={gal.address} />
  ));

  // console.log(characters[0].Bachelorettes[0]);

  return (
    <div>
      <div>{guys}</div>
      <div>{gals}</div>
    </div>
  );
}
