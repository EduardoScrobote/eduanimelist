import { Theme } from "@/constants/Theme";
import styled from "styled-components";

export const Input = styled.input<{
  inputSize: string;
  height: string;
  mt?: string;
  mb?: string;
}>`
  width: ${(props) => props.inputSize};
  height: ${(props) => props.height};
  outline: none;
  border: 0;
  background-color: ${Theme.colors.gray};
  color: ${Theme.colors.white};
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
  font-size: 18px;
  padding: 8px;
  border-radius: 8px;
  transition: 50ms ease;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    border: 4px solid ${Theme.colors.primary};
    cursor: text;
  }
`;
