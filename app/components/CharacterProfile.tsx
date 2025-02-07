import { useAppTheme } from "@/hooks/useAppTheme";
import { styleVariables } from "@/styles/variables";
import { TCharacter } from "@/types/CharacterTypes";
import { FC } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { IdentityIndicator } from "./IdentityIndicator";
import { getFormattedDate } from "@/utils/getFormattedDate";
import { LikeButton } from "./shared/buttons/LikeButton/LikeButton";
import { useFavorites } from "@/hooks/useFavorites";

interface CharacterProfileProps {
  character: TCharacter;
}

export const CharacterProfile: FC<CharacterProfileProps> = ({ character }) => {
  const {
    id,
    name,
    image,
    created,
    episode,
    gender,
    location,
    origin,
    species,
    status,
    type,
    url,
  } = character;

  const formattedDate = getFormattedDate(created);
  const themeStyles = useAppTheme();
  const { defineLike } = useFavorites();

  return (
    <ScrollView style={[themeStyles.container, styles.container]}>
      <View style={styles.header}>
        <Text style={themeStyles.title}>{name.toUpperCase()}</Text>
        <LikeButton item={character} isLiked={defineLike(id)} />
      </View>
      <View style={styles.content}>
        <View style={styles.imageWrapper}>
          <Image style={[styles.image]} source={{ uri: image }} />
        </View>
      </View>
      <View style={styles.footer}>
        <View style={styles.detailsWrapper}>
          <View style={styles.details}>
            <Text style={styles.subtitle}>Species</Text>
            <IdentityIndicator info={species} />
            <Text style={themeStyles.text}>{species}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.subtitle}>Status</Text>
            <IdentityIndicator info={status} />
            <Text style={themeStyles.text}>{status}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.subtitle}>Gender</Text>
            <IdentityIndicator info={gender} />
            <Text style={themeStyles.text}>{gender}</Text>
          </View>
        </View>
        <Text style={themeStyles.text}>
          <Text style={styles.subtitle}>Created:</Text> {formattedDate}
        </Text>
        <Text style={themeStyles.text}>
          <Text style={styles.subtitle}>Origin:</Text>{" "}
          {origin?.name || "Unknown"}
        </Text>
        <Text style={themeStyles.text}>
          <Text style={styles.subtitle}>Location:</Text>{" "}
          {location?.name || "Unknown"}
        </Text>
        {type && (
          <Text style={themeStyles.text}>
            <Text style={styles.subtitle}>Type:</Text> {type}
          </Text>
        )}
        <Text style={themeStyles.text}>
          <Text style={styles.subtitle}>URL:</Text> {url}
        </Text>
        {episode.length > 0 && (
          <View>
            <Text style={themeStyles.text}>
              <Text style={styles.subtitle}>Episode:</Text>
            </Text>
            {episode.map((e) => (
              <Text key={e} style={themeStyles.text}>
                {e}
              </Text>
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: styleVariables.gaps.g20,
    gap: styleVariables.gaps.g20,
    borderRadius: 0,
  },
  header: {
    marginBottom: styleVariables.gaps.g20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  content: {
    flexDirection: "row",
    gap: styleVariables.gaps.g20,
    justifyContent: "flex-start",
    marginBottom: styleVariables.gaps.g20,
  },
  imageWrapper: {
    overflow: "hidden",
    borderRadius: styleVariables.borderRadiuses.r15,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  detailsWrapper: {
    flex: 1,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    gap: styleVariables.gaps.g10,
  },
  footer: {},
  subtitle: {
    fontWeight: "bold",
    color: styleVariables.colors.primary,
  },
});
