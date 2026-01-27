import { StyleSheet, Text, View } from "react-native";

import {
  CommonBadgeProps,
  containerType,
  fontSizeType,
  sizeType,
  textType,
} from "./types";

const CommonBadge = ({
  children,
  type = "primary",
  size = "m",
  typeText,
  ...props
}: CommonBadgeProps) => {
  return (
    <View
      style={[styles.container, sizeType[size], containerType[type]]}
      {...props}
    >
      {children}
      {typeText && (
        <Text style={[styles.innerText, fontSizeType[size], textType[type]]}>
          {typeText}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  innerText: {
    fontSize: 20,
  },
});

export default CommonBadge;
