import AuthProvider from "@/providers/auth-provider";
import { Stack } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
import { ToastProvider } from "react-native-toast-notifications";

const RootLayout = () => {
  return (
    <ToastProvider>
      <AuthProvider>
        <Stack>
          <Stack.Screen
            name="(shop)"
            options={{ headerShown: false, title: "Shop" }}
          />
          <Stack.Screen
            name="categories"
            options={{ headerShown: false, title: "Categories" }}
          />
          <Stack.Screen
            name="product"
            options={{ headerShown: false, title: "Product" }}
          />
          <Stack.Screen
            name="cart"
            options={{ presentation: "modal", title: "Shopping Cart" }}
          />
          <Stack.Screen name="auth" options={{ headerShown: true }} />
        </Stack>
      </AuthProvider>
    </ToastProvider>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
