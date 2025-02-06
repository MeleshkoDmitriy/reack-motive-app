import { TCharacter } from "./CharacterTypes";
import { TThemeMode } from "./ThemeTypes";

export type TAsyncStorageKeys = "themeMode" | "characters";

export type TAsyncStorageValue<K extends TAsyncStorageKeys> =
  K extends "themeMode" ? TThemeMode :
  K extends "characters" ? TCharacter[] : never;
