import React from 'react';
import { NavLink } from 'react-router-dom';
import Profile from '../Profile';

import {
  NavbarWrapper,
  NavbarLeft,
  NavbarContent,
  NavbarRight,
  List,
  Item,
} from './styles';

const Navbar: React.FC = () => (
  <NavbarWrapper>
    <NavbarLeft>
      <span>GEDANKEN</span>
    </NavbarLeft>
    <NavbarContent>
      <List>
        <Item>
          <NavLink to="/">Principal</NavLink>
        </Item>
        <Item>
          <NavLink to="/transacions">Despesas</NavLink>
        </Item>
      </List>
    </NavbarContent>
    <NavbarRight>
      <Profile />
    </NavbarRight>
  </NavbarWrapper>
);

export default Navbar;
