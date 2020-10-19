import React from "react";

import { Root } from "./avatar.styled";

/**
 * getClassName returns a stable class name that can be used for consumer
 * customization.
 * @param string component name
 * @param string UIScope optional scope postfix
 */
const getClassName = ({ className, name, __UIScope }) => {
  const postfix = __UIScope ? `--${__UIScope}` : "";
  return `${className ? className : ''} hpn-deep-${name}${postfix}`;
};

export const Avatar = ({ className, src, alt, __UIScope }) => (
  <Root
    className={`${getClassName({name: 'avatar', className, __UIScope})}`}
    src={src}
    alt={alt}
  />
);
