import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.b100};
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 40px;
  width: 100%;
`;
