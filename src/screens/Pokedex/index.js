import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getBottomSpace } from "react-native-iphone-x-helper";
import {
  Container,
  HeaderContainer,
  PokeballIcon,
  Title,
  SearchContainer,
  SearchIcon,
  SearchInput,
  PokemonListContainer,
  Loading,
  NotFound
} from './styles';
import { StatusBar } from '../../components/StatusBar/styles';
import { PokemonCard } from '../../components/PokemonCard';
import {
  fetchPokemons,
  fetchPokemonDetails
} from '../../store/actions/pokemonActions';
import accentFold from '../../helpers/accentFold';
import routes from '../../navigation/routes';

export function Pokedex() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {
    pokemons,
    loading_fetch_pokemons,
    loading_fetch_pokemon_details
  } = useSelector(({ pokemonReducer }) => pokemonReducer);
  const [pokemon, setPokemon] = useState('');
  const [offset, setOffset] = useState(0);

  const EmptyList = () => (
    <NotFound>
      {`Sorry, we didn't find any pokemon named "${pokemon}".`}
    </NotFound>
  );

  useEffect(() => {
    dispatch(fetchPokemons(offset));
  }, []);

  const getListData = () => {
    const filterKey = accentFold(pokemon.toLowerCase());
    return pokemons.filter((pokemon) => {
      const filterLabel = accentFold((pokemon?.name).toLowerCase());
      if (filterLabel.includes(filterKey)) {
        return true;
      }
      return false;
    });
  };

  const onEndReached = () => {
    setOffset(offset + 30);
    dispatch(fetchPokemons(offset + 30));
  };

  const onSelect = (
    pokemonId,
    pokemonName,
    pokemonImageUrl
  ) => {
    dispatch(fetchPokemonDetails(pokemonId, () => {
      navigation.navigate(routes.pokemonDetails,
        {
          pokemonId,
          pokemonName,
          pokemonImageUrl
        }
      );
    }));
  };

  return (
    <Container loading={loading_fetch_pokemons || loading_fetch_pokemon_details}>
      <StatusBar
        backgroundColor="transparent"
        translucent
      />
      <HeaderContainer>
        <PokeballIcon />
        <Title>Pokédex</Title>
      </HeaderContainer>
      <SearchContainer>
        <SearchIcon />
        <SearchInput
          placeholder="Search"
          value={pokemon}
          onChangeText={setPokemon}
          autoCapitalize="none"
        />
      </SearchContainer>
      <PokemonListContainer>
        {loading_fetch_pokemon_details && <Loading />}
        {loading_fetch_pokemons && offset === 0
          ? <Loading />
          : <FlatList
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="always"
            keyboardDismissMode="none"
            contentContainerStyle={{ paddingBottom: getBottomSpace() }}
            ListEmptyComponent={() => <EmptyList />}
            refreshing={loading_fetch_pokemons}
            data={getListData()}
            keyExtractor={(item) => `${item.name}`}
            numColumns={3}
            onEndReached={onEndReached}
            onEndReachedThreshold={0.5}
            renderItem={({ item }) => {
              const { url, name } = item;
              const pokemonId = url.split('/pokemon/').pop().slice(0, -1);
              const pokemonImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`
              return (
                <PokemonCard
                  pokemonId={pokemonId}
                  pokemonImageUrl={pokemonImageUrl}
                  pokemonName={name}
                  onSelect={() => onSelect(pokemonId, name, pokemonImageUrl)}
                />
              );
            }}
          />}
      </PokemonListContainer>
    </Container >
  );
}
