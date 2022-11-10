import { Box } from 'components/Box';
import { StyledBtn, StyledLink, StyledUserText } from './UserMenu.styled';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from 'redux/auth/auth-selectors';
import { logout } from 'redux/auth/auth-operations';

export default function UserMenu() {
  const user = useSelector(getUser);

  const dispatch = useDispatch();

  return (
    <Box display="flex" alignItems="center">
      <StyledLink to="/contacts">Contacts</StyledLink>
      <StyledUserText>
        Hi, {user.name} ({user.email})
      </StyledUserText>
      <StyledBtn onClick={() => dispatch(logout())}>Logout</StyledBtn>
    </Box>
  );
}
