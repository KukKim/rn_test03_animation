import { CommonHeader, CommonIcon } from "@/components";
import { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MenuScreen() {
  const [searchable, setSearchable] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      {searchable ? (
        <View></View>
      ) : (
        <View>
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
                <Pressable
                  onPress={() => {
                    setSearchable(!searchable);
                  }}
                >
                  <CommonIcon iconType="search" />
                </Pressable>
              </View>
            }
          />
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
