import { useAppTheme } from "@/hooks/useAppTheme";
import { styleVariables } from "@/styles/variables";
import { TFavorite } from "@/types/FavoritesTypes";
import { FC, useCallback, useState } from "react";
import { StyleSheet } from "react-native";
import { Image, TouchableOpacity, View } from "react-native";
import { IdentityIndicator } from "../IdentityIndicator";
import { TCharacter } from "@/types/CharacterTypes";
import { LikeButton } from "../shared/buttons/LikeButton/LikeButton";
import { FavoriteProfile } from "../profiles/FavoriteProfile";
import { AppModal } from "../shared/AppModal";

interface FavoriteCardProps {
  item: TFavorite | TCharacter;
  isLiked: boolean;
}

export const FavoriteCard: FC<FavoriteCardProps> = ({ item, isLiked }) => {
  const themeStyles = useAppTheme();
  const [modalVisible, setModalVisible] = useState(false);

  const handleCardClick = useCallback(() => {
    setModalVisible(true);
  }, []);

  return (
    <View style={[themeStyles.container, styles.container]}>
      <TouchableOpacity onPress={handleCardClick}>
        <View style={styles.content}>
          <View style={styles.imageWrapper}>
            <Image style={styles.image} source={{ uri: item.image }} />
          </View>
          <View style={styles.indicators}>
            <IdentityIndicator info={item.gender} />
            <IdentityIndicator info={item.status} />
            <IdentityIndicator info={item.species} />
          </View>
          <View>
            <LikeButton item={item} isLiked={isLiked} />
          </View>
        </View>
      </TouchableOpacity>
      <AppModal modalVisible={modalVisible} setModalVisible={setModalVisible}>
          <FavoriteProfile favorite={item} />
      </AppModal>
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
});
