import { CommonHeader, CommonIcon, CommonInput } from "@/components";
import { useState } from "react";
import {
  LayoutAnimation,
  Platform,
  Pressable,
  StyleSheet,
  UIManager,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function MenuScreen() {
  const [searchable, setSearchable] = useState(false);

  const setSearchableWithAnimation = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    setSearchable(!searchable);
  };
  return (
    <SafeAreaView style={styles.container}>
      {searchable ? (
        <CommonHeader
          leftComponent={
            <View
              style={{
                width: "100%",
              }}
            >
              <CommonInput />
            </View>
          }
          rightCompnent={
            <View
              style={{
                flexDirection: "row",
                gap: 5,
              }}
            >
              <Pressable onPress={setSearchableWithAnimation}>
                <CommonIcon iconType="search" />
              </Pressable>
            </View>
          }
        />
      ) : (
        <CommonHeader
          leftTitle={"Menu"}
          rightCompnent={
            <View
              style={{
                flexDirection: "row",
                gap: 5,
              }}
            >
              <Pressable>
                <CommonIcon iconType="setting" />
              </Pressable>
              <Pressable onPress={setSearchableWithAnimation}>
                <CommonIcon iconType="search" />
              </Pressable>
            </View>
          }
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
