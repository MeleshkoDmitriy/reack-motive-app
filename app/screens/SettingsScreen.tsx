import ThemeSettings from "@/components/ThemeSettings";
import { useAppSelector } from "@/hooks/reduxHooks";
import { selectTheme } from "@/store/slices/themeSlice";
import { getThemeStyles } from "@/styles/themeStyles";
import { View } from "react-native";

export const SettingsScreen = () => {
  const selectedTheme = useAppSelector(selectTheme);
  const themeStyles = getThemeStyles(selectedTheme);

  return (
    <View style={themeStyles.wrapper}>
      <ThemeSettings />
    </View>
  );
};
