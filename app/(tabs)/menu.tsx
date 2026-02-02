import { CommonHeader, CommonIcon } from "@/components";
import { Pressable, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MenuScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <CommonHeader
        leftTitle={"Menu"}
        rightCompnent={
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Pressable>
              <CommonIcon iconType="setting" />
            </Pressable>
            <Pressable
              onPress={() => {
                console.log("Open ");
              }}
            >
              <CommonIcon iconType="search" />
            </Pressable>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
