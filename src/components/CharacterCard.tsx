import React from "react";
import { Character } from "../model/RickMortyCharacterResponse";

const CharacterCard: React.FC<Character> = ({
  name,
  image,
  species,
  status,
}) => {
  return (
    <div className="character-card">
      <img className="character-image" src={image} alt={name} />
      <div className="character-profile-details">
        <h2 className="character-name">{name}</h2>
        <p className="character-species">- Species: {species}</p>
        <p className="character-status">
          - Status: {status === "Alive" ? "Alive 🟢" : "Dead  🔴"}
        </p>
      </div>
    </div>
  );
};

export default CharacterCard;
