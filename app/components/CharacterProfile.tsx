import { useAppTheme } from "@/hooks/useAppTheme";
import { Image, Text, View } from "react-native";

export const CharacterProfile = ({ character }) => {
  const { name, image } = character;

  const themeStyles = useAppTheme();

  return (
    <View style={themeStyles.container}>
      <Text style={themeStyles.title}>Profile of {name}</Text>
      <View>
        <Image style={{ width: 100, height: 100 }} source={{ uri: image }} />
      </View>
    </View>
  );
};
