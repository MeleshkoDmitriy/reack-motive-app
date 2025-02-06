import {
  dropdownSpeciesVariants,
  dropdownStatusVariants,
} from "@/constants/dropdown";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import {
  resetFilters,
  selectSpecies,
  selectStatus,
  setSpecies,
  setStatus,
} from "@/store/slices/filterSlice";
import { styleVariables } from "@/styles/variables";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { Button } from "./shared/buttons/Button";
import { useAppTheme } from "@/hooks/useAppTheme";

const DropdownFilters = () => {
  const dispatch = useAppDispatch();
  const selectedSpecies = useAppSelector(selectSpecies);
  const selectedStatus = useAppSelector(selectStatus);

  const themeStyles = useAppTheme();

  const handleResetFilters = () => {
    dispatch(resetFilters());
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.dropdownContainer}>
        <Dropdown
          data={dropdownSpeciesVariants}
          value={selectedSpecies}
          onChange={(value) => dispatch(setSpecies(value.value))}
          style={[styles.dropdown, themeStyles.container]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={[themeStyles.text, styles.selectedTextStyle]}
          inputSearchStyle={styles.inputSearchStyle}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Select species"
          searchPlaceholder="Search..."
        />
      </View>
      <View style={styles.dropdownContainer}>
        <Dropdown
          data={dropdownStatusVariants}
          value={selectedStatus}
          onChange={(value) => dispatch(setStatus(value.value))}
          style={[styles.dropdown, themeStyles.container]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={[themeStyles.text, styles.selectedTextStyle]}
          inputSearchStyle={styles.inputSearchStyle}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Select status"
          searchPlaceholder="Search..."
        />
      </View>
      <View>
        <Button onPress={handleResetFilters} textButton={"Reset"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: 80,
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
    padding: styleVariables.gaps.g20,
  },
  dropdownContainer: {
    flex: 1,
    width: "100%",
  },
  container: {
    padding: 16,
  },
  dropdown: {
    height: 40,
    borderColor: styleVariables.colors.bgDark,
    borderWidth: 0.5,
    borderRadius: styleVariables.borderRadiuses.r15,
    paddingHorizontal: styleVariables.gaps.g10,
  },
  label: {
    position: "absolute",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: styleVariables.fonts.f12,
  },
  placeholderStyle: {
    fontSize: styleVariables.fonts.f12,
  },
  selectedTextStyle: {
    fontSize: styleVariables.fonts.f12,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 8,
  },
});

export default React.memo(DropdownFilters);
