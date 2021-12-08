import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Modal from "@mui/material/Modal";
import Carousel from "react-elastic-carousel";

export default function Bachelorettes() {
  const [bachelorettes, setBachelorettes] = useState([]);
  const [showModal, setModalOpen] = useState(false);
  const [chars, setChars] = useState([]);
  const [selectedChar, selectChar] = useState({});

  useEffect(() => {
    fetch("data/characters.json")
      .then((response) => response.json())
      .then((data) => {
        setChars(data);

        setBachelorettes(data[0].Bachelorettes);
      });
  }, []);

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
          <h1>{selectedChar.name}</h1>
          <img src={selectedChar.image}></img>
          <img
            className="dialogue_box"
            src="../../public/data/img/dialogue_box.png"
          ></img>
        </div>
      </Modal>

      <Carousel itemsToShow={3}>
        <div>{gals[0]}</div>
        <div>{gals[1]}</div>
        <div>{gals[2]}</div>
        <div>{gals[3]}</div>
        <div>{gals[4]}</div>
        <div>{gals[5]}</div>
      </Carousel>
    </div>
  );

  function showInfo(charID, charKey) {
    // If the selected character ID is less than 6, select the bachelorettes.

    // Bachelorettes
    if (charID < 6) {
      selectChar(chars[0].Bachelorettes[charKey]);
    }

    setModalOpen(true);
  }
}
