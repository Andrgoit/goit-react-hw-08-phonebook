import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledIconBg = styled.span`
  display: flex;
  width: 45px;
  height: 45px;
  background-color: ${p => p.theme.colors.white};
  border-radius: 50%;
  justify-content: center;
  align-items: center;
`;

export const StyledLogoText = styled(Link)`
  font-family: 'Kolker Brush', cursive;
  font-size: 24px;
  color: ${p => p.theme.colors.white};
  margin-left: ${p => p.theme.space[3]}px;
  text-shadow: 0px 2px 6px #000;
  text-decoration: none;

  &.active {
    text-shadow: 2px 2px 6px #fff;
  }
  &:hover {
    text-shadow: 2px 2px 6px #fff;
    cursor: pointer;
  }
`;
