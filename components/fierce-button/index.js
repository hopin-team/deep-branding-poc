import { Button } from "@hopin-team/ui-button";
import styled from "styled-components";

export const FierceButton = styled(Button)`
  border: 0.0625rem solid transparent;
  background: linear-gradient(
    to right,
    #face2d,
    #98fffc,
    #7369ff,
    #f891ef,
    #f8df23
  );

  &:hover {
    border: 0.0625rem solid transparent;
    background: linear-gradient(
      to right,
      #face2d,
      #98fffc,
      #7369ff,
      #f891ef,
      #f8df23
    );
  }
`;
