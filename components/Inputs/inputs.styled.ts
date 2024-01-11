import { Theme } from "@/constants/Theme";
import styled from "styled-components";

export const InputDiv = styled.div<{ width?: string; height?: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input<{
  width?: string;
  height?: string;
  mt?: string;
  mb?: string;
}>`
  width: 100%;
  height: 100%;
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
