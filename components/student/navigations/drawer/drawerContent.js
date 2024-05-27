import React from "react";
import { SafeAreaView, View, TouchableOpacity, Text } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { styles } from "./styles";

const Separator = () => <View style={styles.separator} />;

export default function DrawerContent({ navigation, handleLogout }) {
  const drawerItems = [
    { label: "Home", screen: "Home" },
    { label: "Profile", screen: "Profile" },
    { label: "Logout", onPress: () => handleLogout() },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DrawerContentScrollView>
        <View style={{ padding: 20 }}>
          {drawerItems.map((item, index) => (
            <React.Fragment key={index}>
              <TouchableOpacity
                onPress={() =>
                  item?.screen
                    ? navigation.navigate(item.screen)
                    : item.onPress()
                }
                style={{ paddingVertical: 10 }}
              >
                <Text style={{ color: "#E49BFF", fontSize: 16 }}>
                  {item.label}
                </Text>
              </TouchableOpacity>
              {index < drawerItems.length - 1 && <Separator />}
            </React.Fragment>
          ))}
        </View>
      </DrawerContentScrollView>
    </SafeAreaView>
  );
}

// const Separator = () => <View style={styles.separator} />;

// export default function DrawerContent({ navigation }) {
//   const drawerItems = [
//     { label: "Home", screen: "Main" },
//     { label: "Something", screen: "Something" },
//     { label: "Logout", onPress: () => navigation.navigate("login") },
//   ];

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <DrawerContentScrollView>
//         <View style={{ padding: 20 }}>
//           {drawerItems.map((item, index) => (
//             <React.Fragment key={index}>
//               <TouchableOpacity
//                 onPress={() =>
//                   item?.screen
//                     ? navigation.navigate(item.screen)
//                     : item.onPress()
//                 }
//                 style={{ paddingVertical: 10 }}
//               >
//                 <Text style={{ color: "#E49BFF", fontSize: 16 }}>
//                   {item.label}
//                 </Text>
//               </TouchableOpacity>
//               {index < drawerItems.length - 1 && <Separator />}
//             </React.Fragment>
//           ))}
//         </View>
//       </DrawerContentScrollView>
//     </SafeAreaView>
//   );
// }
