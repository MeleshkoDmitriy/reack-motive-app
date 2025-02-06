import { useAppTheme } from "@/hooks/useAppTheme";
import { styleVariables } from "@/styles/variables";
import { StyleSheet, View } from "react-native";

export const CharacterSeparator = () => {
  const themeStyles = useAppTheme();

  return <View style={[themeStyles.separator, styles.separator]}></View>;
};

const styles = StyleSheet.create({
  separator: {
    height: styleVariables.gaps.g10,
  },
});
