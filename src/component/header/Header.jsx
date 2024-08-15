import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Nav } from "../../index";

const MainHeader = styled.header`
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    height: 10rem;
  }
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
  }
`;
const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
        <h3>Logo</h3>
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

export default Header;
