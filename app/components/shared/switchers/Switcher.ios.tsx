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
        false: styleVariables.colors.secondaryLight,
        true: styleVariables.colors.bgLight,
      }}
      thumbColor={
        isDarkMode ? styleVariables.colors.primary: styleVariables.colors.white 
      }
      ios_backgroundColor={styleVariables.colors.secondaryDark}
      onValueChange={handleToggleSwitch}
      value={isDarkMode}
    />
  );
};
