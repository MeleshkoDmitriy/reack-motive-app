import { TFilterCharacterSpecies, TFilterCharacterStatus } from "@/types/CharacterTypes";

type TDropdownSpeciesVariants = {
  label: string;
  value: TFilterCharacterSpecies;
};

export const dropdownSpeciesVariants: TDropdownSpeciesVariants[] = [
  { label: "All Species", value: "all" },
  { label: "Human", value: "Human" },
  { label: "Humanoid", value: "Humanoid" },
  { label: "Alien", value: "Alien" },
  { label: "Unknown", value: "unknown" },
];

type TDropdownStatusVariants = {
  label: string;
  value: TFilterCharacterStatus;
};

export const dropdownStatusVariants: TDropdownStatusVariants[] = [
  { label: "All Statuses", value: "all" },
  { label: "Alive", value: "Alive" },
  { label: "Dead", value: "Dead" },
  { label: "Unknown", value: "unknown" },
];
