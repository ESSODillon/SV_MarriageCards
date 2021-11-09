import React, { useState, useEffect } from "react";

export default function ViewChar(props) {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("data/characters.json")
      .then((response) => response.json())
      .then((data) => {
        setCharacters(data);
        console.log(data);
      });
  }, []);

  return <div></div>;
}
