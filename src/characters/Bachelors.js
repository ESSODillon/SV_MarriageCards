import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Modal from "@mui/material/Modal";
import Carousel from "react-elastic-carousel";

export default function Bachelors() {
  const [bachelors, setBachelors] = useState([]);
  const [showModal, setModalOpen] = useState(false);
  const [chars, setChars] = useState([]);
  const [selectedChar, selectChar] = useState({});

  useEffect(() => {
    fetch("data/characters.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setChars(data);
        setBachelors(data[1].Bachelors);
      });
  }, []);

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
        <div>{guys[0]}</div>
        <div>{guys[1]}</div>
        <div>{guys[2]}</div>
        <div>{guys[3]}</div>
        <div>{guys[4]}</div>
        <div>{guys[5]}</div>
      </Carousel>
    </div>
  );

  function showInfo(charID, charKey) {
    // if the selected character ID is greater than 5, select the bachelors.

    // Bachelors
    if (charID > 5) {
      selectChar(chars[1].Bachelors[charKey]);
    }

    setModalOpen(true);
  }
}
