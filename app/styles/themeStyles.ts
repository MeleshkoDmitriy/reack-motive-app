import { TThemeMode } from '@/types/ThemeTypes';
import { StyleSheet } from 'react-native';

const themeColors = {
  light: {
    background: "#ffffff",
    text: "#000000",
  },
  dark: {
    background: "#000000",
    text: "#ffffff",
  },
} as const;

export const getThemeStyles = (theme: TThemeMode) => {
  const currentColors = themeColors[theme];

  return StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: currentColors.background,
    },
    title: {
      color: currentColors.text,
      fontSize: 18,
    },
    text: {
      color: currentColors.text,
      fontSize: 12,
    },
  });
};
