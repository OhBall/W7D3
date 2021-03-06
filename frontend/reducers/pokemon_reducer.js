import { RECEIVE_ALL_POKEMON, RECEIVE_SINGLE_POKEMON  } from '../actions/pokemon_actions';
import { merge } from 'lodash';


const pokemonReducer = (state = {}, action) => {
  switch (action.type){
  case RECEIVE_ALL_POKEMON:
  // debugger
    return merge({}, state, action.pokemon);
    // return action.pokemon;
  case RECEIVE_SINGLE_POKEMON:
    return merge({}, state, { [action.pokemon.id]: action.pokemon });
  default:
    return state;
  }
};

export default pokemonReducer;
