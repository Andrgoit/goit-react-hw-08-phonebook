import styled from 'styled-components';

export const StyledHomePageContainer = styled.div`
  background: linear-gradient(
    270deg,
    rgb(93, 152, 219) 50%,
    rgb(186, 209, 234) 75%,
    rgb(93, 152, 219)
  );
  height: 100%;

  position: relative;
`;

export const StyledTextContainer = styled.div`
  max-width: 800px;
  background-color: ${p => p.theme.colors.white};
  border: none;
  border-radius: 10px;
  box-shadow: 0px 1px 1px 2px #adadad;
  padding: 10px;
  position: absolute;
  left: 30px;
  top: 400px;
  transform: rotate(6deg);
`;

export const StyledText = styled.p`
  font-family: 'Kolker Brush', cursive;
  font-size: 16px;
  color: ${p => p.theme.colors.black};
`;

export const StyledImgContainer = styled.div`
  position: absolute;
  max-width: 600px;
  right: 100px;
  top: 100px;
`;

export const StyledImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  transform: rotate(6deg);
`;
