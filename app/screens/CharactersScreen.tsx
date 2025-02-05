import DropdownFilters from "@/components/DropdownFilters";
import { CharactersList } from "@/components/lists/CharactersList";
import { StyleSheet, View } from "react-native";

export const CharactersScreen = ({ navigation }) => {
  return (
    <View style={styles.wrapper}>
      <DropdownFilters />
      <CharactersList navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
});
