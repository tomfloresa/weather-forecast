import React from "react";

// Styles
import { CardWrapper } from "./Card.styled";

const Card = ({ children, ...props }) => {
  return <CardWrapper {...props}>{children && children}</CardWrapper>;
};

export default Card;