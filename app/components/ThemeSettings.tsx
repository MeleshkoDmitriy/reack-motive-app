import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { selectTheme, toggleThemeMode } from "@/store/slices/themeSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";

const ThemeSettings = () => {
  const dispatch = useAppDispatch();
  const selectedTheme = useAppSelector(selectTheme);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    selectedTheme === "dark"
  );

  const handleToggleSwitch = async () => {
    setIsDarkMode((prev) => !prev);
    dispatch(toggleThemeMode());

    const newTheme = selectedTheme === "light" ? "dark" : "light";
    await AsyncStorage.setItem('themeMode', newTheme);
  };

  useEffect(() => {
    setIsDarkMode(selectedTheme === "dark");
  }, [selectedTheme]);

  return (
    <View style={styles.wrapper}>
      <Text>Dark Theme</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={handleToggleSwitch}
        value={isDarkMode}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
});

export default React.memo(ThemeSettings);
