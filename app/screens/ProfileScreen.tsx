import { CharacterProfile } from "@/components/CharacterProfile";
import { useAppTheme } from "@/hooks/useAppTheme";
import React from "react";
import { View } from "react-native";

export const ProfileScreen = ({ route }) => {
  const themeStyles = useAppTheme();

  return (
    <View style={themeStyles.wrapper}>
      <CharacterProfile character={route.params} />
    </View>
  );
};
