import { useAppTheme } from "@/hooks/useAppTheme";
import { styleVariables } from "@/styles/variables";
import { TFavorite } from "@/types/FavoritesTypes";
import { FC } from "react";
import { StyleSheet } from "react-native";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface FavoriteCardProps {
  item: TFavorite;
}

export const FavoriteCard: FC<FavoriteCardProps> = ({ item }) => {
  const themeStyles = useAppTheme();

  return (
    <View style={[themeStyles.container, styles.container]}>
      <TouchableOpacity
      // onPress={onPress}
      >
        <View style={styles.content}>
          <View style={styles.imageWrapper}>
            <Image style={styles.image} source={{ uri: item.image }} />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    marginHorizontal: styleVariables.gaps.g20,
    marginBottom: styleVariables.gaps.g10,
  },
  content: {
    flexDirection: "row",
    gap: styleVariables.gaps.g20,
    justifyContent: "flex-start",
    padding: styleVariables.gaps.g20,
  },
  imageWrapper: {
    flex: 1,
    overflow: "hidden",
    aspectRatio: 1,
    borderRadius: styleVariables.borderRadiuses.rCircle,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    objectFit: "cover",
  },
  detailsWrapper: {
    flex: 1,
    gap: styleVariables.gaps.g10,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    gap: styleVariables.gaps.g10,
  },
});
