import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { Variables } from "../../../style";

SplashScreen.preventAutoHideAsync();

const AppContainer = ({ children }: { children: JSX.Element }): JSX.Element | null => {
  const [fontsLoaded] = useFonts({
    [Variables.fonts
      .title]: require("../../../../../assets/fonts/Quicksand-Regular.ttf"),
    [Variables.fonts
      .text]: require("../../../../../assets/fonts/Poppins-Regular.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      const hide = async () => {
        await SplashScreen.hideAsync();
      };
      hide();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return children;
}

export default AppContainer;