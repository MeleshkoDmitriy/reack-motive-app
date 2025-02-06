import DropdownFilters from "@/components/DropdownFilters";
import { CharactersList } from "@/components/lists/CharactersList";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { useAppTheme } from "@/hooks/useAppTheme";
import { loadThemeFromStorage, selectTheme } from "@/store/slices/themeSlice";
import { styleVariables } from "@/styles/variables";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";

export const CharactersScreen = ({ navigation }) => {
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
    <View style={[themeStyles.wrapper, styles.wrapper]}>
      <DropdownFilters />
      <CharactersList navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingBottom: 100,
  },
})
