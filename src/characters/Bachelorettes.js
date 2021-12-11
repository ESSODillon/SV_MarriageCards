// Imports for React Hooks useState and useEffect.
import React, { useState, useEffect } from "react";
// Import for Card.js blueprint for plugging JSON data into
import Card from "../components/Card";
// import for React Elastic Carousel to cycle through cards
import Carousel, { consts } from "react-elastic-carousel";
// Imports for Material UI components and icons
import Modal from "@mui/material/Modal";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export default function ViewChar({ back }) {
  // React states for characters, bachelors, and bachelorettes, which lets us create both presentations seen in Bachelors.js and Bachelorettes.js
  const [chars, setChars] = useState([]);
  const [bachelorettes, setBachelorettes] = useState([]);

  // React state for one singular selected character, which lets the program decide which characters data to present on the Modal
  const [selectedChar, selectChar] = useState({});

  // React state that starts as false, and turns true when you activate the modal to visible
  const [showModal, setModalOpen] = useState(false);

  // React state that determines how many cards the user can see on the carousel, changes state depending on screen width
  const [cardNum, setCardNum] = useState(3);

  // All of these react states are for manipulating JSON arrays, since we need to use the .join() function later.
  const [friends, setFriends] = useState({});
  const [family, setFamily] = useState({});
  const [giftLove, setGiftLove] = useState({});
  const [giftHate, setGiftHate] = useState({});

  useEffect(() => {
    // Adds event listeners for document load and window resize so the program can decide how many cards should be on the carousel
    window.addEventListener("load", changeCarousel);
    window.addEventListener("resize", changeCarousel);

    // Fetches JSON data from the character.json file. Sets headers to solve a weird bug, thanks Stack Overflow.
    // Sets the characters, bachelorettes and bachelors based on the JSON file format
    // Activates the change carousel function when the page is loaded
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
        changeCarousel();
      });
  }, []);

  // Maps cards based on the bachelorettes data, and sends over variables and functions for us to use in Card.js
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
      image_two={gal.image_two}
      showInfo={showInfo}
    />
  ));

  return (
    <div className="content">
      {/* HTML for the Modal component, sets the Modal to false when you close it, and determines its visibility based on the showModal state */}
      <Modal
        open={showModal}
        onClose={() => {
          setModalOpen(false);
        }}
      >
        {/* Styling for the content in the modal. infoBox is an image called dialogue_box.png */}
        <div className="infoBox">
          <div className="infoBox_left">
            <div className="column1">
              <p className="modal_info">
                Birthday:{" "}
                <span className="modal_info_2">{selectedChar.birthday}</span>
              </p>
              <p className="modal_info">
                Area: <span className="modal_info_2">{selectedChar.area}</span>
              </p>
              <p className="modal_info">
                Address:{" "}
                <span className="modal_info_2">{selectedChar.address}</span>
              </p>
              <p className="modal_info">
                Family: <span className="modal_info_2">{family}</span>
              </p>
            </div>

            <div className="column2">
              <p className="modal_info">
                Friends: <span className="modal_info_2">{friends}</span>
              </p>
              <p className="modal_info">
                Gifts that {selectedChar.name} loves:{" "}
                <span className="modal_info_2">{giftLove}</span>
              </p>
              <p className="modal_info">
                Gifts that {selectedChar.name} hates:{" "}
                <span className="modal_info_2">{giftHate}</span>
              </p>
            </div>
          </div>

          <div className="infoBox_right">
            <img src={selectedChar.image_two}></img>
            <h1>{selectedChar.name}</h1>
          </div>
        </div>
      </Modal>

      {/* Carousel to cycle through the bachelorettes. Custom styling for the arrows and pagination */}
      <Carousel
        renderArrow={myArrow}
        className="carousel"
        itemsToShow={cardNum}
        renderPagination={({ pages, activePage, onClick }) => {
          return (
            <div direction="row">
              {pages.map((page) => {
                const isActivePage = activePage === page;
                return (
                  <input
                    key={page}
                    type="radio"
                    name="radio"
                    value={page}
                    onClick={() => onClick(page)}
                    active={isActivePage}
                    checked={isActivePage}
                  />
                );
              })}
            </div>
          );
        }}
      >
        <div>{gals[0]}</div>
        <div>{gals[1]}</div>
        <div>{gals[2]}</div>
        <div>{gals[3]}</div>
        <div>{gals[4]}</div>
        <div>{gals[5]}</div>
      </Carousel>

      <br />
      <br />

      {/* Back button to go back to the menu view */}
      <img
        className="back_button"
        src={process.env.PUBLIC_URL + "/data/img/back.png"}
        onClick={back}
      />
    </div>
  );

  // Determines window width, and sets the carousel to counts of 3, 2 or 1
  function changeCarousel() {
    // Big laptop screens, tvs and monitors
    if (window.innerWidth > 1050) {
      setCardNum(3);
    }

    // Small laptops and tablets
    if (window.innerWidth < 1050) {
      setCardNum(2);
    }

    // Phones
    if (window.innerWidth < 750) {
      setCardNum(1);
    }
  }

  // Determines whether or not the character selected is a bachelor, or a bachelorette. Then sets all the data for the Modal, and seperates array items with a comma and a space. At the end of all that, it sets modal open to true so the user can view the modal.
  function showInfo(charID, charKey) {
    // if the selected character ID is greater than 5, select the bachelors. If the selected character ID is less than 6, select the bachelorettes.

    // Bachelorettes
    if (charID < 6) {
      selectChar(chars[0].Bachelorettes[charKey]);
      setFriends(chars[0].Bachelorettes[charKey].friends.join(", "));
      setFamily(chars[0].Bachelorettes[charKey].family.join(", "));
      setGiftLove(chars[0].Bachelorettes[charKey].gifts.love.join(", "));
      setGiftHate(chars[0].Bachelorettes[charKey].gifts.hate.join(", "));
    }

    setModalOpen(true);
  }

  // function that custom styles the arrows on the Carousel
  function myArrow({ type, onClick, isEdge }) {
    const pointer =
      type === consts.PREV ? (
        <ArrowBackIosNewIcon className="arrow" />
      ) : (
        <ArrowForwardIosIcon className="arrow" />
      );
    return (
      <span className="arrow_box" onClick={onClick} disabled={isEdge}>
        {pointer}
      </span>
    );
  }
}
