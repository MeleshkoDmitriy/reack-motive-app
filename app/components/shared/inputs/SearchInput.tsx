import { useAppTheme } from "@/hooks/useAppTheme";
import { styleVariables } from "@/styles/variables";
import { Ionicons } from "@expo/vector-icons";
import { FC } from "react";
import { StyleSheet } from "react-native";
import {
  NativeSyntheticEvent,
  TextInputChangeEventData,
  View,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";

interface SearchInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

export const SearchInput: FC<SearchInputProps> = ({
  value,
  onChangeText,
  placeholder = "Search...",
}) => {
  const themeStyles = useAppTheme();

  const handleChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    onChangeText(e.nativeEvent.text);
  };
  return (
    <View style={[themeStyles.container, styles.container]}>
      <View style={styles.inputContainer}>
        <Ionicons
          name="search"
          size={20}
          color={styleVariables.colors.primary}
          style={styles.icon}
        />
        <TextInput
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          placeholderTextColor={styleVariables.colors.primary}
          autoCorrect={false}
          autoCapitalize="none"
          style={styles.input}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 0,
    marginHorizontal: styleVariables.gaps.g20,
    marginTop: styleVariables.gaps.g20,
    padding: styleVariables.gaps.g20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    borderWidth: 1,
    borderColor: styleVariables.colors.primary,
    backgroundColor: styleVariables.colors.white,
    borderRadius: styleVariables.borderRadiuses.r10,
    height: 45,
  },
  icon: {
    marginRight: styleVariables.gaps.g10,
    paddingLeft: styleVariables.gaps.g10,
  },
  input: {
    flex: 1,
    color: styleVariables.colors.primary,
    fontSize: styleVariables.fonts.f16,
  },
});
