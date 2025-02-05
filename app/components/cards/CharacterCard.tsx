import { useAppSelector } from "@/hooks/reduxHooks";
import { selectTheme } from "@/store/slices/themeSlice";
import { getThemeStyles } from "@/styles/themeStyles"
import { Image, Pressable, Text, View } from "react-native"

export const CharacterCard = ({ item, onPress }) => {
  const selectedTheme = useAppSelector(selectTheme);
  const themeStyles = getThemeStyles(selectedTheme);

  return (
    <Pressable onPress={onPress} style={themeStyles.container}>
      <View>
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri: item.image }}
        />
        <Text style={themeStyles.title}>{item.name}</Text>
        <Text style={themeStyles.text}>{item.species}</Text>
        <Text style={themeStyles.text}>{item.status}</Text>
      </View>
    </Pressable>
  )
}