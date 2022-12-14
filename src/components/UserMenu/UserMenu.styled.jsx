import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledUserText = styled.span`
  font-family: 'Kolker Brush', cursive;
  display: inline-block;
  height: 20px;
  padding: 10px;
  font-size: 16px;
  margin-right: 10px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: inset 2px 2px 2px 0px rgba(0, 0, 0, 0.75);
`;

export const StyledBtn = styled.button`
  font-family: 'Kolker Brush', cursive;
  padding: 2px;

  font-size: 16px;
  border: 1px solid #000000;
  border-radius: 4px;
  box-shadow: 0px 2px 2px #000;
  cursor: pointer;
  background-color: #fff;

  &:hover {
    background-color: #dddddd;
  }
`;

export const StyledLink = styled(NavLink)`
  margin-right: 10px;
  font-family: 'Kolker Brush', cursive;
  font-size: 24px;
  color: ${p => p.theme.colors.white};
  text-shadow: 0px 2px 6px #000;

  &.active {
    text-shadow: 2px 2px 6px #fff;
  }

  &:hover {
    text-shadow: 2px 2px 6px #fff;
  }
`;
