import React from "react";
import loading from "../assets/loading.gif";
import { Character } from "../model/RickMortyCharacterResponse";
import noData from "../assets/no-data.jpeg";

interface WithLoadingProps {
  isLoading: boolean;
  characters: Character[];
}

function withLoading<T extends WithLoadingProps>(
  Component: React.ComponentType<T>
) {
  return function WithLoadingComponent({
    isLoading,
    ...props
  }: WithLoadingProps) {
    const { characters } = props;
    if (characters.length === 0) {
      return (
        <img
          style={{ width: "200px", height: "200px" }}
          src={noData}
          alt="No data available!"
        />
      );
    }

    return (props: T) => {
      if (isLoading) {
        return (
          <img
            style={{ width: "200px", height: "200px" }}
            src={loading}
            alt="Loading..."
          />
        );
      }
      return <Component {...props} />;
    };
  };
}

export default withLoading;
