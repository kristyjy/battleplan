import * as types from '../constants/actionTypes';
//import objectAssign from 'object-assign';
import initialState from './initialState';

export default function battleScreenReducer(state = initialState.battleScreen, action) {

  switch (action.type) {

    case types.ADD_COMBATANT:
      return {
        ...state,
        combatants: [...state.combatants, action.combatant]
      };

    case types.UPDATE_COMBATANT:
      return {
        ...state,
        combatants: [
          ...state.combatants.filter(combatant => combatant.id !== action.combatant.id),
          action.combatant
        ]
      };

      case types.SORT_COMBATANTS:
        return {
          ...state,
          combatants: [
            ...state.combatants.filter(combatant => combatant.initiative <= state.currentTurn).sort((a, b) => {
              return a.initiative > b.initiative ? -1 : a.initiative < b.initiative ? 1 : 0;
            }),
            ...state.combatants.filter(combatant => combatant.initiative > state.currentTurn).sort((a, b) => {
              return a.initiative > b.initiative ? -1 : a.initiative < b.initiative ? 1 : 0;
            })
          ]
        };

      case types.UPDATE_CURRENT_TURN:
        return {
          ...state,
          currentTurn: action.newTurn
        };

    default:
      return state;
  }
}
