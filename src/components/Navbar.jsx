import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <NavWrapper>
      <Link to="/">
        <h4>Social Media Videos Downloader</h4>
      </Link>
    </NavWrapper>
  );
};

const NavWrapper = styled.nav`
  width: 100%;
  height: 40px;
  background-color: teal;
  color: #fff;
  box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.1);

  display: flex;
  align-items: center;
  justify-content: center;

  position: sticky;
  top: 0;
  z-index: 99;

  a {
    text-decoration: none;
  }

  h4 {
    color: #fff;
    cursor: pointer;
  }
`;

export default Navbar;
