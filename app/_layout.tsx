import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import "react-native-reanimated";
import "../global.css";

import { useColorScheme } from "@/hooks/use-color-scheme";
import React from "react";
import { Text } from "react-native";

import { useThemeColor } from "@/hooks/use-theme-color";
import ThemedView from "@/presentation/shared/ThemedView";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  const backgroundColor = useThemeColor({}, "background");
  const colorScheme = useColorScheme();

  return (
    <GestureHandlerRootView
      style={{ flex: 1, backgroundColor: backgroundColor }}
    >
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <ThemedView margin>
          <Text className="text-3xl mt-10 text-light-text dark:text-dark-text">
            Root Layout
          </Text>
        </ThemedView>
        {/* <Stack>
      </Stack> */}
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
