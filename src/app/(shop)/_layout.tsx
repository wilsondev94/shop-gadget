import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={24} {...props} style={{ color: "gray" }} />;
}

const TabsLayout = () => {
  return (
    <SafeAreaView edges={["top"]} style={styles.safeArea}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#1BC464",
          tabBarInactiveTintColor: "gray",
          tabBarLabelStyle: { fontSize: 16 },
          tabBarStyle: {
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            padding: 10,
          },

          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Shop",
            tabBarIcon(props) {
              return <TabBarIcon {...props} name="shopping-cart" />;
            },
          }}
        />
        <Tabs.Screen
          name="orders"
          options={{
            title: "Order",
            tabBarIcon(props) {
              return <TabBarIcon {...props} name="book" />;
            },
          }}
        />
      </Tabs>
    </SafeAreaView>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});
