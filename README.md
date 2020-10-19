# Problem

`fe-library`  components take advantage of theming, so the library should offer a setup for consumer to be able to apply custom branding. The setup should have:

1. Ability to preview the branding dynamically (organizer experience)
2. Ability to pre-load the theme, so there is no wait time to see the custom brand (event experience)

# Detail

Areas of consideration:

- **CSS vars are not available in SSR**
- **Global styles**
- **Custom fonts**
- **class name escape hatch in** `fe-library` **components**

# Proposed solution

[**Deep Branding POC**](https://github.com/hopin-team/deep-branding-poc)

### ONE: ThemeProvider

**PHASE 1**  *Transitional*

Set up the `ThemeProvider` in `_app.js` to support `fe-library` components.

- Map CSS vars to a theme object for the existing values.
- Otherwise, use the default from `@hopin-team/ui-symbols`.

```jsx
const cssVars = {
  COLOR: {
    THEME: {
      WARN: 'var(--warning)',
      ACTION: 'var(--blue-400)',
      ERROR: 'var(--red-400)',
      SUCCESS: 'var(--green-500)',
      DEFAULT: 'var(--blue-400)',
    }
  }
}
```

**PHASE 2** *Full move*

When the code base is using `fe-library` for the key pieces of UI, move to ThemeProvider as the primary theming method.

- Change the custom theme response to an object.
- Pre-fetch the theme and render the UI with custom theme.
- Provide backwards compatibility through CSS vars in global styles.

```jsx
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
```

### TWO: Stable Classes Escape Hatch

Adds BEM-style classes to all `fe-library` components that the sales team (*and engineering, but don't overuse **please***) can rely on to create custom themes.

1. **B**lock is the component's Root
2. **E**lements are the children of the Root if any
3. **M**odifier is optional consumer set scope.

*For example*

`hpn-deep-avatar` class can be used to style **all** avatars in a custom themed event.

Additionally, you can add a postfix modifier to scope the avatar to a specific component. `hpn-deep-avatar--event-card` can be used to style the avatars only in that one specific component, the event card.

```jsx
<Avatar
  src="https://dummyimage.com/400x400/d6e3ff/333333/"
  alt="Example avatar"
  __UIScope="event-card"
/>
```

For composite components the prefix will be applied to all children: `hpn-deep-avatar__label--event-card`.

![https://github.com/hopin-team/deep-branding-poc/raw/master/classes-demo.png](https://github.com/hopin-team/deep-branding-poc/raw/master/classes-demo.png)
