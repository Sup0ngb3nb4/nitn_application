import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./components/SignUp/login";
import Registration from "./components/SignUp/registration";
import DrawerNavigator from "./components/student/navigations/drawer/drawerNavigator";
import Home from "./components/student/studentHome/home";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import StudentProfile from "./components/student/studentHome/profile/profile";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="registration" component={Registration} />
          <Stack.Screen name="home" component={Home} />
          <Stack.Screen name="profile" component={StudentProfile} />
          <Stack.Screen name="drawerNavigator" component={DrawerNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
