import { Theme } from "@/constants/Theme";
import styled from "styled-components";

export const ButtonDiv = styled.div<{ width?: string; height?: string }>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  display: flex;
  flex-direction: column;
`;

export const StyledButton = styled.button<{}>`
  width: 100%;
  height: 100%;
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
