import React from 'react';
import {
  CardContainer,
  PokemonId,
  PokemonImage,
  PokemonNameBackground,
  PokemonName
} from './styles';

export function PokemonCard({
  pokemonId,
  pokemonImageUrl,
  pokemonName,
  onSelect
}) {
  return (
    <CardContainer onPress={() => onSelect()}>
      <PokemonId>
        {`#${pokemonId}`}
      </PokemonId>
      <PokemonImage
        source={{ uri: pokemonImageUrl }}
      />
      <PokemonNameBackground>
        <PokemonName>
          {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
        </PokemonName>
      </PokemonNameBackground>
    </CardContainer>
  );
}
