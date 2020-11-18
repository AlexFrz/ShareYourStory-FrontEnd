import React from "react";
import { Redirect, Link } from "react-router-dom";
import styled from "styled-components";

const red = "#e20001";

const StyledButton = styled.button`
  margin: 0 auto;
  border: none;

  padding: 10px 60px;
  border-radius: 5px;
  color: ${red};
  border: 1px solid ${red};
  background-color: white;
  font-family: "Poppins";
  font-weight: bold;
  font-size: 3vh;
  position: absolute;
  top: 15px;
  right: 10px;
  &:hover {
    background-color: ${red};
    color: white;
  }
`;

function DonateButton() {
  return (
    <>
      <Link to="/donate">
        <StyledButton>DONATE</StyledButton>
      </Link>
    </>
  );
}

export default DonateButton;
