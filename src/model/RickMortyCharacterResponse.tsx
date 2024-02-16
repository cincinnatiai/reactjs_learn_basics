export interface Character {
  id?: number;
  name: string;
  image: string;
  species: string;
  status: string;
}

export interface CharactersResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
}
