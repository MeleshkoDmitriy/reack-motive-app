import { StyleSheet, Text, View } from "react-native";
import { useAppTheme } from "@/hooks/useAppTheme";
import { styleVariables } from "@/styles/variables";

export const EmptyList = () => {
  const themeStyles = useAppTheme();

  return (
    <View style={[themeStyles.container, styles.container]}>
      <Text style={themeStyles.title}>No results yet..</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    gap: styleVariables.gaps.g10,
    marginHorizontal: styleVariables.gaps.g20,
    padding: styleVariables.gaps.g20,
  },
});
