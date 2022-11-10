import PhoneBook from 'components/PhoneBook/PhoneBook';
import { StyledContactsPageContainer } from './ContactsPage.styled';
//redux
import { useSelector } from 'react-redux';

import { isLogin } from 'redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';

export default function ContactsPage() {
  const isUserLogined = useSelector(isLogin);

  if (!isUserLogined) {
    return <Navigate to="/" />;
  }
  return (
    <StyledContactsPageContainer>
      <PhoneBook />
    </StyledContactsPageContainer>
  );
}
