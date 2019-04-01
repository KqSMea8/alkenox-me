import React from 'react';
import styled from '@emotion/styled';

export const BtnShape = styled.button`
  z-index: 10000;
  margin: 0.25em;
  padding: 0.25em;
  border-radius: 2em;
  border-width: 0.05em;
  border-color: rgba(52, 152, 255, 0.8);
  background-color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
  font-size: 1.75em;
  opacity: 0.3;
  transition: all 0.25s ease-in-out;
  &:hover,
  &:focus {
    font-size: 2em;
    opacity: 0.9;
    transition: all 0.25s ease-in-out;
  }
`;

export const HomeBtn = () => (
  <BtnShape>
    <span role="img" title="Home" aria-label="Home">
      &#127962;
    </span>
  </BtnShape>
);

export const AboutBtn = () => (
  <BtnShape>
    <span role="img" title="About Us" aria-label="About Us">
      &#128211;
    </span>
  </BtnShape>
);

export const ContactBtn = () => (
  <BtnShape>
    <span role="img" title="Contact Us" aria-label="Contact Us">
      &#128231;
    </span>
  </BtnShape>
);
