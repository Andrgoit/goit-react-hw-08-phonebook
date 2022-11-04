import { Box } from 'components/Box';
import items from './items';
import { StyledList, StyledItem, StyledLink } from './AuthBlock.styled';

export default function AuthBlock() {
  const elements = items.map(({ id, to, text }) => (
    <StyledItem key={id}>
      <StyledLink href={to}>{text}</StyledLink>
    </StyledItem>
  ));
  return (
    <Box>
      <StyledList>{elements}</StyledList>
    </Box>
  );
}
