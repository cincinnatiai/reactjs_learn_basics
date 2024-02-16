import axios from "axios";
import {
  Character,
  CharactersResponse,
} from "../../model/RickMortyCharacterResponse";

const RICK_MORTY_API_BASE = "https://rickandmortyapi.com/api";

export const fetchCharacters = async (): Promise<Character[]> => {
  try {
    const response = await axios.get<CharactersResponse>(
      `${RICK_MORTY_API_BASE}/character`
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching characters:", error);
  }
  return [];
};
