import { FavoritesList } from "@/components/lists/FavoritesList";
import { SearchInput } from "@/components/shared/inputs/SearchInput";
import { useAppTheme } from "@/hooks/useAppTheme";
import { useDebounced } from "@/hooks/useDebounced";
import { useState } from "react";
import { View } from "react-native";

export const FavoritesScreen = ({}) => {
  const themeStyles = useAppTheme();
  const [searchValue, setSearchValue] = useState<string>("");
  const debouncedSearchValue = useDebounced(searchValue);

  return (
    <View style={themeStyles.wrapper}>
      <SearchInput
        value={searchValue}
        onChangeText={setSearchValue}
        placeholder="Search character..."
      />
      <FavoritesList searchValue={debouncedSearchValue} />
    </View>
  );
};
