import React from "react";
import { Input, InputDiv } from "./inputs.styled";
import { InputProps } from "./inputTypes";
import { Text } from "../Text/text.styled";

function InputText(props: InputProps) {
  return (
    <InputDiv width={props.width} height={props.height}>
      <Text fontSize="14px" color="white">
        {props.value}
      </Text>
      <Input value={props.value} mt={props.mt} mb={props.mb} />
    </InputDiv>
  );
}

export default InputText;
