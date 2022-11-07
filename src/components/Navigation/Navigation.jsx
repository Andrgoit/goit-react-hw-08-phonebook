import { Box } from 'components/Box';
import items from './items';
import { StyledList, StyledItem, StyledLink } from './Navigation.styled';

export default function Navigation() {
  const elements = items.map(({ id, to, text }) => (
    <StyledItem key={id}>
      <StyledLink to={to}>{text}</StyledLink>
    </StyledItem>
  ));
  return (
    <Box>
      <StyledList>{elements}</StyledList>
    </Box>
  );
}
