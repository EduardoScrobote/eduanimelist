import React from "react";
import { RegisterContainer, RegisterMainDiv, Tittle } from "../register.styled";
import { Text } from "@/components/Text/text.styled";
import GlobalStyle from "@/app/globalStyles";
import { SiDatabricks } from "react-icons/si";
import InputText from "@/components/Inputs/InputText";
import Button from "@/components/Buttons/Button";

function RegisterDesktop() {
  return (
    <RegisterMainDiv>
      <GlobalStyle />
      <RegisterContainer>
        <Tittle>
          <Text color="white" weight="bold" fontSize="48px" mb="32px">
            Registre-se
          </Text>
          <SiDatabricks
            size={34}
            color={"white"}
            style={{
              marginTop: "8px",
              marginLeft: "8px",
              marginBottom: "32px",
            }}
          />
        </Tittle>
        <InputText value="Nome de Usuario" width="80%" height="4rem" mt="8px" />
        <InputText value="E-mail" width="80%" height="4rem" mt="8px" />
        <InputText value="Senha" width="80%" height="4rem" mt="8px" />
        <Button width="80%" height="6rem" name="Registrar" />
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

export default RegisterDesktop;
