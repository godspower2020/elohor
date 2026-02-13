import { Text, StyleSheet, FlatList, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import ColorCard from "@/components/colorcard";
import { STATUS_COLORS } from "@/helpers/colors";
import { reasons } from "@/data/reasons";
import { messages } from "@/data/messages";

export default function ThoughtScreen() {
  const router = useRouter();
  const totalCards = reasons.length;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={20} color="#333" />
        </TouchableOpacity>

        <View style={styles.countBadge}>
          <Text style={styles.countText}>
            Just {totalCards} Cards
          </Text>
        </View>
      </View>

      <Text style={styles.header}>
        {messages.thought.question}
      </Text>

      <FlatList
        data={reasons}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item, index }) => (
          <ColorCard
            text={item}
            color={STATUS_COLORS[index % STATUS_COLORS.length]}
            delay={index * 200}
          />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: "#f7f7f7",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  countBadge: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },
  countText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#555",
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },
  header: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 20,
    textAlign: "center",
  },
  listContainer: {
    paddingBottom: 40,
    gap: 12,
  },
});
