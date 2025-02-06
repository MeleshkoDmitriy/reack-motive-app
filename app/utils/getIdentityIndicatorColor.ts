import { styleVariables } from "@/styles/variables";
import { TIdentityIndicator } from "@/types/IdentityIndicatorTypes";

export const getIdentityIndicatorColor = (info: TIdentityIndicator): string => {
  const color = styleVariables.colors.indicator[info];

  return color || styleVariables.colors.indicator.unknown;
};
