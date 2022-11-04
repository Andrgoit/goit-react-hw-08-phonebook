import styled from 'styled-components';

export const StyledList = styled.ul`
  margin: 0px;
  padding: 0px;
  display: flex;
  gap: 20px;
`;

export const StyledItem = styled.li`
  list-style: none;
`;

export const StyledLink = styled.a`
  font-family: 'Kolker Brush', cursive;
  font-size: 24px;
  color: ${p => p.theme.colors.white};
  text-shadow: 0px 2px 6px #000;

  &:hover {
    text-shadow: 2px 2px 6px #fff;
  }
`;
