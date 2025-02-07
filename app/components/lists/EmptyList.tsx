import { StyleSheet, Text, View } from "react-native";
import { useAppTheme } from "@/hooks/useAppTheme";
import { styleVariables } from "@/styles/variables";
import { FC } from "react";

interface EmptyListProps {
  title?: string;
}

export const EmptyList: FC<EmptyListProps> = ({
  title = "No results yet..",
}) => {
  const themeStyles = useAppTheme();

  return (
    <View style={[themeStyles.container, styles.container]}>
      <Text style={themeStyles.title}>{title}</Text>
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
