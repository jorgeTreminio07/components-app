import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedView from "@/presentation/shared/ThemedView";
import React from "react";
import { Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AlertsScreen = () => {
  const createTwoButtonAlert = () =>
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Ask me later",
        onPress: () => console.log("Ask me later pressed"),
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "destructive",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
  return (
    <ThemedView margin clasName="mt-2">
      <SafeAreaView className="flex-1 justify-content align-items">
        <ThemedButton className="my-5" onPress={createTwoButtonAlert}>
          2-button-alert
        </ThemedButton>
        <ThemedButton className="mb-5" onPress={createThreeButtonAlert}>
          3-button-alert
        </ThemedButton>
      </SafeAreaView>
    </ThemedView>
  );
};
export default AlertsScreen;
