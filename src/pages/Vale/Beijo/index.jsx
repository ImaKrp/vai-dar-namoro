import React from "react";
import {
  Container,
  Card,
  Barcode,
  QR,
  BgImage,
  Insta,
  Titulo,
  SubTitulo,
  Retirada,
  Valor,
} from "./styles";
import barcode from "../../../../assets/barcode.png";
import heart from "../../../../assets/heart.png";
import qr from "../../../../assets/qr.png";
import { useNavigation } from "@react-navigation/native";

export const ValeBeijo = () => {
  const navigation = useNavigation();
  return (
    <Container onClick={() => navigation.navigate("Cantadas")}>
      <Card
        style={{
          shadowColor: "#c9184a",
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.53,
          shadowRadius: 13.97,

          elevation: 24,
        }}
      >
        <Barcode source={barcode} />
        <Titulo>Vale</Titulo>
        <SubTitulo>Um(ns) beijo(s)</SubTitulo>
        <Retirada>Retirada: Imediata</Retirada>
        <Valor>Valor: inestimável</Valor>
        <QR source={qr} />
        <BgImage source={heart} />
        <Insta>@julio.krp</Insta>
      </Card>
    </Container>
  );
};
