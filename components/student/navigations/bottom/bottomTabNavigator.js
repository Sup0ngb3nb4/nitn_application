import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity } from "react-native";
import Home from "../../studentHome/home";
import { Ionicons } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator({ navigation }) {
  const Forms = () => (
    <KeyboardAwareScrollView
      style={{ backgroundColor: "#F5EEE6" }}
    ></KeyboardAwareScrollView>
  );
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerLeft: () => (
          <TouchableOpacity onPress={navigation?.openDrawer} style = {{paddingLeft: 15}}>
            <AntDesign name="bars" size={24} color="black" />
          </TouchableOpacity>
        ),
        // tabBarIcon: ({ focused, color, size }) => {
        //   let iconName;

        //   if (route.name === "Home") {
        //     iconName = focused ? "home" : "home-outline";
        //   } else if (route.name === "Forms") {
        //     iconName = focused ? "forms" : "form-select";
        //   }

        //   return <Ionicons name={iconName} size={size} color={color} />;
        // },

        tabBarActiveTintColor: "#E49BFF",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Forms"
        component={Forms}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="form-select"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

// import { Ionicons } from "@expo/vector-icons"; // Import Ionicons

// const Tab = createBottomTabNavigator();

// export default function BottomTabNavigator() {
//   const Something = () => (
//     <KeyboardAwareScrollView
//       style={{ backgroundColor: "#F5EEE6" }}
//     ></KeyboardAwareScrollView>
//   );
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;

//           if (route.name === "HomeTab") {
//             iconName = focused ? "home" : "home-outline";
//           } else if (route.name === "Settings") {
//             iconName = focused ? "settings" : "settings-outline";
//           }

//           // You can return any component that you like here!
//           return <Ionicons name={iconName} size={size} color={color} />;
//         },
//         headerShown: false,
//         tabBarActiveTintColor: "#E49BFF",
//         tabBarInactiveTintColor: "gray",
//       })}
//     >
//       <Tab.Screen name="HomeTab" component={Home} options={{ title: "Home" }} />
//       <Tab.Screen name="Something" component={Something} />
//     </Tab.Navigator>
//   );
// }
