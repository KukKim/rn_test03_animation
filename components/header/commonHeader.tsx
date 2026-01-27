import { StyleSheet, View, ViewProps } from "react-native";

const CommonHeader = ({ children, ...props }: ViewProps) => {
  return (
    <View style={styles.container} {...props}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});

export default CommonHeader;
