import "@reach/tabs/styles.css";

import { ThemeProvider } from "styled-components";
import { merge } from "lodash";
import {
  COLOR,
  LAYOUT,
  LINE,
  MOTION,
  PLANE,
  SCALE,
  TYPOGRAPHY,
} from "@hopin-team/ui-symbols";
import { GlobalStyles } from "../components/global-styles";
import { mapTheme } from '../helpers/map-theme';
import "../node_modules/normalize.css/normalize.css";
import "../node_modules/@hopin-team/ui-theme/src/theme.css";

export default function App({ Component, props }) {
  // (Phase One) Transitional
  // const transitionalTheme = mapTheme();
  return (
    // <ThemeProvider theme={transitionalTheme}>

    // (Phase Two) ThemeProvider all the way!
    <ThemeProvider theme={props.theme ?? {}}>
      <GlobalStyles />
      <Component />
    </ThemeProvider>
  );
}

App.getInitialProps = async () => {
  const defaultTheme = {
    COLOR,
    LAYOUT,
    LINE,
    MOTION,
    PLANE,
    SCALE,
    TYPOGRAPHY,
  };
  const response = await fetch("https://acidic-comet-fog.glitch.me/theme");
  const customTheme = await response.json();
  const theme = merge(defaultTheme, customTheme);

  return {
    props: { theme },
  };
};
