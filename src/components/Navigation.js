import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const NavContainer = styled.nav`
  background-color: #006400;
  padding: 10px;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: space-around;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0 10px;
`;

const NavButton = styled(NavLink)`
  color: #FFFFFF;
  text-decoration: none;
  padding: 10px 20px;
  background-color: #98FF98;
  border-radius: 5px;
  transition: background-color 0.3s;

  &.active {
    background-color: #FFFFFF;
    color: #006400;
  }

  &:hover {
    background-color: #006400;
    color: #FFFFFF;
  }
`;

const Navigation = () => {
  return (
    <NavContainer>
      <NavList>
        <NavItem>
          <NavButton to="/">Welcome</NavButton>
        </NavItem>
        <NavItem>
          <NavButton to="/home">Home</NavButton>
        </NavItem>
        <NavItem>
          <NavButton to="/search">Search</NavButton>
        </NavItem>
        <NavItem>
          <NavButton to="/save">Save Trip</NavButton>
        </NavItem>
        <NavItem>
          <NavButton to="/feedback">Feedback</NavButton>
        </NavItem>
      </NavList>
    </NavContainer>
  );
};

export default Navigation;
