import React, { useState, useEffect } from "react";
import Card from "./Card";
import Modal from "@mui/material/Modal";

export default function ViewChar(props) {
  const [bachelors, setBachelors] = useState([]);
  const [bachelorettes, setBachelorettes] = useState([]);
  const [showModal, setModalOpen] = useState(true);
  const [chars, setChars] = useState([]);
  const [selectedChar, selectChar] = useState({});

  useEffect(() => {
    fetch("data/characters.json")
      .then((response) => response.json())
      .then((data) => {
        setChars(data);

        setBachelorettes(data[0].Bachelorettes);
        setBachelors(data[1].Bachelors);
      });
  }, []);

  // console.log(chars[0].Bachelors[0]);

  const guys = bachelors.map((guy, key) => (
    <Card
      num={guy.num}
      id={guy.id}
      name={guy.name}
      area={guy.area}
      address={guy.address}
      birthday={guy.birthday}
      family={guy.family}
      friends={guy.friends}
      gifts={guy.gifts}
      image={guy.image}
      showInfo={showInfo}
    />
  ));

  const gals = bachelorettes.map((gal, key) => (
    <Card
      num={gal.num}
      id={gal.id}
      name={gal.name}
      area={gal.area}
      address={gal.address}
      birthday={gal.birthday}
      family={gal.family}
      friends={gal.friends}
      gifts={gal.gifts}
      image={gal.image}
      showInfo={showInfo}
    />
  ));

  return (
    <div className="content">
      <Modal
        open={showModal}
        onClose={() => {
          setModalOpen(false);
        }}
      >
        <div id="infoBox">
          <h1>Dillon</h1>
        </div>
      </Modal>

      <div className="headers">
        <h1 className="SVFont">Stardew Valley</h1>
        <h2 className="SVFont">Marriage Cards</h2>
      </div>

      <div className="characters">
        <div className="row">{guys}</div>
        <div className="row">{gals}</div>
      </div>
    </div>
  );

  function showInfo(charID, charKey) {
    // if the selected character ID is greater than 5, select the bachelors. If the selected character ID is less than 6, select the bachelorettes.

    // Bachelorettes
    if (charID < 6) {
      console.log(chars[0].Bachelorettes[charKey]);
      selectChar(chars[0].Bachelorettes[charKey]);
    }

    // Bachelors
    if (charID > 5) {
      console.log(chars[1].Bachelors[charKey]);
      selectChar(chars[1].Bachelors[charKey]);
    }

    setModalOpen(true);
  }
}
