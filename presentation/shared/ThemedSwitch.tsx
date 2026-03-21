import { useThemeColor } from "@/hooks/use-theme-color";
import React from "react";
import { Platform, Pressable, View } from "react-native";
import { Switch } from "react-native-gesture-handler";
import ThemedText from "./ThemedText";

interface Props {
  text?: string;
  value: boolean;
  onValueChance: (value: boolean) => void;
  className?: string;
}

const isAndroid = Platform.OS === "android";

const ThemedSwitch = ({ text, value, onValueChance, className }: Props) => {
  const switchActiveColor = useThemeColor({}, "primary");

  return (
    <Pressable
      className={`flex flex-row mx-2 items-center justify-between active:opacity-80 ${className}`}
      onPress={() => onValueChance(!value)}
    >
      {text ? (
        <ThemedText type="h2" className="dark:text-white text-black">
          {text}
        </ThemedText>
      ) : (
        <View />
      )}
      <Switch
        value={value}
        onValueChange={onValueChance}
        thumbColor={isAndroid ? switchActiveColor : ""}
        //ios_backgroundColor={value ? "green" : "red"}
        trackColor={{
          false: "grey",
          true: switchActiveColor,
        }}
      />
    </Pressable>
  );
};

export default ThemedSwitch;
