import { Text, TextProps } from "react-native";

interface Props extends TextProps {
  className?: string;
  type?: "normal" | "h1" | "h2" | "semi-bold" | "link";
}

const ThemedText = ({ className, type, ...rest }: Props) => {
  // className="text-3xl mt-10 text-light-text dark:text-dark-text"
  return (
    <Text
      className={[
        type === "normal" ? "font-normal" : undefined,
        type === "h1" ? "text-3xl" : undefined,
        type === "h2" ? "text-xl" : undefined,
        type === "semi-bold" ? "font-semibold" : undefined,
        type === "link" ? "font-normal underline" : undefined,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...rest}
    >
      {rest.children}
    </Text>
  );
};

export default ThemedText;
