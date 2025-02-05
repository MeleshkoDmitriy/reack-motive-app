import { useAppSelector } from "@/hooks/reduxHooks";
import { selectTheme } from "@/store/slices/themeSlice";
import { getThemeStyles } from "@/styles/themeStyles";
import { Image, Text, View } from "react-native";

export const CharacterProfile = ({ character }) => {
  const { name, image } = character;

  const selectedTheme = useAppSelector(selectTheme);
  const themeStyles = getThemeStyles(selectedTheme);

  return (
    <View style={themeStyles.container}>
      <Text style={themeStyles.title}>Profile of {name}</Text>
      <View>
        <Image style={{ width: 100, height: 100 }} source={{ uri: image }} />
      </View>
    </View>
  );
};
