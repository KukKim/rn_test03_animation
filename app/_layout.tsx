import theme from "@/styles/theme";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { ThemeProvider } from "styled-components";

// Set the animation options. This is optional.
// TODO : Fix ('Splashscreen.setOptions' cannot be used in Expo Go. To customize the splash screen, you can use development builds.)
SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

export default function RootLayout() {
  return (
    <ThemeProvider theme={theme}>
      <Stack
        screenOptions={{
          headerBackButtonDisplayMode: "minimal",
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* <Stack.Screen name="index" /> */}
      </Stack>
    </ThemeProvider>
  );
}
