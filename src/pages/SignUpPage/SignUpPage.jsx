import React from 'react';
import { StyledSignUpPageContainer } from './SignUpPage.styled';
import SignUpForm from 'components/SignUpForm/SignUpForm';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { signup } from 'redux/auth/auth-operations';
import { isLogin } from 'redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';

export default function SignUpPage() {
  const dispatch = useDispatch();
  const isUserLogined = useSelector(isLogin);

  const handlerSubmit = signupData => {
    dispatch(signup(signupData));
  };

  // если пользователь залогинен, то его перебросит сразу на тел.книгу
  if (isUserLogined) {
    return <Navigate to="/contacts" />;
  }

  return (
    <StyledSignUpPageContainer>
      <SignUpForm onSubmit={handlerSubmit} />
    </StyledSignUpPageContainer>
  );
}
