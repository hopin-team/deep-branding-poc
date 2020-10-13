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
import { GlobalStyles } from "../components/GlobalStyles";

export default function App({ Component, props }) {
  return (
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
