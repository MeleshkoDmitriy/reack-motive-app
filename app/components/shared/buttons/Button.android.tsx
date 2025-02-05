import { styleVariables } from "@/styles/variables";
import { Pressable, StyleSheet, Text } from "react-native";

export const Button = ({ onPress, textButton }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{textButton}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: styleVariables.colors.primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: styleVariables.borderRadiuses.r15,
    padding: styleVariables.gaps.g10,
  },
  text: {
    fontSize: styleVariables.fonts.f12,
    color: styleVariables.colors.white,
  },
});
