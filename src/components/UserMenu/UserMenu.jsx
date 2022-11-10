import { Box } from 'components/Box';
import { StyledUserText, StyledBtn } from './UserMenu.styled';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { userName } from 'redux/auth/auth-selectors';
import { logout } from 'redux/auth/auth-operations';

export default function UserMenu() {
  const user = useSelector(userName);
  const dispatch = useDispatch();
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
      <StyledBtn onClick={() => dispatch(logout())}>Log out</StyledBtn>
    </Box>
  );
}
