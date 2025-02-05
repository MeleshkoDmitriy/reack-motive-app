import { FC } from "react";
import { StyleSheet, SafeAreaView, Platform } from "react-native";

interface AppSafeAreaViewProps {
  children: React.ReactNode;
}

export const AppSafeAriaView: FC<AppSafeAreaViewProps> = ({ children }) => {
  return <SafeAreaView style={styles.wrapper}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
  },
});
