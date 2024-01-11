"use client";
import React from "react";

import { SiDatabricks } from "react-icons/si";
import { RegisterContainer, RegisterMainDiv, Tittle } from "./register.styled";
import { Text } from "@/components/Text/text.styled";
import GlobalStyle from "../globalStyles";
import { Input } from "@/components/Inputs/inputs.styled";
import { Button } from "@/components/Buttons/button.styled";
import InputText from "@/components/Inputs/InputText";

function Register() {
  return (
    <RegisterMainDiv>
      <GlobalStyle />
      <RegisterContainer>
        <Tittle>
          <Text color="white" fontSize="48px">
            Registre-se
          </Text>
          <SiDatabricks
            size={34}
            style={{ marginTop: "8px", marginLeft: "8px" }}
          />
        </Tittle>
        <InputText value="Nome de Usuario" width="80%" height="4rem" mt="8px" />
        <InputText value="E-mail" width="80%" height="4rem" mt="8px" />
        <InputText value="Senha" width="80%" height="4rem" mt="8px" />
        <Button btnSize="28rem" btnHeight="4rem">
          Logar-se
        </Button>
        <Text color="white" mt="32px" fontSize="16px">
          Já possui uma conta ?
          <Text color="#0f94b5" ml="6px" fontSize="16px">
            Faça Login!
          </Text>
        </Text>
      </RegisterContainer>
    </RegisterMainDiv>
  );
}

export default Register;
