import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View, StyleSheet, Platform } from "react-native";

export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <View style={styles.outer}>
        <View style={styles.inner}>
          <Stack
            screenOptions={{
              headerShown: false,
              gestureEnabled: true,
              animation: "fade",
            }}
          />
        </View>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  outer: {
    flex: 1,
    alignItems: "center",
  },
  inner: {
    flex: 1,
    width: "100%",
    maxWidth: Platform.OS === "web" ? 480 : "100%",
    backgroundColor: "#fff",
  },
});
