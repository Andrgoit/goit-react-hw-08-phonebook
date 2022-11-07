import React from 'react';
import {
  StyledHomePageContainer,
  StyledTextContainer,
  StyledText,
  StyledImgContainer,
  StyledImg,
} from './HomePage.styled';
import picture from 'img/n1G7Dnfh.jpg';

export default function HomePage() {
  return (
    <StyledHomePageContainer>
      <StyledTextContainer>
        <StyledText>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          omnis exercitationem aliquid perspiciatis dolore dicta assumenda odio
          eveniet eligendi doloremque, animi quae, cupiditate culpa porro
          repudiandae voluptates laudantium ut. Amet.
        </StyledText>
      </StyledTextContainer>
      <StyledImgContainer>
        <StyledImg src={picture} alt="picture" />
      </StyledImgContainer>
    </StyledHomePageContainer>
  );
}
