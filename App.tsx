import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import styled, { ThemeProvider } from "styled-components/native";

import { theme } from "./src/infrastructure/theme";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { NavigationContainer } from "@react-navigation/native";

import { colors } from "./src/infrastructure/theme/colors";
import { AppBottomStack } from "./src/AppBottomStack";
import { AppDrawerStack } from "./src/AppDrawerStack";

export default function App() {
  const [LatoLoaded] = useLato({
    Lato_400Regular,
  });

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  if (!oswaldLoaded || !LatoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <AppDrawerStack />
        </NavigationContainer>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const MainContainer = styled.View`
  flex: 1;
  background-color: ${colors.brand.dark};
`;
