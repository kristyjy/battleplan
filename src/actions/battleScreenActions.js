import * as types from '../constants/actionTypes';

let nextId = 0;

export function addCombatant(combatant) {
  combatant.id = nextId++;
  return {
    type: types.ADD_COMBATANT,
    combatant
  };
}

export function updateCombatant(combatant) {
  return {
    type: types.UPDATE_COMBATANT,
    combatant
  };
}

export function sortCombatants() {
  return {
    type: types.SORT_COMBATANTS
  };
}

export function updateCurrentTurn(newTurn) {
  return {
    type: types.UPDATE_CURRENT_TURN,
    newTurn
  };
}
// example of a thunk using the redux-thunk middleware
/*export function saveFuelSavings(settings) {
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel savings
    return dispatch({
      type: types.SAVE_FUEL_SAVINGS,
      dateModified: getFormattedDateTime(),
      settings
    });
  };
}*/
