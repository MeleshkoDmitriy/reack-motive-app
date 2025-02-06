import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { selectTheme, toggleThemeMode } from "@/store/slices/themeSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Switcher } from "./shared/switchers/Switcher";
import { useAppTheme } from "@/hooks/useAppTheme";
import { styleVariables } from "@/styles/variables";

const ThemeSettings = () => {
  const dispatch = useAppDispatch();
  const selectedTheme = useAppSelector(selectTheme);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    selectedTheme === "dark"
  );

  const themeStyles = useAppTheme();

  const handleToggleSwitch = async () => {
    setIsDarkMode((prev) => !prev);
    dispatch(toggleThemeMode());

    const newTheme = selectedTheme === "light" ? "dark" : "light";
    await AsyncStorage.setItem("themeMode", newTheme);
  };

  useEffect(() => {
    setIsDarkMode(selectedTheme === "dark");
  }, [selectedTheme]);

  return (
    <View style={[themeStyles.container, styles.container]}>
      <Text style={[themeStyles.text, styles.text]}>Dark Theme</Text>
      <Switcher
        handleToggleSwitch={handleToggleSwitch}
        isDarkMode={isDarkMode}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "center",
    gap: styleVariables.gaps.g20,
    height: 50,
    borderRadius: 0,
  },
  text: {
    fontSize: styleVariables.fonts.f20,
    fontWeight: "bold",
  },
})

export default React.memo(ThemeSettings);