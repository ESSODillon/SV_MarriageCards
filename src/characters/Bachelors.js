import React, { useState, useEffect } from "react";
import Card from "../components/Card";
import Modal from "@mui/material/Modal";
import Carousel, { consts } from "react-elastic-carousel";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import CircleIcon from "@mui/icons-material/Circle";

export default function Bachelors({ back }) {
  const [bachelors, setBachelors] = useState([]);
  const [showModal, setModalOpen] = useState(false);
  const [chars, setChars] = useState([]);
  const [selectedChar, selectChar] = useState({});
  const [cardNum, setCardNum] = useState(3);

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

      <Carousel
        className="carousel"
        renderArrow={myArrow}
        itemsToShow={cardNum}
        renderPagination={({ pages, activePage, onClick }) => {
          return (
            <div direction="row">
              {pages.map((page) => {
                const isActivePage = activePage === page;
                return (
                  <CircleIcon
                    key={page}
                    onClick={() => onClick(page)}
                    active={isActivePage}
                    className="pagination_circle"
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
