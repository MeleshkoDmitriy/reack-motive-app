import { useAppTheme } from "@/hooks/useAppTheme";
import { styleVariables } from "@/styles/variables";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { IdentityIndicator } from "../IdentityIndicator";
import { TCharacter } from "@/types/CharacterTypes";
import { FC } from "react";

interface CharacterCardProps {
  item: TCharacter
  onPress: () => void;
}

export const CharacterCard: FC<CharacterCardProps> = ({ item, onPress }) => {
  const themeStyles = useAppTheme();

  return (
    <View style={[themeStyles.container, styles.container]}>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.content}>
          <View style={styles.imageWrapper}>
            <Image style={styles.image} source={{ uri: item.image }} />
          </View>
          <View style={styles.detailsWrapper}>
            <View style={styles.details}>
              <Text style={themeStyles.title}>{item.name}</Text>
            </View>
            <View style={styles.details}>
              <IdentityIndicator info={item.species} />
              <Text style={themeStyles.text}>{item.species}</Text>
            </View>
            <View style={styles.details}>
              <IdentityIndicator info={item.status} />
              <Text style={themeStyles.text}>{item.status}</Text>
            </View>
            <View style={styles.details}>
              <IdentityIndicator info={item.gender} />
              <Text style={themeStyles.text}>{item.gender}</Text>
            </View>
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
    objectFit: 'cover',    
  },
  detailsWrapper: {
    flex: 1,
    gap: styleVariables.gaps.g10,
  },
  details: {
    flexDirection: "row",
    alignItems: 'center',
    gap: styleVariables.gaps.g10,
  },
});
