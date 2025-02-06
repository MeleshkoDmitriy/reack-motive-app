import { styleVariables } from "@/styles/variables";
import { TIdentityIndicator } from "@/types/IdentityIndicatorTypes";
import { getIdentityIndicatorColor } from "@/utils/getIdentityIndicatorColor";
import { StyleSheet, View } from "react-native";


interface IdentityIndicatorProps {
  info: TIdentityIndicator;
}

export const IdentityIndicator: React.FC<IdentityIndicatorProps> = ({info}) => {
  const infoColor = getIdentityIndicatorColor(info);

  return (
    <View style={[styles.identityIndicator, { backgroundColor: infoColor }]}></View>
  );
};

const styles = StyleSheet.create({
  identityIndicator: {
    height: 10,
    aspectRatio: 1,
    borderRadius: styleVariables.borderRadiuses.rCircle,
  },
});