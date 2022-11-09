import { StyledLoginPageContainer } from './LoginPage.styled';
import LoginForm from 'components/LoginForm/LoginForm';
//redux
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'redux/auth/auth-operations';

import { isLogin } from 'redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';

export default function LoginPage() {
  const dispatch = useDispatch();
  const isUserLogined = useSelector(isLogin);

  const handlerSubmit = loginData => {
    dispatch(login(loginData));
  };

  // если пользователь залогинен, то его перебросит сразу на тел.книгу
  if (isUserLogined) {
    return <Navigate to="/contacts" />;
  }

  return (
    <StyledLoginPageContainer>
      <LoginForm onSubmit={handlerSubmit} />
    </StyledLoginPageContainer>
  );
}
