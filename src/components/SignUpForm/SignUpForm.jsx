import { Box } from 'components/Box';
import { useState } from 'react';

import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import {
  StyledFormContainer,
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledButton,
} from './SignUpForm.styled';

export default function SignUpForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isShowPass, setIsShowPass] = useState(false);

  const handlerSubmitForm = e => {
    e.preventDefault();

    onSubmit({ name, email, password });
  };

  const toggleShowPass = () => {
    setIsShowPass(!isShowPass);
  };

  const handlerChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
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
      <p>Please register</p>
      <StyledForm onSubmit={handlerSubmitForm}>
        <StyledLabel htmlFor="name">Name</StyledLabel>
        <StyledInput
          onChange={handlerChange}
          type="text"
          value={name}
          id="name"
          name="name"
          required
        />

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
        <StyledButton type="submit">Sign up</StyledButton>
      </StyledForm>
    </StyledFormContainer>
  );
}
