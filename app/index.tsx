import { Text, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import PrimaryButton from "@/components/primarybutton";
import { messages } from "@/data/messages";

export default function Index() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.accentCircle} />
      <Text style={styles.heart}>❤️</Text>
      <Text style={styles.flower}>🌸</Text>

      <View style={styles.content}>
        <Text style={styles.title}>
          {messages.valentine.title}
        </Text>

        <Text style={styles.text}>
          {messages.valentine.text}
        </Text>

        <PrimaryButton
          label="My Thoughts"
          backgroundColor="rgba(214, 51, 132, 0.5)"
          textColor="#fff"
          onPress={() => router.push("/intro")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff5f7",
  },
  accentCircle: {
    position: "absolute",
    top: -120,
    right: -80,
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: "#ffd6e0",
  },
  heart: {
    position: "absolute",
    top: 100,
    left: 40,
    fontSize: 80,
    opacity: 0.6,
  },
  flower: {
    position: "absolute",
    bottom: 100,
    right: 40,
    fontSize: 80,
    opacity: 0.6,
  },
  content: {
    flex: 1,
    padding: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 26,
    color: "#d63384",
  },
  text: {
    fontSize: 19,
    textAlign: "center",
    marginBottom: 60,
    lineHeight: 34,
    color: "#555",
  },
});
