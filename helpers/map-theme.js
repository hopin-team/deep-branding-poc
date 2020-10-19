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

const defaultTheme = {
  COLOR,
  LAYOUT,
  LINE,
  MOTION,
  PLANE,
  SCALE,
  TYPOGRAPHY,
};

const cssVars = {
  COLOR: {
    THEME: {
      WARN: 'var(--warning)',
      ACTION: 'var(--blue-400)',
      ERROR: 'var(--red-400)',
      SUCCESS: 'var(--green-500)',
      DEFAULT: 'var(--blue-400)',
    }
  },
  LINE: {
    ACCENT_BORDER: `0.125rem solid var(--blue-400)`,
  }
}

export const mapTheme = () => merge(defaultTheme, cssVars);
