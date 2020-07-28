import React from "react";
import { View } from "react-native";
import { ActionInputText } from "../../../common/components/ActionInputText";
import { ActionText } from "../../../common/components/ActionText";
import { MainActionButton } from "../../../common/components/MainActionButton";

export const SendPhoneNumberVerificationCode: React.FC<{}> = () => (
  <View>
    <ActionText>Bienvenido!..</ActionText>
    <ActionText>Ingresa tu telefono de whatsapp business</ActionText>
    <ActionInputText>numeric</ActionInputText>
    <MainActionButton>Enviado</MainActionButton>
  </View>
);

export default SendPhoneNumberVerificationCode;
