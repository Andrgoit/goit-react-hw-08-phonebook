import { Box } from 'components/Box';
import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';

export default function Header() {
  return (
    <Box
      padding={3}
      as="header"
      minHeight="70px"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      borderBottom="1px solid #000000"
      boxShadow="0px 2px 6px #888888"
      background="#1d528d"
    >
      <Logo />
      <UserMenu />
      <Navigation />
    </Box>
  );
}
