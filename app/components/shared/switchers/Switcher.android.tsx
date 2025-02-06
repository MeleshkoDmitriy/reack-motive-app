import { styleVariables } from "@/styles/variables";
import { FC } from "react";
import { Switch } from "react-native";

interface SwitcherProps {
  isDarkMode: boolean;
  handleToggleSwitch: () => void;
}

export const Switcher: FC<SwitcherProps> = ({
  isDarkMode,
  handleToggleSwitch,
}) => {
  return (
    <Switch
      trackColor={{
        false: styleVariables.colors.bgDark,
        true: styleVariables.colors.bgLight,
      }}
      thumbColor={
        isDarkMode
          ? styleVariables.colors.primary
          : styleVariables.colors.primary
      }
      onValueChange={handleToggleSwitch}
      value={isDarkMode}
    />
  );
};
