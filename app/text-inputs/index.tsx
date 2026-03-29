import ThemedCard from "@/presentation/shared/ThemedCard";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedTextInput from "@/presentation/shared/ThemedTextInput";
import ThemedView from "@/presentation/shared/ThemedView";
import { useState } from "react";
import { KeyboardAvoidingView, ScrollView, View } from "react-native";

const TextInputsScreen = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  return (
    <KeyboardAvoidingView behavior="height">
      <ScrollView>
        <ThemedView margin>
          <ThemedCard className="mb-5">
            <ThemedTextInput
              placeholder="Nombre Completo"
              autoCapitalize={"words"}
              autoCorrect={false}
              className="dark:text-white"
              onChangeText={(text) => setForm({ ...form, name: text })}
            />

            <ThemedTextInput
              placeholder="Correo Electrónico"
              autoCorrect={false}
              className="dark:text-white"
              keyboardType="email-address"
              onChangeText={(text) => setForm({ ...form, email: text })}
            />

            <ThemedTextInput
              placeholder="Número de Teléfono"
              autoCorrect={false}
              className="dark:text-white"
              keyboardType="phone-pad"
              onChangeText={(text) => setForm({ ...form, phone: text })}
            />
          </ThemedCard>

          <ThemedCard className="my-2">
            <ThemedText className="dark:text-white">
              {JSON.stringify(form, null, 2)}
            </ThemedText>
          </ThemedCard>
          <ThemedCard className="my-2">
            <ThemedText className="dark:text-white">
              {JSON.stringify(form, null, 2)}
            </ThemedText>
          </ThemedCard>
          <ThemedCard className="my-2">
            <ThemedText className="dark:text-white">
              {JSON.stringify(form, null, 2)}
            </ThemedText>
          </ThemedCard>
          <ThemedCard className="my-2">
            <ThemedText className="dark:text-white">
              {JSON.stringify(form, null, 2)}
            </ThemedText>
          </ThemedCard>
          <ThemedCard className="my-2">
            <ThemedText className="dark:text-white">
              {JSON.stringify(form, null, 2)}
            </ThemedText>
          </ThemedCard>
          <ThemedCard className="my-2">
            <ThemedText className="dark:text-white">
              {JSON.stringify(form, null, 2)}
            </ThemedText>
          </ThemedCard>

          <ThemedCard>
            <ThemedTextInput
              placeholder="Número de Teléfono"
              autoCorrect={false}
              className="dark:text-white"
              keyboardType="phone-pad"
              onChangeText={(text) => setForm({ ...form, phone: text })}
            />
          </ThemedCard>
        </ThemedView>
        <View style={{ marginBottom: 100 }} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default TextInputsScreen;
