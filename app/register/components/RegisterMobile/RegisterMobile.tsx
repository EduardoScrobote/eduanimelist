import React from "react";
import { MobileMain } from "./RegisterMobile.styled";

import { SiDatabricks } from "react-icons/si";
import { Text } from "@/components/Text/text.styled";
import GlobalStyle from "@/app/globalStyles";
import { Input } from "@/components/Inputs/inputs.styled";
import Button from "@/components/Buttons/Button";
import InputText from "@/components/Inputs/InputText";
import { Tittle } from "../../register.styled";

function RegisterMobile() {
  return (
    <MobileMain>
      <GlobalStyle />
      <Tittle>
        <Text color="white" weight="bold" fontSize="36px" mb="32px">
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
    </MobileMain>
  );
}

export default RegisterMobile;
