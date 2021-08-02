import { pokemonsActionTypes } from '../actions/pokemonActions';

const INITIAL_STATE = {
  loading_fetch_pokemons: false,
  error_fetch_pokemons: '',
  pokemons: [],

  loading_fetch_pokemon_details: false,
  error_fetch_pokemon_details: '',
  pokemonDetails: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case pokemonsActionTypes.FETCH_POKEMONS:
      return {
        ...state,
        loading_fetch_pokemons: true,
        error_fetch_pokemons: ''
      };
    case pokemonsActionTypes.FETCH_POKEMONS_SUCCESS:
      return {
        ...state,
        loading_fetch_pokemons: false,
        error_fetch_pokemons: '',
        pokemons: state.pokemons.concat(action.payload)
      };
    case pokemonsActionTypes.FETCH_POKEMONS_ERROR:
      return {
        ...state,
        loading_fetch_pokemons: false,
        error_fetch_pokemons: action.payload
      };

    case pokemonsActionTypes.FETCH_POKEMON_DETAILS:
      return {
        ...state,
        loading_fetch_pokemon_details: true,
        error_fetch_pokemon_details: ''
      };
    case pokemonsActionTypes.FETCH_POKEMON_DETAILS_SUCCESS:
      return {
        ...state,
        loading_fetch_pokemon_details: false,
        error_fetch_pokemon_details: '',
        pokemonDetails: action.payload
      };
    case pokemonsActionTypes.FETCH_POKEMON_DETAILS_ERROR:
      return {
        ...state,
        loading_fetch_pokemon_details: false,
        error_fetch_pokemon_details: action.payload
      };

    default:
      return state;
  }
};
