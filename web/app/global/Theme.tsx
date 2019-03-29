import * as React from "react";

import { ThemeProvider } from "emotion-theming";

import "../App.scss";

const blue = "#07c";
const lightgray = "#f6f6ff";
const light = "rgba(52,152,255,1)";
const richer = "rgba(149,182,255,1)";
const transparent = "rgba(0,0,0,0)";
const dark = "rgba(0,0,0,1)";
const white = "rgba(255,255,255,1)";
const darkTint = "rgba(0,0,0,.8)";

const theme = {
  breakpoints: ["20em", "52em", "64em", "80em"],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors: {
    blue: "#07c",
    lightgray: "#f6f6ff",
    light: "rgba(52,152,255,1)",
    richer: "rgba(149,182,255,1)",
    transparent: "rgba(0,0,0,0)",
    dark: "rgba(0,0,0,1)",
    darkTint: "rgba(0,0,0,.8)",
    white: "rgba(255,255,255,1)"
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    sans: "system-ui, sans-serif",
    mono: "Menlo, monospace"
  },
  shadows: {
    small: "0 0 4px rgba(0, 0, 0, .125)",
    large: "0 0 24px rgba(0, 0, 0, .125)"
  },
  buttons: {
    primary: {
      color: light,
      backgroundColor: dark
    },
    outline: {
      color: blue,
      backgroundColor: "transparent",
      boxShadow: "inset 0 0 0 2px"
    }
  }
};

const Themed = (props: { children: React.ReactNode }) => (
  <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
);

export default Themed;
