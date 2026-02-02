import {
  // CircleProgressBar,
  CommonBadge,
  CommonButton,
  CommonCard,
  CommonCheckBox,
  CommonInput,
  CommonPopOver,
  CommonSpinner,
  LineProgressBar,
  NumberBadge,
} from "@/components";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TestScreen() {
  const [showPopOver, setShowPopOver] = useState(false);
  const router = useRouter();
  const [checkBoxValue, setCheckBoxValue] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <CommonCard title="Badge">
          <CommonBadge typeText="1" />
          <CommonBadge type="secondary" typeText="3" />
        </CommonCard>
        <CommonCard title="Number Badge">
          <NumberBadge size="l" number={1} />
          <NumberBadge number={100} maxNumber={99} />
        </CommonCard>

        <CommonCard title="CheckBox Badge">
          <CommonCheckBox
            value={checkBoxValue}
            onValueChange={setCheckBoxValue}
          />
        </CommonCard>

        <CommonCard title="Input Badge">
          <CommonInput />
        </CommonCard>

        <CommonCard title="Spinner">
          <CommonSpinner />
        </CommonCard>

        <CommonCard title="ProgressBar">
          <LineProgressBar />
          {/* <CircleProgressBar /> */}
        </CommonCard>

        <CommonCard title="ProgressBar">
          <CommonButton
            onPress={() => {
              setShowPopOver(!showPopOver);
            }}
          >
            <Text> Show Pop Over</Text>
            {showPopOver && (
              <CommonPopOver>
                <Text>pop over</Text>
              </CommonPopOver>
            )}
          </CommonButton>
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
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
  },
});
