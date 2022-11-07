import PhoneBook from 'components/PhoneBook/PhoneBook';
import { StyledContactsPageContainer } from './ContactsPage.styled';

export default function ContactsPage() {
  return (
    <StyledContactsPageContainer>
      <PhoneBook />
    </StyledContactsPageContainer>
  );
}
