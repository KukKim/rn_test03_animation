import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function TestScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text>Test</Text>
      <TouchableOpacity
        onPress={() => {
          router.navigate("/animationScreen");
        }}
      >
        <View>
          <Text>Animation test</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
