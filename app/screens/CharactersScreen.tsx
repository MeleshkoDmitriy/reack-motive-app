import DropdownFilters from "@/components/DropdownFilters";
import { CharactersList } from "@/components/lists/CharactersList";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { useAppTheme } from "@/hooks/useAppTheme";
import { CharacterStackParamList } from "@/navigation/Navigation";
import { loadThemeFromStorage, selectTheme } from "@/store/slices/themeSlice";
import { StackNavigationProp } from "@react-navigation/stack";
import { useEffect } from "react";
import { View } from "react-native";

interface CharactersScreenProps {
  navigation: StackNavigationProp<CharacterStackParamList, "CHARACTERS">;
}

export const CharactersScreen: React.FC<CharactersScreenProps> = ({
  navigation,
}) => {
  const dispatch = useAppDispatch();
  const themeStyles = useAppTheme();

  useEffect(() => {
    const initializeTheme = async () => {
      try {
        await dispatch(loadThemeFromStorage());
      } catch (error) {
        console.error("Failed to load theme:", error);
      }
    };

    initializeTheme();
  }, [dispatch]);

  return (
    <View style={themeStyles.wrapper}>
      <DropdownFilters />
      <CharactersList navigation={navigation} />
    </View>
  );
};
