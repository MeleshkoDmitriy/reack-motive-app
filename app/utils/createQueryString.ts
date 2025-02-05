import { TFilterCharacterSpecies, TFilterCharacterStatus } from "@/types/CharacterTypes";
import qs from "qs";

export const createQueryString = (
  page: number,
  species: TFilterCharacterSpecies,
  status: TFilterCharacterStatus
) => {
  const query = {
    page,
    species: species !== "all" ? species.toLowerCase() : undefined,
    status: status !== "all" ? status.toLowerCase() : undefined,
  };

  return qs.stringify(query, { skipNulls: true });
};
