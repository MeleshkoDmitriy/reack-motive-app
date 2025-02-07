import {
  useAddFavoriteMutation,
  useDeleteFavoriteMutation,
} from "@/store/slices/api/favoritesApi";
import { styleVariables } from "@/styles/variables";
import { TCharacter } from "@/types/CharacterTypes";
import { Ionicons } from "@expo/vector-icons";
import { FC, useState } from "react";
import { TouchableOpacity } from "react-native";

interface LikeButtonProps {
  item: TCharacter;
  isLiked: boolean;
}

export const LikeButton: FC<LikeButtonProps> = ({ item, isLiked }) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(isLiked);

  const [addFavorite] = useAddFavoriteMutation();
  const [deleteFavorite] = useDeleteFavoriteMutation();

  const handleFavoriteToggle = async () => {
    const favorite = {
      id: item.id,
      name: item.name,
      image: item.image,
      species: item.species,
      gender: item.gender,
      status: item.status,
    };

    try {
      if (isFavorite) {
        await deleteFavorite(favorite.id.toString());
      } else {
        await addFavorite(favorite);
      }
      setIsFavorite((prev) => !prev);
    } catch (error) {
      console.error("Something went wrong with favorites action: ", error);
    }
  };
  return (
    <TouchableOpacity onPress={handleFavoriteToggle}>
      <Ionicons
        name={isFavorite ? "heart" : "heart-outline"}
        size={24}
        color={
          isFavorite
            ? styleVariables.colors.indicator.Female
            : styleVariables.colors.indicator.unknown
        }
      />
    </TouchableOpacity>
  );
};
