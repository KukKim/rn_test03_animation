import { Stack } from "expo-router";

export default function TestLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="animationTest" options={{ headerShown: false }} />
      <Stack.Screen name="gestureTest" options={{ headerShown: false }} />
    </Stack>
  );
}
