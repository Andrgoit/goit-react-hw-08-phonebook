import styled from 'styled-components';

export const StyledFormContainer = styled.div`
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 2px 2px #3d3c3c;
  text-align: center;
`;

export const StyledForm = styled.form`
  display: flex;
  gap: 20px;
  flex-direction: column;

  /* background-color: #fff; */
`;

export const StyledLabel = styled.label`
  font-family: 'Kolker Brush', cursive;
  font-size: 16px;
  color: ${p => p.theme.colors.black};
`;

export const StyledInput = styled.input`
  font-size: 16px;
  outline: none;
  padding: 5px;
  border: 1px solid #000;
  border-radius: 5px;
`;

export const StyledButton = styled.button`
  padding: 5px;
  cursor: pointer;
  border: 1px solid #8d8a8a;
  border-radius: 4px;
  box-shadow: 0px 2px 6px #000;

  &:hover {
    background-color: #c9c6c6;
  }
`;
