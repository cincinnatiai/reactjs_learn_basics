import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { fetchCharacters } from "../api/rickandmortyapi/rickandmortyapi";
import { Character } from "../model/RickMortyCharacterResponse";
import useLoading from "../hooks/useLoading";
import CharacterList from "../components/CharacterList";
import withLoading from "../components/CharacterListWithLoading";

const HomePage: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const { isLoading, startLoading, stopLoading } = useLoading();

  useEffect(() => {
    const getCharacters = async (): Promise<void> => {
      startLoading();
      try {
        const fetchedCharacters = await fetchCharacters();
        setCharacters(fetchedCharacters);
        stopLoading();
      } catch (error) {
        console.error("Error fetching characters:", error);
      } finally {
        stopLoading();
      }
    };
    getCharacters();
  }, []);

  const CharacterListWithData = withLoading(CharacterList);

  return (
    <div className="home-page">
      <Header />
      <main>
        <CharacterListWithData isLoading={isLoading} characters={characters} />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
