import styled from "styled-components";
import { Theme } from "@/constants/Theme";

export const Text = styled.text<{
  color: string;
  fontSize: string;
  weight?: string;
  mb?: string;
  mt?: string;
  ml?: string;
}>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.weight};
  margin-top: ${(props) => props.mt};
  margin-bottom: ${(props) => props.mb};
  margin-left: ${(props) => props.ml};
`;
