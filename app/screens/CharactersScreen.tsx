import { routesStack } from "@/navigation/routes";
import { Pressable, Text, View } from "react-native";

export const CharactersScreen = ({ navigation }) => {
  return (
    <View>
      <Pressable onPress={() => navigation.navigate(routesStack.PROFILE)}>
        <Text>CharactersScreen</Text>
      </Pressable>
    </View>
  );
};
