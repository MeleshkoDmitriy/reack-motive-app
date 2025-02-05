import { useAppSelector } from "@/hooks/reduxHooks";
import { selectTheme } from "@/store/slices/themeSlice";
import { getThemeStyles } from "@/styles/themeStyles";
import { styleVariables } from "@/styles/variables";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export const CharacterCard = ({ item, onPress }) => {
  const selectedTheme = useAppSelector(selectTheme);
  const themeStyles = getThemeStyles(selectedTheme);

  return (
    <View style={[themeStyles.container, styles.container]}>
      <Pressable onPress={onPress}>
        <View style={styles.content}>
          <View style={styles.imageWrapper}>
            <Image style={styles.image} source={{ uri: item.image }} />
          </View>
          <View style={styles.detailsWrapper}>
            <Text style={themeStyles.title}>{item.name}</Text>
            <Text style={themeStyles.text}>{item.species}</Text>
            <Text style={themeStyles.text}>{item.status}</Text>
          </View>
        </View>
      </Pressable>
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
    borderRadius: styleVariables.borderRadiuses.r15,
  },
  image: {
    aspectRatio: 1,
    borderRadius: styleVariables.borderRadiuses.r15,
  },
  detailsWrapper: {
    flex: 1,
  },
});
