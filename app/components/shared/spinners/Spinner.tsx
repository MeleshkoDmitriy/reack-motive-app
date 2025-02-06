import { styleVariables } from "@/styles/variables";
import { FC } from "react";
import { ActivityIndicator } from "react-native";

interface ActivityIndicatorProps {
  size?: "large" | "small";
}

export const Spinner: FC<ActivityIndicatorProps> = ({ size = "large" }) => {
  return (
    <ActivityIndicator size={size} color={styleVariables.colors.primary} />
  );
};
