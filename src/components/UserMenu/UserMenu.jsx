import { Box } from 'components/Box';
import { StyledUserText, StyledBtn } from './UserMenu.styled';
//redux
import { useSelector } from 'react-redux';
import { userName } from 'redux/auth/auth-selectors';

export default function UserMenu() {
  const user = useSelector(userName);
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
      <StyledUserText>Hi, {user}</StyledUserText>
      <StyledBtn>Log out</StyledBtn>
    </Box>
  );
}
