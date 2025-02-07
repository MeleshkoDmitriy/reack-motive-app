import { FavoritesList } from "@/components/lists/FavoritesList";
import { useAppTheme } from "@/hooks/useAppTheme";
import { View } from "react-native";

export const FavoritesScreen = ({}) => {
  const themeStyles = useAppTheme();

  return (
    <View style={themeStyles.wrapper}>
      <FavoritesList />
    </View>
  );
};
