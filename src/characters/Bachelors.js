import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Modal from "@mui/material/Modal";
import Carousel, { consts } from "react-elastic-carousel";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export default function ViewChar({ back }) {
  const [bachelors, setBachelors] = useState([]);
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
        setBachelors(data[1].Bachelors);
        changeCarousel();
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
      image_two={guy.image_two}
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

      <br />
      <br />

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
                    name="radio_set2"
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
        <div>{guys[0]}</div>
        <div>{guys[1]}</div>
        <div>{guys[2]}</div>
        <div>{guys[3]}</div>
        <div>{guys[4]}</div>
        <div>{guys[5]}</div>
      </Carousel>

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
    // if the selected character ID is greater than 5, select the bachelors.

    // Bachelors
    if (charID > 5) {
      selectChar(chars[1].Bachelors[charKey]);
      setFriends(chars[1].Bachelors[charKey].friends.join(" "));
      setFamily(chars[1].Bachelors[charKey].family.join(" "));
      setGiftLove(chars[1].Bachelors[charKey].gifts.love.join(", "));
      setGiftHate(chars[1].Bachelors[charKey].gifts.hate.join(", "));
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
