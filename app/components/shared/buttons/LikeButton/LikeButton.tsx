import { useFavorites } from "@/hooks/useFavorites";
import { styleVariables } from "@/styles/variables";
import { TCharacter } from "@/types/CharacterTypes";
import { TFavorite } from "@/types/FavoritesTypes";
import { Ionicons } from "@expo/vector-icons";
import { FC } from "react";
import { TouchableOpacity } from "react-native";

interface LikeButtonProps {
  item: TCharacter;
  isLiked: boolean;
}

export const LikeButton: FC<LikeButtonProps> = ({ item, isLiked }) => {
  const { addFavorite, deleteFavorite } = useFavorites();

  const handleFavoriteToggle = async () => {
    const favorite: TFavorite = {
      id: item.id,
      name: item.name,
      image: item.image,
      species: item.species,
      gender: item.gender,
      status: item.status,
    };

    try {
      if (isLiked) {
        await deleteFavorite(favorite.id.toString());
      } else {
        await addFavorite(favorite);
      }
    } catch (error) {
      console.error("Something went wrong with favorites action: ", error);
    }
  };

  return (
    <TouchableOpacity onPress={handleFavoriteToggle}>
      <Ionicons
        name={isLiked ? "heart" : "heart-outline"}
        size={24}
        color={
          isLiked
            ? styleVariables.colors.indicator.Female
            : styleVariables.colors.indicator.unknown
        }
      />
    </TouchableOpacity>
  );
};

