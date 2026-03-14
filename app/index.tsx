import { animationMenuRoutes } from "@/constants/Routes";
import ThemedView from "@/presentation/shared/ThemedView";
import { Href, Link } from "expo-router";
import { Text } from "react-native";

const ComponetsApp = () => {
  return (
    <ThemedView margin>
      {animationMenuRoutes.map((route, index) => (
        <Link href={route.name as Href} key={index}>
          <Text>{route.title}</Text>
        </Link>
      ))}
    </ThemedView>
  );
};

export default ComponetsApp;
