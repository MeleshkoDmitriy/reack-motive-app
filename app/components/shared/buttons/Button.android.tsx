import { styleVariables } from "@/styles/variables";
import { FC } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

interface ButtonProps {
  onPress: () => void;
  textButton: string;
}

export const Button: FC<ButtonProps> = ({ onPress, textButton }) => {
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
