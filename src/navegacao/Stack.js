import React from "react";
import TelaLogin from "../TelaLogin";
import Home from "../Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';



const Stack = createNativeStackNavigator();
export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaLogin" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="TelaLogin" component={TelaLogin} options={{ title: 'APP LOGIN' }} />
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
