import React from "react";
import { ButtonProps } from "./Button.type";
import { ButtonDiv, StyledButton } from "./button.styled";

function Button(props: ButtonProps) {
  return (
    <ButtonDiv width={props.width} height={props.height}>
      <StyledButton>{props.name}</StyledButton>;
    </ButtonDiv>
  );
}

export default Button;
