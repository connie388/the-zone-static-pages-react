import React from "react";
import "../../styles/Slider.css";
import leftArrow from "../../assets/icons/angles-left-solid.svg";
import rightArrow from "../../assets/icons/angles-right-solid.svg";

export default function BtnSlider({ direction, moveSlide }) {
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img
        src={direction === "next" ? rightArrow : leftArrow}
        alt="direction arrow"
      />
    </button>
  );
}
