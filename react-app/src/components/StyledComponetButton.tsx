import React from "react";
import styled from "styled-components";

const CuteButton = styled.button`
  background-color: pink;
`;

const StyledComponetButton = () => {
  return (
    <>
      <CuteButton>Im normal pink</CuteButton>
    </>
  );
};

export default StyledComponetButton;
