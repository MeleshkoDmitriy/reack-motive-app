import {
  TCharacterGender,
  TCharacterSpecies,
  TCharacterStatus,
} from "./CharacterTypes";

export type TIdentityIndicator =
  | TCharacterSpecies
  | TCharacterStatus
  | TCharacterGender;
