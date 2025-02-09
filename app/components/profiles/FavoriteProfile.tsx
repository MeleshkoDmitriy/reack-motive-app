import { useAppTheme } from "@/hooks/useAppTheme";
import { styleVariables } from "@/styles/variables";
import { TCharacter } from "@/types/CharacterTypes";
import { TFavorite } from "@/types/FavoritesTypes";
import { FC } from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native";
import { Image, Text } from "react-native";
import { IdentityIndicator } from "../IdentityIndicator";

interface FavoriteProfileProps {
  favorite: TFavorite | TCharacter;
}

export const FavoriteProfile: FC<FavoriteProfileProps> = ({ favorite }) => {
  const { gender, name, image, species, status } = favorite;
  const themeStyles = useAppTheme();

  return (
    <View style={[themeStyles.container, styles.container]}>
      <View style={styles.header}>
        <View style={styles.imageWrapper}>
          <Image style={styles.image} source={{ uri: image }} />
        </View>
      </View>

      <View style={styles.content}>
        <Text
          style={[themeStyles.title, { marginBottom: styleVariables.gaps.g10 }]}
        >
          {name}
        </Text>
        <View style={styles.contentItem}>
          <IdentityIndicator info={species} />
          <Text style={themeStyles.text}>Species: {species}</Text>
        </View>
        <View style={styles.contentItem}>
          <IdentityIndicator info={gender} />
          <Text style={themeStyles.text}>Gender: {gender}</Text>
        </View>
        <View style={styles.contentItem}>
          <IdentityIndicator info={status} />
          <Text style={themeStyles.text}>Status: {status}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: styleVariables.borderRadiuses.r15,
    padding: styleVariables.gaps.g30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imageWrapper: {
    width: 200,
    aspectRatio: 1,
    borderRadius: styleVariables.borderRadiuses.rCircle,
    overflow: "hidden",
    marginBottom: styleVariables.gaps.g10,
  },
  image: {
    aspectRatio: 1,
  },
  content: {},

  contentItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: styleVariables.gaps.g10,
  }
});
