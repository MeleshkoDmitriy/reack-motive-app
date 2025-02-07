import { StyleSheet, Text, View } from "react-native";
import { Button } from "../shared/buttons/Button/Button.ios";
import { FC } from "react";
import { useAppTheme } from "@/hooks/useAppTheme";
import { styleVariables } from "@/styles/variables";

interface OfflineStatusProps {
  onPress: () => void;
}

export const OfflineStatus: FC<OfflineStatusProps> = ({ onPress }) => {
  const themeStyles = useAppTheme();

  return (
    <View style={styles.container}>
      <Text style={themeStyles.title}>
        Please check your internet connection and try again
      </Text>
      <View style={styles.buttonWrapper}>
        <Button textButton="Try again" onPress={onPress} />
      </View>
      <Text style={themeStyles.title}>Saved characters:</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    gap: styleVariables.gaps.g10,
    paddingBottom: styleVariables.gaps.g10,
  },
  buttonWrapper: {
    width: 80,
    height: 40,
  },
});
