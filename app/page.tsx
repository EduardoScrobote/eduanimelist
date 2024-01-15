"use client";
import { SlLogin } from "react-icons/sl";
import GlobalStyle from "./globalStyles";
import { Header, LoginContainer, LoginDiv } from "./Login.styled";
import { Text } from "@/components/Text/text.styled";
import { Input } from "@/components/Inputs/inputs.styled";
import { Button } from "@/components/Buttons/button.styled";
import InputText from "@/components/Inputs/InputText";

export default function Home() {
  return (
    <div>
      <GlobalStyle />
      <LoginDiv>
        <LoginContainer>
          <Header>
            <Text color="white" fontSize="48px" weight="bold">
              Login
            </Text>
            <SlLogin
              size={34}
              style={{ marginTop: "8px", color: "white", marginLeft: "8px" }}
            />
          </Header>
          <InputText value="Usuario" width="80%" height="4rem" mt="8px" />
          <InputText value="Senha" width="80%" height="4rem" mt="8px" />
          <Button btnSize="90%" btnHeight="4rem">
            Logar
          </Button>
          <Text color="white" fontSize="16px">
            Não possui uma conta ?
            <Text color="#0f94b5" ml="6px" fontSize="16px">
              Registre-se!
            </Text>
          </Text>
        </LoginContainer>
      </LoginDiv>
    </div>
  );
}
