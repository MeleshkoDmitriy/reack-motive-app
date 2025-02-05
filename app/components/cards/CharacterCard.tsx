import { useAppSelector } from "@/hooks/reduxHooks";
import { selectTheme } from "@/store/slices/themeSlice";
import { getThemeStyles } from "@/styles/themeStyles"
import { styleVariables } from "@/styles/variables";
import { Image, Pressable, StyleSheet, Text, View } from "react-native"

export const CharacterCard = ({ item, onPress }) => {
  const selectedTheme = useAppSelector(selectTheme);
  const themeStyles = getThemeStyles(selectedTheme);

  return (
    <View style={[themeStyles.container, styles.container]}>
    <Pressable onPress={onPress}>
      <View style={styles.content}>
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: item.image }}
        />
        <Text style={themeStyles.title}>{item.name}</Text>
        <Text style={themeStyles.text}>{item.species}</Text>
        <Text style={themeStyles.text}>{item.status}</Text>
      </View>
    </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  content: {
    padding: styleVariables.gaps.g20
  },
})