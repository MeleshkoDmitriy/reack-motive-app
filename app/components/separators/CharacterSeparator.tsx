import { useAppSelector } from "@/hooks/reduxHooks";
import { selectTheme } from "@/store/slices/themeSlice";
import { getThemeStyles } from "@/styles/themeStyles";
import { View } from "react-native";

export const CharacterSeparator = () => {
  const selectedTheme = useAppSelector(selectTheme);
  const themeStyles = getThemeStyles(selectedTheme);

  return <View style={themeStyles.separator}></View>;
};
