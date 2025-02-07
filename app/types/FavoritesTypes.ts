import { TCharacter } from "./CharacterTypes";

export type TFavorite = Pick<
  TCharacter,
  "id" | "name" | "image" | "gender" | "status" | "species"
>;
