import DropdownFilters from "@/components/DropdownFilters";
import { CharactersList } from "@/components/lists/CharactersList";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { loadThemeFromStorage, selectTheme } from "@/store/slices/themeSlice";
import { getThemeStyles } from "@/styles/themeStyles";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";

export const CharactersScreen = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const selectedTheme = useAppSelector(selectTheme);
  const themeStyles = getThemeStyles(selectedTheme);

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
