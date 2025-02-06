import { CharacterProfile } from "@/components/CharacterProfile";
import { useAppTheme } from "@/hooks/useAppTheme";
import { CharacterStackParamList } from "@/navigation/Navigation";
import { RouteProp } from "@react-navigation/core";
import React, { FC } from "react";
import { View } from "react-native";

interface ProfileScreenProps {
  route: RouteProp<CharacterStackParamList, 'PROFILE'>;
}
export const ProfileScreen: FC<ProfileScreenProps> = ({ route }) => {
  const themeStyles = useAppTheme();

  return (
    <View style={themeStyles.wrapper}>
      <CharacterProfile character={route.params} />
    </View>
  );
};
