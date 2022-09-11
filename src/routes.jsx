import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Cantadas } from "./pages/Cantadas";
import { LoadingBeijo } from "./pages/Loading/Beijo";
import { LoadingSelinho } from "./pages/Loading/Selinho";
import { ValeSelinho } from "./pages/Vale/Selinho";
import { ValeBeijo } from "./pages/Vale/Beijo";
const { Navigator, Screen } = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name="Cantadas" component={Cantadas} />
        <Screen name="LoadingBeijo" component={LoadingBeijo} />
        <Screen name="LoadingSelinho" component={LoadingSelinho} />
        <Screen name="ValeBeijo" component={ValeBeijo} />
        <Screen name="ValeSelinho" component={ValeSelinho} />
      </Navigator>
    </NavigationContainer>
  );
}
