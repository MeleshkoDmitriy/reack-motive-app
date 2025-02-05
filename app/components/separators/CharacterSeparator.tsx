import { useAppSelector } from "@/hooks/reduxHooks";
import { selectTheme } from "@/store/slices/themeSlice";
import { getThemeStyles } from "@/styles/themeStyles";
import { styleVariables } from "@/styles/variables";
import { StyleSheet, View } from "react-native";

export const CharacterSeparator = () => {
  const selectedTheme = useAppSelector(selectTheme);
  const themeStyles = getThemeStyles(selectedTheme);

  return <View style={[themeStyles.separator, styles.separator]}></View>;
};

const styles = StyleSheet.create({
  separator: {
    height: styleVariables.gaps.g10,
  },
});
