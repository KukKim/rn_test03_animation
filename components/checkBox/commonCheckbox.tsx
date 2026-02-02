import { Pressable, StyleSheet } from "react-native";
import { CommonIcon } from "../icon";
import { CheckBoxProps, containerType, sizeType } from "./types";

const CommonCheckBox = ({
  children,
  value,
  onValueChange,
  type = "primary",
  size = "m",
  ...props
}: CheckBoxProps) => {
  const handleChange = () => {
    onValueChange?.(!value);
  };

  return (
    <Pressable
      onPress={handleChange}
      style={[styles.container, sizeType[size], containerType[type]]}
      {...props}
    >
      {value && (
        <CommonIcon
          iconType="check"
          // size={16} color={checkType[type]}
        />
      )}
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
