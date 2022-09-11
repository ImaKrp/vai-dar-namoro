import React, { useEffect } from "react";
import { Container } from "./styles";
import { ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const LoadingBeijo = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const counter = setInterval(() => {
      navigation.navigate("ValeBeijo");
    }, 500);
    return () => {
      clearInterval(counter);
    };
  }, [navigation]);

  return (
    <Container>
      <ActivityIndicator size={60} color="#c9184a" />
    </Container>
  );
};
