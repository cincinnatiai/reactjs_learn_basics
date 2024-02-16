import React from "react";
import CharacterCard from "./CharacterCard";
import { Character } from "../model/RickMortyCharacterResponse";

interface CharacterListProps {
  characters: Character[];
}

const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {
  return (
    <div>
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          name={character.name}
          image={character.image}
          species={character.species}
          status={character.status}
        />
      ))}
    </div>
  );
};

export default CharacterList;
