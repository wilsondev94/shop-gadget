import { useOrderUpdateSubscription } from "@/services/subscriptions";
import { Stack } from "expo-router";
import React from "react";

const OrdersLayout = () => {
  useOrderUpdateSubscription();

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default OrdersLayout;
