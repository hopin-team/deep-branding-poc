import * as React from "react";
import NextHead from "next/head";
import GoogleFonts from "next-google-fonts";

export const Head = ({ children }) => (
  <React.Fragment>
    <GoogleFonts href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;600;700&family=Roboto:wght@500;700&display=swap" />
    <NextHead>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />

      {children}
    </NextHead>
  </React.Fragment>
);
