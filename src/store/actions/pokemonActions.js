import api from '../../services/api';

export const pokemonsActionTypes = {
  FETCH_POKEMONS: 'FETCH_POKEMONS',
  FETCH_POKEMONS_SUCCESS: 'FETCH_POKEMONS_SUCCESS',
  FETCH_POKEMONS_ERROR: 'FETCH_POKEMONS_ERROR',

  FETCH_POKEMON_DETAILS: 'FETCH_POKEMON_DETAILS',
  FETCH_POKEMON_DETAILS_SUCCESS: 'FETCH_POKEMON_DETAILS_SUCCESS',
  FETCH_POKEMON_DETAILS_ERROR: 'FETCH_POKEMON_DETAILS_ERROR',
};

export const fetchPokemons = (offset) => async (dispatch) => {
  dispatch({
    type: pokemonsActionTypes.FETCH_POKEMONS
  });
  const searchQuery = `?limit=30&offset=${offset}`;
  try {
    let { data } = await api.get(`/pokemon${searchQuery}`);
    dispatch({
      type: pokemonsActionTypes.FETCH_POKEMONS_SUCCESS,
      payload: data.results
    });
  } catch (e) {
    dispatch({ type: pokemonsActionTypes.FETCH_POKEMONS_ERROR, payload: e });
  }
};

export const fetchPokemonDetails = (pokemonId, onSuccess) => async (dispatch) => {
  dispatch({
    type: pokemonsActionTypes.FETCH_POKEMON_DETAILS
  });
  try {
    let { data } = await api.get(`/pokemon/${pokemonId}`);
    dispatch({
      type: pokemonsActionTypes.FETCH_POKEMON_DETAILS_SUCCESS,
      payload: data
    });
    onSuccess?.();
  } catch (e) {
    dispatch({ type: pokemonsActionTypes.FETCH_POKEMON_DETAILS_ERROR, payload: e });
  }
};