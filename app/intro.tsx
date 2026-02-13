import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import PrimaryButton from "@/components/primarybutton";
import { messages } from "@/data/messages";

export default function IntroScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topAccent} />
      <View style={styles.bottomAccent} />

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <Ionicons name="arrow-back" size={20} color="#1d4ed8" />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>
          {messages.intro.title}
        </Text>

        <Text style={styles.text}>
          {messages.intro.text}
        </Text>

        <PrimaryButton
          label="In My Feelings"
          backgroundColor="#3b82f6"
          textColor="#fff"
          onPress={() => router.push("/thought")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e0f2fe", 
    padding: 24,
  },
  topAccent: {
    position: "absolute",
    top: -100,
    right: -80,
    width: 240,
    height: 240,
    borderRadius: 120,
    backgroundColor: "#bae6fd",
  },
  bottomAccent: {
    position: "absolute",
    bottom: -120,
    left: -80,
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: "#7dd3fc",
    opacity: 0.6,
  },
  backButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#ffffffaa",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 20,
    color: "#1e3a8a",
  },
  text: {
    fontSize: 19,
    textAlign: "center",
    marginBottom: 40,
    lineHeight: 34,
    color: "#1f2937",
  },
});
