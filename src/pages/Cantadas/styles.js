import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.b100};
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  padding: 40px;
  width: 100%;
`;

export const Text = styled.Text`
  width: 100%;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.bold};
  text-align: center;
  font-style: italic;
`;

export const ButtonsView = styled.View`
  width: 100%;
  height: 60px;
  justify-content: space-between;
  flex-direction: row;
`;

export const TextContainer = styled.TouchableOpacity`
  height: ${({ full }) => (full ? "100%" : "90%")};
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity`
  height: 60px;
  width: 46%;
  border-radius: 8px;
  background-color: ${({ theme, color }) => color ?? theme.colors.red}
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.bold};
  text-align: center;
`;

export const Image = styled.Image`
  width: 64px;
  height: 64px;
  border-radius: 75px;
  position: absolute;
  opacity: 0.5;
  right: -4px;
  transform: ${({ rotate }) => (rotate ? "rotate(310deg)" : "rotate(0deg)")};
`;
