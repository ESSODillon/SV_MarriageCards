import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Modal from "@mui/material/Modal";
import Carousel, { consts } from "react-elastic-carousel";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export default function ViewChar({ back }) {
  const [bachelorettes, setBachelorettes] = useState([]);
  const [showModal, setModalOpen] = useState(false);
  const [chars, setChars] = useState([]);
  const [selectedChar, selectChar] = useState({});
  const [cardNum, setCardNum] = useState(3);

  const [friends, setFriends] = useState({});
  const [family, setFamily] = useState({});
  const [giftLove, setGiftLove] = useState({});
  const [giftHate, setGiftHate] = useState({});

  useEffect(() => {
    window.addEventListener("load", changeCarousel);
    window.addEventListener("resize", changeCarousel);

    fetch("data/characters.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setChars(data);
        setBachelorettes(data[0].Bachelorettes);
        changeCarousel();
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
      image_two={gal.image_two}
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

      <img
        className="back_button"
        src={process.env.PUBLIC_URL + "/data/img/back.png"}
        onClick={back}
      />
    </div>
  );

  function changeCarousel() {
    if (window.innerWidth > 1050) {
      console.log("Hello");
      setCardNum(3);
    }

    if (window.innerWidth < 1050) {
      setCardNum(2);
    }

    if (window.innerWidth < 750) {
      setCardNum(1);
    }
  }

  function showInfo(charID, charKey) {
    // If the selected character ID is less than 6, select the bachelorettes.

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
