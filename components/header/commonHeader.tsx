import { StyleSheet, Text, View } from "react-native";
import { HeaderProps } from "./types";

const CommonHeader = ({
  leftComponent,
  leftTitle,
  rightCompnent,
  rightTitle,
  ...props
}: HeaderProps) => {
  const LeftCompnont = () => {
    if (leftTitle) {
      return <Text>{leftTitle}</Text>;
    } else if (leftComponent) {
      return leftComponent;
    }
    return <View></View>;
  };
  const RightComponent = () => {
    if (rightTitle) {
      return <Text>{rightTitle}</Text>;
    } else if (rightCompnent) {
      return rightCompnent;
    }
    return <View></View>;
  };
  return (
    <View style={styles.container} {...props}>
      <View>
        <LeftCompnont />
      </View>
      <View>
        <RightComponent />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default CommonHeader;
