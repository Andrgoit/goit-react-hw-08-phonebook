import { Box } from 'components/Box';
import { useState } from 'react';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';

import {
  StyledFormContainer,
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledButton,
} from './LoginForm.styled';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(null);
  const [isShowPass, setIsShowPass] = useState(false);

  const handlerSubmitForm = e => {
    e.preventDefault();
    console.log('email', email, 'pass', password);
  };

  const toggleShowPass = () => {
    setIsShowPass(!isShowPass);
  };

  const handlerChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  return (
    <StyledFormContainer>
      <p>Please enter login information</p>
      <StyledForm onSubmit={handlerSubmitForm}>
        <StyledLabel htmlFor="email">E-mail</StyledLabel>
        <StyledInput
          onChange={handlerChange}
          type="email"
          value={email}
          id="email"
          name="email"
          required
        />
        <StyledLabel htmlFor="password">Password</StyledLabel>
        <Box display="flex" alignItems="center" gridGap="10px">
          <StyledInput
            type={isShowPass ? 'text' : 'password'}
            onChange={handlerChange}
            value={password}
            id="password"
            name="password"
            required
          />
          <span onClick={toggleShowPass}>
            {isShowPass ? (
              <AiOutlineEye size="24px" />
            ) : (
              <AiOutlineEyeInvisible size="24px" />
            )}
          </span>
        </Box>
        <StyledButton type="submit">Log in</StyledButton>
      </StyledForm>
    </StyledFormContainer>
  );
}
