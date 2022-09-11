import styled from "styled-components/native";
import DoubleClick from "react-native-double-click";

export const Container = styled(DoubleClick)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.b100};
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 100px 40px;
  width: 100%;
`;

export const Card = styled.View`
  height: 100%;
  width: 100%;
  background-color: #f25c54;
  border-radius: 24px;
  align-items: center;
  padding: 20px;
  overflow: hidden;
`;

export const Barcode = styled.Image`
  height: 56px;
  width: 300px;
`;

export const QR = styled.Image`
  height: 100px;
  width: 100px;
  position: absolute;
  left: 12px;
  bottom: 12px;
`;

export const BgImage = styled.Image`
  transform: rotate(40deg);
  height: 400px;
  width: 400px;
  position: absolute;
  bottom: -60px;
  right: -74px;
  opacity: 0.4;
`;

export const Insta = styled.Text`
  font-size: 16px;
  width: 100px;
  text-align: center;
  position: absolute;
  bottom: 52px;
  transform: rotate(90deg);
  left: 76px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Titulo = styled.Text`
  font-size: 50px;
  position: absolute;
  transform: rotate(90deg);
  right: 0;
  top: 140px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const SubTitulo = styled.Text`
  font-size: 40px;
  position: absolute;
  transform: rotate(90deg);
  right: -90px;
  width: 400px;
  top: 290px;
  opacity: 0.9;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Valor = styled.Text`
  font-size: 20px;
  position: absolute;
  transform: rotate(90deg);
  right: 100px;
  top: 300px;
  opacity: 0.9;
  width: 400px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.bold};
`;
export const Retirada = styled.Text`
  font-size: 24px;
  position: absolute;
  transform: rotate(90deg);
  right: 64px;
  top: 300px;
  opacity: 0.9;
  width: 400px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.bold};
`;
