import { useRouter } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { Circle, Svg } from "react-native-svg";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export default function AnimationListScreen() {
  const router = useRouter();
  const randomWidth = useSharedValue(10);

  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const style = useAnimatedStyle(() => {
    return {
      width: withTiming(randomWidth.value, config),
    };
  });

  const r = useSharedValue<number>(20);

  const handlePress = () => {
    r.value += 10;
  };

  const animatedProps = useAnimatedProps(() => ({
    r: withTiming(r.value),
  }));

  const sv = useSharedValue<number>(0);
  const svStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: sv.value }],
  }));

  const OFFSET = 250;
  const TIME = 3000;
  const DELAY = 400;
  const handleRepeatPress = () => {
    // sv.value = withRepeat(withTiming(OFFSET), 5, true);
    sv.value = withDelay(
      DELAY,
      withSequence(
        // -OFFSET에서 시작
        withTiming(-OFFSET, { duration: TIME / 2 }),
        // -OFFSET과 OFFSET 사이를 5번 흔들기
        withRepeat(withTiming(OFFSET, { duration: TIME }), 5, true),
        // 마지막에 0으로 되돌아가기
        withTiming(0, { duration: TIME / 2 })
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text>xx</Text>
      <View style={styles.innerContainer}>
        <Animated.View style={[styles.box, style]} />
        <Button
          title="toggle"
          onPress={() => {
            randomWidth.value = Math.random() * 350;
          }}
        />
        <Animated.View
          style={{
            width: 100,
            height: 100,
            backgroundColor: "violet",
          }}
        />
        <Svg style={styles.svg}>
          <AnimatedCircle
            cx="50%"
            cy="50%"
            fill="#b58df1"
            animatedProps={animatedProps}
          />
        </Svg>
        <Button onPress={handlePress} title="Click me" />
        <Animated.View style={[styles.shakeView, svStyle]} />
        <Button onPress={handleRepeatPress} title="Click me" />

        <Button
          onPress={() => {
            router.navigate("/animationScreen/gestureTest");
          }}
          title="gesture test"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: 100,
    height: 80,
    backgroundColor: "black",
    margin: 30,
  },
  svg: {
    width: 100,
    height: 80,
  },
  shakeView: {
    width: 100,
    height: 100,
    backgroundColor: "green",
  },
});
