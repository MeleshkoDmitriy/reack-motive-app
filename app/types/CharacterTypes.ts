export type TCharacterSpecies = "Human" | "Humanoid" | "Alien" | "unknown";
export type TFilterCharacterSpecies = TCharacterSpecies | "all";
export type TCharacterStatus = "Alive" | "Dead" | "unknown";
export type TFilterCharacterStatus = TCharacterStatus | "all";
export type TCharacterGender = "Male" | "Female" | "Genderless" | "unknown";

interface Location {
  name: string;
  url: string;
}

export type TCharacter = {
  id: number;
  name: string;
  status: TCharacterStatus;
  species: TCharacterSpecies;
  type: string;
  gender: TCharacterGender;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type TCharacterResponse = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: TCharacter[];
};

export type TCharacterRequest = {
  page: number;
  species: TFilterCharacterSpecies;
  status: TFilterCharacterStatus;
};
