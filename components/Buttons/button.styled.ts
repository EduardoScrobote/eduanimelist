import { Theme } from "@/constants/Theme";
import styled from "styled-components";

export const Button = styled.button<{ btnSize: string; btnHeight: string }>`
  width: ${(props) => props.btnSize};
  height: ${(props) => props.btnHeight};
  background-color: ${Theme.colors.primary};
  color: ${Theme.colors.white};
  border: 0;
  border-radius: 8px;
  font-size: 24px;
  font-weight: bold;
  margin-top: 32px;
  &:hover {
    background-color: #0f94b5;
    cursor: pointer;
  }
`;
