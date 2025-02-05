import DropdownFilters from "@/components/DropdownFilters";
import { CharactersList } from "@/components/lists/CharactersList";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { loadThemeFromStorage } from "@/store/slices/themeSlice";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";

export const CharactersScreen = ({ navigation }) => {
  const dispatch = useAppDispatch();

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
    <View style={styles.wrapper}>
      <DropdownFilters />
      <CharactersList navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
});
