import React, { useState, useEffect } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../../studentHome/home";
import DrawerContent from "./drawerContent";
import BottomTabNavigator from "../bottom/bottomTabNavigator";
import { Ionicons } from "@expo/vector-icons";
import StudentProfile from "../../studentHome/profile/profile";
import { TouchableOpacity } from "react-native";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator({ navigation }) {
  const handleLogout = () => {
    navigation.navigate("login");
  };
  return (
    <Drawer.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        // drawerStyle: {
        //   backgroundColor: "#FFFFFF",
        //   width: 250,
        // },
        // headerStyle: {
        //   backgroundColor: "#FFFFFF",
        // },
        // drawerActiveTintColor: "#E49BFF",
        // drawerInactiveTintColor: "grey",
        // headerTitleStyle: {
        //   color: "#000",
        // },
        // headerTintColor: "#000",
        headerShown: true,
        headerLeft: () => (
          <TouchableOpacity
            onPress={navigation?.goBack}
            style={{ paddingLeft: 15 }}
          >
            <Ionicons name="chevron-back" size={24} color="black" />
          </TouchableOpacity>
        ),
      }}
      drawerContent={(props) => (
        <DrawerContent {...props} handleLogout={handleLogout} />
      )}
    >
      <Drawer.Screen
        name="HomeTab"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Drawer.Screen name="Profile" component={StudentProfile} />
    </Drawer.Navigator>
  );
}

// const Drawer = createDrawerNavigator();

// export default function DrawerNavigator() {
//   return (
//     <Drawer.Navigator
//       initialRouteName="Main"
//       drawerContent={(props) => <DrawerContent {...props} />}
//       screenOptions={{
//         drawerStyle: {
//           backgroundColor: "#FFFFFF",
//           width: 250,
//         },
//         headerStyle: {
//           backgroundColor: "#FFFFFF",
//         },
//         drawerActiveTintColor: "#E49BFF",
//         drawerInactiveTintColor: "grey",
//         headerTitleStyle: {
//           color: "#000",
//         },
//         headerTintColor: "#000",
//       }}
//     >
//       <Drawer.Screen name="Main" component={BottomTabNavigator} />
//     </Drawer.Navigator>
//   );
// }
