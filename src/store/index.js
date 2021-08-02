import { combineReducers, applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import pokemonReducer from './reducers/pokemonReducer';

const rootReducer = combineReducers({ pokemonReducer });

const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk));

export default store;
