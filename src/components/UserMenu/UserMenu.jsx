import { Box } from 'components/Box';
import { StyledBtn, StyledLink } from './UserMenu.styled';
//redux
import { useDispatch } from 'react-redux';
// import { userName, userEmail } from 'redux/auth/auth-selectors';
import { logout } from 'redux/auth/auth-operations';

export default function UserMenu() {
  // const user = useSelector(userName);
  // const email = useSelector(userEmail);
  const dispatch = useDispatch();

  return (
    <Box display="flex" alignItems="center">
      <StyledLink to="/contacts">Contacts</StyledLink>
      {/* <StyledUserText>
        Hi, {user} ({email})
      </StyledUserText> */}
      <StyledBtn onClick={() => dispatch(logout())}>Logout</StyledBtn>
    </Box>
  );
}
