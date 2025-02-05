import { TThemeMode } from "@/types/ThemeTypes";
import { StyleSheet, Platform } from "react-native";
import { styleVariables } from "./variables";

const themeColors = {
  light: {
    backgroundWrapper: styleVariables.colors.white,
    backgroundSeparator: styleVariables.colors.white,
    backgroundContainer: styleVariables.colors.secondaryLight,
    shadowColor: styleVariables.colors.bgLight,
    title: styleVariables.colors.primary,
    text: styleVariables.colors.secondaryDark,
  },
  dark: {
    backgroundWrapper: styleVariables.colors.black,
    backgroundSeparator: styleVariables.colors.black,
    backgroundContainer: styleVariables.colors.secondaryDark,
    shadowColor: styleVariables.colors.secondaryLight,
    title: styleVariables.colors.primary,
    text: styleVariables.colors.secondaryLight,
  },
} as const;

export const getThemeStyles = (theme: TThemeMode) => {
  const currentColors = themeColors[theme];

  // wrapper - screens, block
  // container - cards
  // title - title
  // text - text, button, input

  return StyleSheet.create({
    wrapper: {
      flex: 1,
      backgroundColor: currentColors.backgroundWrapper,
    },
    separator: {
      backgroundColor: currentColors.backgroundSeparator,
    },
    container: {
      flex: 1,
      backgroundColor: currentColors.backgroundContainer,
      borderRadius: styleVariables.borderRadiuses.r15,
      ...Platform.select({
        ios: {
          shadowColor: currentColors.shadowColor,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 2.5,
        },
        android: {
          elevation: 5,
        },
      }),
    },
    title: {
      color: currentColors.title,
      fontSize: styleVariables.fonts.f20,
    },
    text: {
      color: currentColors.text,
      fontSize: styleVariables.fonts.f16,
    },
  });
};
