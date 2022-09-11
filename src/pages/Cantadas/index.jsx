import React, { useState, useEffect } from "react";
import {
  Container,
  Text,
  TextContainer,
  ButtonsView,
  Button,
  ButtonText,
  Image,
} from "./styles";
import pickUps from "../../utils/cantadas";
import heart from "../../../assets/heart.png";
import kiss from "../../../assets/kiss.png";
import { useNavigation, useIsFocused } from "@react-navigation/native";

export const Cantadas = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const MAX_INDEX = pickUps.length - 1;
  const [cantadas, setCantadas] = useState(
    pickUps.sort(() => Math.random() - 0.5)
  );
  const [index, setIndex] = useState(0);
  const [cantada, setCantada] = useState(cantadas[index]);
  const [stopped, setStopped] = useState(false);

  useEffect(() => {
    setStopped(false);
  }, [isFocused]);

  useEffect(() => {
    const counter = setInterval(() => {
      setIndex(index + 1);
      if (index === MAX_INDEX) {
        setIndex(0);
        setCantada(cantadas[index]);
        setCantadas(pickUps.sort(() => Math.random() - 0.5));
        return;
      }
      setCantada(cantadas[index]);
    }, 100);

    if (stopped) {
      clearInterval(counter);
      return;
    }
    return () => {
      clearInterval(counter);
    };
  }, [stopped, cantadas, index, pickUps]);

  return (
    <Container>
      <TextContainer
        activeOpacity={0.6}
        onPress={() => setStopped(!stopped)}
        full={!stopped}
      >
        <Text>{cantada}</Text>
      </TextContainer>
      {stopped && (
        <ButtonsView>
          <Button
            onPress={() => navigation.navigate("LoadingBeijo")}
            activeOpacity={0.6}
            color="#c9184a"
            style={{
              shadowColor: "#c9184a",
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.53,
              shadowRadius: 13.97,

              elevation: 15,
            }}
          >
            <ButtonText>Beijo</ButtonText>
            <Image source={heart} />
          </Button>
          <Button
            onPress={() => navigation.navigate("LoadingSelinho")}
            activeOpacity={0.6}
            color="#f25c54"
            style={{
              shadowColor: "#f25c54",
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.53,
              shadowRadius: 13.97,

              elevation: 15,
            }}
          >
            <ButtonText>Selinho</ButtonText>
            <Image rotate source={kiss} />
          </Button>
        </ButtonsView>
      )}
    </Container>
  );
};
