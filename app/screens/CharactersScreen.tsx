import DropdownFilters from "@/components/DropdownFilters";
import { CharactersList } from "@/components/lists/CharactersList";
import { useAppDispatch } from "@/hooks/reduxHooks";
import { useAppTheme } from "@/hooks/useAppTheme";
import { CharacterStackParamList } from "@/navigation/Navigation";
import { loadThemeFromStorage } from "@/store/slices/themeSlice";
import { StackNavigationProp } from "@react-navigation/stack";
import { useCallback, useEffect, useRef } from "react";
import { View } from "react-native";
import { FlatList as RNFlatList } from 'react-native'; 

interface CharactersScreenProps {
  navigation: StackNavigationProp<CharacterStackParamList, "CHARACTERS">;
}

export const CharactersScreen: React.FC<CharactersScreenProps> = ({
  navigation,
}) => {
  const dispatch = useAppDispatch();
  const themeStyles = useAppTheme();
  const listRef = useRef<RNFlatList<any>>(null)

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

  const handleReset = useCallback(() => {
    if (listRef.current) {
      listRef.current.scrollToOffset({ animated: true, offset: 0 });
    }
  }, []);
  
  return (
    <View style={themeStyles.wrapper}>
      <DropdownFilters handleReset={handleReset} />
      <CharactersList ref={listRef} navigation={navigation} />
    </View>
  );
};
