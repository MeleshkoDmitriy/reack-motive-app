import { CharacterProfile } from "@/components/CharacterProfile";
import { useAppSelector } from "@/hooks/reduxHooks";
import { selectTheme } from "@/store/slices/themeSlice";
import { getThemeStyles } from "@/styles/themeStyles";
import React from "react";
import { View } from "react-native";

export const ProfileScreen = ({ route }) => {
  const selectedTheme = useAppSelector(selectTheme);
  const themeStyles = getThemeStyles(selectedTheme);

  return (
    <View style={themeStyles.wrapper}>
      <CharacterProfile character={route.params} />
    </View>
  );
};
