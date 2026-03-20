import React from "react";
import { Pressable, PressableProps, Text } from "react-native";

interface Props extends PressableProps {
  className?: string;
  children?: string;
  canPress?: boolean;
}

const ThemedButton = ({ children, className, canPress, ...rest }: Props) => {
  return (
    <Pressable
      className={`
    items-center rounded-xl px-6 py-2 
    ${
      canPress
        ? "bg-gray-300 dark:bg-gray-700 opacity-50"
        : "bg-light-primary dark:bg-dark-primary active:opacity-80"
    } 
    ${className}`}
      {...rest}
      disabled={canPress}
    >
      <Text className="text-white text-2xl">{children}</Text>
    </Pressable>
  );
};

export default ThemedButton;
