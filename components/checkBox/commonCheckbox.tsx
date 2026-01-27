import Icon from "@expo/vector-icons/AntDesign";
import { Pressable, StyleSheet } from "react-native";
import { CheckBoxProps, containerType, sizeType } from "./types";

const CommonCheckBox = ({
  children,
  value = false,
  type = "primary",
  size = "m",
  ...props
}: CheckBoxProps) => {
  return (
    <Pressable
      style={[styles.container, sizeType[size], containerType[type]]}
      {...props}
    >
      {value && <Icon name="check" size={16} color="#000000" />}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
  },
});

export default CommonCheckBox;
