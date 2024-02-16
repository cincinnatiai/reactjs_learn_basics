import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CharacterList from "../components/CharacterList";
import { fetchCharacters } from "../api/rickandmortyapi/rickandmortyapi";
import { Character } from "../model/RickMortyCharacterResponse";
import loading from "../assets/loading.gif";

const HomePage: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getCharacters = async (): Promise<void> => {
      setIsLoading(true);
      const characters = await fetchCharacters()
        .then((characters: Character[]) => {
          setCharacters(characters);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching characters:", error);
          setIsLoading(false);
        });
    };
    getCharacters();
  }, []);

  return (
    <div className="home-page">
      <Header />
      <main>
        {isLoading ? (
          <img
            style={{ width: "200px", height: "200px" }}
            src={loading}
            alt="Loading..."
          />
        ) : (
          <CharacterList characters={characters} />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
