import { useAppTheme } from "@/hooks/useAppTheme";
import { styleVariables } from "@/styles/variables";
import { TFavorite } from "@/types/FavoritesTypes";
import { FC } from "react";
import { StyleSheet } from "react-native";
import { Image, TouchableOpacity, View } from "react-native";
import { IdentityIndicator } from "../IdentityIndicator";
import { TCharacter } from "@/types/CharacterTypes";
import { LikeButton } from "../shared/buttons/LikeButton/LikeButton";

interface FavoriteCardProps {
  item: TFavorite | TCharacter;
  isLiked: boolean;
}

export const FavoriteCard: FC<FavoriteCardProps> = ({ item, isLiked }) => {
  const themeStyles = useAppTheme();

  return (
    <View style={[themeStyles.container, styles.container]}>
      <TouchableOpacity>
        <View style={styles.content}>
          <View style={styles.imageWrapper}>
            <Image style={styles.image} source={{ uri: item.image }} />
          </View>
          <View style={styles.indicators}>
            <IdentityIndicator info={item.gender} />
            <IdentityIndicator info={item.status} />
            <IdentityIndicator info={item.species} />
          </View>
          <View style={styles.like}>
            <LikeButton item={item} isLiked={isLiked} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
    marginHorizontal: styleVariables.gaps.g20,
    marginBottom: styleVariables.gaps.g20,
    padding: styleVariables.gaps.g10,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: styleVariables.gaps.g10,
    alignItems: "center",
  },
  imageWrapper: {
    overflow: "hidden",
    aspectRatio: 1,
    height: 50,
    borderRadius: styleVariables.borderRadiuses.rCircle,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  indicators: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "stretch",
    gap: styleVariables.gaps.g10,
  },
  like: {},
});
