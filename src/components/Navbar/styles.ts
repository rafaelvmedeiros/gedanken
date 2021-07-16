import styled from 'styled-components';

export const NavbarWrapper = styled.nav`
  background: #161616;
  height: 100px;
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const NavbarLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  background: #161616;
  color: #fff;
  padding-left: 40px;
  font-size: 28px;
  font-weight: 700;
  max-width: 200px;
`;

export const NavbarContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  max-width: 800px;
  padding-left: 80px;
`;

export const List = styled.ul`
  li + li {
    border-left-style: solid;
    border-left-color: #ccc;
    border-left-width: 1px;
  }
`;

export const Item = styled.li`
  display: inline;
  padding: 0 8px 0 8px;
  color: #fff;
`;

export const NavbarRight = styled.div`
  flex: 1;
  display: flex;
  max-width: 300px;
  padding-right: 40px;
`;
