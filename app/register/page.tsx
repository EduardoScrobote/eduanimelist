"use client";
import React from "react";

import RegisterDesktop from "./components/RegisterDesktop";
import RegisterMobile from "./components/RegisterMobile/RegisterMobile";

import { SiDatabricks } from "react-icons/si";
import { RegisterContainer, RegisterMainDiv, Tittle } from "./register.styled";
import { Text } from "@/components/Text/text.styled";
import GlobalStyle from "../globalStyles";
import { Input } from "@/components/Inputs/inputs.styled";
import InputText from "@/components/Inputs/InputText";
import ResponsiveComponent from "@/helpers/responsiveHelper/ResponsiveComponent";
import RegisterTablet from "./components/RegisterTablet/RegisterTablet";

const handleResponsive = (size: string) => {
  switch (size) {
    case "xs":
      return <RegisterMobile />;
      break;
    case "sm":
      return <RegisterTablet />;
    default:
      return <RegisterDesktop />;
      break;
  }
};

function Register() {
  return (
    <ResponsiveComponent>
      {({ size }) => handleResponsive(size)}
    </ResponsiveComponent>
  );
}

export default Register;
