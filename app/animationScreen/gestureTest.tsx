import CommonListView from "@/components/listView/commonListView";
import { StyleSheet, Text, View } from "react-native";
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDecay,
  withTiming,
} from "react-native-reanimated";

const SIZE = 120;
const BOUNDARY_OFFSET = 50;

export default function GestureTestListScreen() {
  const pressed = useSharedValue<boolean>(false);

  // const tap = Gesture.Tap()
  //   .onBegin(() => {
  //     pressed.value = true;
  //   })
  //   .onFinalize(() => {
  //     pressed.value = false;
  //   });

  // const animatedStyles = useAnimatedStyle(() => ({
  //   backgroundColor: pressed.value ? "#FFE04B" : "#B58DF1",
  //   transform: [{ scale: withTiming(pressed.value ? 1.2 : 1) }],
  // }));

  const offset = useSharedValue<number>(0);

  // const pan = Gesture.Pan()
  //   .onBegin(() => {
  //     pressed.value = true;
  //   })
  //   .onChange((event) => {
  //     offset.value = event.translationX;
  //   })
  //   .onFinalize(() => {
  //     offset.value = withSpring(0);
  //     pressed.value = false;
  //   });

  const width = useSharedValue<number>(0);

  const pan = Gesture.Pan()
    .onChange((event) => {
      offset.value += event.changeX;
    })
    .onFinalize((event) => {
      offset.value = withDecay({
        velocity: event.velocityX,
        rubberBandEffect: true,
        clamp: [
          -(width.value / 2) + SIZE / 2 + BOUNDARY_OFFSET,
          width.value / 2 - SIZE / 2 - BOUNDARY_OFFSET,
        ],
      });
    });

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      { translateX: offset.value },
      { scale: withTiming(pressed.value ? 1.2 : 1) },
    ],
    backgroundColor: pressed.value ? "#FFE04B" : "#b58df1",
  }));
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text>GestureTest</Text>
        <GestureDetector
          // gesture={tap}
          gesture={pan}
        >
          <Animated.View
            style={[
              // styles.circle,
              styles.box,
              animatedStyles,
            ]}
          />
        </GestureDetector>
        <CommonListView
          data={[]}
          renderItem={() => {
            return <View></View>;
          }}
        />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  circle: {
    height: 120,
    width: 120,
    backgroundColor: "#b58df1",
    borderRadius: 500,
    cursor: "grab",
  },

  box: {
    height: SIZE,
    width: SIZE,
    backgroundColor: "#b58df1",
    borderRadius: 20,
    cursor: "grab",
    alignItems: "center",
    justifyContent: "center",
  },
});
