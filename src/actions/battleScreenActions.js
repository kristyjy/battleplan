import * as types from '../constants/actionTypes';

export function addCombatant(combatant) {
  return {
    type: types.ADD_COMBATANT,
    combatant
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
