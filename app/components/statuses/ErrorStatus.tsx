import { StyleSheet, Text, View } from "react-native";
import { useAppTheme } from "@/hooks/useAppTheme";
import { styleVariables } from "@/styles/variables";

export const ErrorStatus = () => {
  const themeStyles = useAppTheme();

  return (
    <View style={styles.container}>
      <Text style={themeStyles.title}>Error while loading data!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    gap: styleVariables.gaps.g10,
  },
});
