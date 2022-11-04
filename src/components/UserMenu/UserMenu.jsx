import { Box } from 'components/Box';
import { StyledUserText, StyledBtn } from './UserMenu.styled';

export default function UserMenu() {
  return (
    <Box
      //   padding={3}
      display="flex"
      alignItems="center"
      //   height="30px"
      //   justifyContent="space-between"
      //   borderRadius="15px"
      //   boxShadow="inset 2px 2px 2px 0px rgba(0, 0, 0, 0.75)"
      //   background="#ffffff"
    >
      <StyledUserText>Hi, User</StyledUserText>
      <StyledBtn>Log out</StyledBtn>
    </Box>
  );
}
