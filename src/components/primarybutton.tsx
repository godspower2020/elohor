import { Pressable, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";

type Props = {
  label: string;
  onPress: () => void;
  backgroundColor?: string;
  textColor?: string;
};

export default function PrimaryButton({
  label,
  onPress,
  backgroundColor = "#111",
  textColor = "#fff",
}: Props) {
  return (
    <Pressable
      style={[styles.button, { backgroundColor }]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: textColor }]}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 14,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
});
