import React from "react";
import PropTypes from "prop-types";
import Swiper from "react-id-swiper";

// Styles
// Version >= 2.4.0
import "swiper/css/swiper.css";

const Slider = ({ slides, config }) => (
  <Swiper {...config}>
    {slides && slides.map(slide => <div>{slide}</div>)}
  </Swiper>
);

Slider.propTypes = {
  slides: PropTypes.array.isRequired,
  config: PropTypes.object
};

export default Slider;
