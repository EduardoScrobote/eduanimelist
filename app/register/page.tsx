"use client";
import React from "react";

import { SiDatabricks } from "react-icons/si";
import { RegisterContainer, RegisterMainDiv, Tittle } from "./register.styled";
import { Text } from "@/components/Text/text.styled";
import GlobalStyle from "../globalStyles";
import { Input } from "@/components/Inputs/inputs.styled";
import { Button } from "@/components/Buttons/button.styled";

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
        <Input inputSize="28rem" height="3.5rem" value="Usuario" mt="8rem" />
        <Input inputSize="28rem" height="3.5rem" value="E-mail" mt="2rem" />
        <Input inputSize="28rem" height="3.5rem" value="Senha" mt="2rem" />
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
