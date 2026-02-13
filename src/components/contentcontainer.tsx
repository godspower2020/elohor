import { View, StyleSheet, Platform } from "react-native";

export default function ContentContainer({ children }: any) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignSelf: "center",
    maxWidth: Platform.OS === "web" ? 520 : "100%",
  },
});
