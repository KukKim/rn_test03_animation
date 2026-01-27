import {
  CommonBadge,
  CommonButton,
  CommonCard,
  CommonCheckBox,
  NumberBadge,
} from "@/components";
import { useRouter } from "expo-router";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TestScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <Text>Test</Text>
      <CommonCard title="Badge">
        <CommonBadge typeText="1" />
        <CommonBadge type="secondary" typeText="3" />
      </CommonCard>
      <CommonCard title="Number Badge">
        <NumberBadge size="l" number={1} />
        <NumberBadge number={100} maxNumber={99} />
      </CommonCard>

      <CommonCard title="CheckBox Badge">
        <CommonCheckBox value={true} />
      </CommonCard>
      <CommonButton
        onPress={() => {
          router.navigate("/animationScreen/animationTest");
        }}
      >
        <Text>Animation test</Text>
      </CommonButton>
      <CommonButton
        onPress={() => {
          router.navigate("/animationScreen/gestureTest");
        }}
      >
        <Text>Gesture test</Text>
      </CommonButton>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
