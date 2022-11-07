import React from 'react';
import { StyledSignUpPageContainer } from './SignUpPage.styled';
import SignUpForm from 'components/SignUpForm/SignUpForm';

export default function SignUpPage() {
  return (
    <StyledSignUpPageContainer>
      <SignUpForm />
    </StyledSignUpPageContainer>
  );
}
