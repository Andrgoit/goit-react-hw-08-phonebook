import React from 'react';
import { Box } from 'components/Box';
import { GiRotaryPhone } from 'react-icons/gi';
import { StyledIconBg, StyledLogoText } from './Logo.styled';

export default function Logo() {
  return (
    <Box display="flex" alignItems="center">
      <StyledIconBg>
        <GiRotaryPhone size="32px" />
      </StyledIconBg>

      <StyledLogoText to="/">PhoneBook</StyledLogoText>
    </Box>
  );
}
