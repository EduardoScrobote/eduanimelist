import { Theme } from "@/constants/Theme";
import styled from "styled-components";

export const RegisterMainDiv = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${Theme.colors.black};
  display: flex;
  justify-content: center;
`;

export const RegisterContainer = styled.div`
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Tittle = styled.div`
  display: flex;
  align-items: center;
`;
