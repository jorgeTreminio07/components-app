import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedView from "@/presentation/shared/ThemedView";
import { Text } from "react-native";

const Animation101Screen = () => {
  return (
    <ThemedView>
      <Text>Animation101Screen</Text>

      <ThemedButton className="mb-5" onPress={() => console.log("fadeIn")}>
        FadeIn
      </ThemedButton>

      <ThemedButton className="mb-5" onPress={() => console.log("fadeOut")}>
        FadeOut
      </ThemedButton>
    </ThemedView>
  );
};
export default Animation101Screen;
