import ThemeSettings from "@/components/ThemeSettings";
import { useAppTheme } from "@/hooks/useAppTheme";
import { View } from "react-native";

export const SettingsScreen = () => {
  const themeStyles = useAppTheme();

  return (
    <View style={themeStyles.wrapper}>
      <ThemeSettings />
    </View>
  );
};
