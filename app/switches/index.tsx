import ThemedCard from "@/presentation/shared/ThemedCard";
import ThemedSwitch from "@/presentation/shared/ThemedSwitch";
import ThemedView from "@/presentation/shared/ThemedView";
import React, { useState } from "react";

const Switches = () => {
  const [state, setIsState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  return (
    <ThemedView margin clasName="mt-2">
      <ThemedCard>
        <ThemedSwitch
          className="mb-4"
          text="Activo"
          value={state.isActive}
          onValueChance={(value) => setIsState({ ...state, isActive: value })}
        />

        <ThemedSwitch
          className="mb-4"
          text="Hambriento"
          value={state.isHungry}
          onValueChance={(value) => setIsState({ ...state, isHungry: value })}
        />

        <ThemedSwitch
          className="mb-4"
          text="Feliz"
          value={state.isHappy}
          onValueChance={(value) => setIsState({ ...state, isHappy: value })}
        />
      </ThemedCard>
    </ThemedView>
  );
};

export default Switches;
