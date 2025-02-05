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
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";

const DropdownFilters = () => {
  const dispatch = useAppDispatch();
  const selectedSpecies = useAppSelector(selectSpecies);
  const selectedStatus = useAppSelector(selectStatus);

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
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
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
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Select status"
          searchPlaceholder="Search..."
        />
      </View>
      <View style={styles.buttonContainer}>
        <Pressable onPress={handleResetFilters}>
          <Text>Reset</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
  },
  dropdownContainer: {
    flex: 1,
  },
  buttonContainer: {
    padding: 3,
  },
  container: {
    backgroundColor: "white",
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default React.memo(DropdownFilters);
