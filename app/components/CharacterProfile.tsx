import { useAppTheme } from "@/hooks/useAppTheme";
import { styleVariables } from "@/styles/variables";
import { TCharacter } from "@/types/CharacterTypes";
import { FC } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { IdentityIndicator } from "./IdentityIndicator";
import { parseISO, format } from "date-fns";

interface CharacterProfileProps {
  character: TCharacter;
}

export const CharacterProfile: FC<CharacterProfileProps> = ({ character }) => {
  const { width } = useWindowDimensions();

  const {
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

  const date = parseISO(created);
  const formattedDate = format(date, "dd MMMM yyyy, HH:mm:ss");
  const themeStyles = useAppTheme();

  return (
    <ScrollView style={[themeStyles.container, styles.container]}>
      <View style={styles.header}>
        <Text style={themeStyles.title}>{name.toUpperCase()}</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.imageWrapper}>
          <Image
            style={[styles.image, { width: width / 2 }]}
            source={{ uri: image }}
          />
        </View>
        <View style={styles.detailsWrapper}>
          <View style={styles.details}>
            <IdentityIndicator info={species} />
            <Text style={themeStyles.text}>{species}</Text>
          </View>
          <View style={styles.details}>
            <IdentityIndicator info={status} />
            <Text style={themeStyles.text}>{status}</Text>
          </View>
          <View style={styles.details}>
            <IdentityIndicator info={gender} />
            <Text style={themeStyles.text}>{gender}</Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={themeStyles.text}>
          <Text style={styles.subtitle}>Created:</Text>{' '}{formattedDate}
        </Text>
        <Text style={themeStyles.text}>
          <Text style={styles.subtitle}>Origin:</Text>{' '}
          {origin?.name || "Unknown"}
        </Text>
        <Text style={themeStyles.text}>
          <Text style={styles.subtitle}>Location:</Text>{' '}
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
  },
  header: {
    marginBottom: styleVariables.gaps.g20,
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
    aspectRatio: 1,
  },
  detailsWrapper: {
    flex: 1,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    gap: styleVariables.gaps.g10,
    marginBottom: styleVariables.gaps.g10,
  },
  footer: {},
  subtitle: {
    fontWeight: "bold",
    color: styleVariables.colors.primary,
  },
});
