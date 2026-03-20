import { useAnimation } from "@/hooks/useAnimation";
import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedView from "@/presentation/shared/ThemedView";
import { Animated, Easing } from "react-native";

const Animation101Screen = () => {
  const {
    fadeIn,
    fadeOut,
    startMovingTopPosition,
    animatedOpacity,
    animatedTop,
    status,
  } = useAnimation();

  return (
    <ThemedView className="flex-1 justify-center items-center" margin>
      <Animated.View
        className="bg-light-secondary dark:bg-dark-secondary rounded-xl"
        style={{
          width: 150,
          height: 150,
          opacity: animatedOpacity,
          transform: [{ translateY: animatedTop }],
        }}
      />

      <ThemedButton
        className="my-5"
        onPress={() => {
          fadeIn({});
          startMovingTopPosition({ easing: Easing.bounce, duration: 700 });
        }}
        canPress={!status}
      >
        FadeIn
      </ThemedButton>

      <ThemedButton
        className="my-5"
        onPress={() => fadeOut({})}
        canPress={status}
      >
        FadeOut
      </ThemedButton>
    </ThemedView>
  );
};
export default Animation101Screen;
