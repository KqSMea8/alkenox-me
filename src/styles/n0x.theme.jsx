import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import '../styles/App.scss';

const theme = {
  breakpoints: ['20em', '52em', '64em', '80em'],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors: {
    blue: '#07c',
    lightgray: '#f6f6ff',
    light: 'rgba(52,152,255,1)',
    richer: 'rgba(149,182,255,1)',
    transparent: 'rgba(0,0,0,0)',
    dark: 'rgba(0,0,0,1)',
    darkTint: 'rgba(0,0,0,.8)',
    white: 'rgba(255,255,255,1)'
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    sans: 'system-ui, sans-serif',
    mono: 'Menlo, monospace'
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)'
  }
};

const N0xTheme = props => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default N0xTheme;
