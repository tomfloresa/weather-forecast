import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

// Styles
const LoaderWrapper = motion.custom(styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  background-color: ${p => p.theme.colors.main};
  z-index: 50;
`);

const LoaderCircle = motion.custom(styled.img`
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`);

const Loader = ({ deployed }) => {
  return (
    <React.Fragment>
      {deployed && (
        <LoaderWrapper>
          <LoaderCircle
            src={require("../../assets/img/loader.svg")}
            animate={{ rotate: 360 }}
            transition={{
              duration: 1.8,
              ease: "linear",
              loop: Infinity
            }}
          />
        </LoaderWrapper>
      )}
    </React.Fragment>
  );
};

export default Loader;
