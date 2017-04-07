import {ADD_COMBATANT, UPDATE_COMBATANT} from '../constants/actionTypes';
//import objectAssign from 'object-assign';
import initialState from './initialState';

export default function battleScreenReducer(state = initialState.battleScreen, action) {

  switch (action.type) {
    /*case SAVE_FUEL_SAVINGS:
      // For this example, just simulating a save by changing date modified.
      // In a real app using Redux, you might use redux-thunk and handle the async call in fuelSavingsActions.js
      return objectAssign({}, state, {dateModified: action.dateModified});

    case CALCULATE_FUEL_SAVINGS:
      newState = objectAssign({}, state);
      newState[action.fieldName] = action.value;
      newState.necessaryDataIsProvidedToCalculateSavings = calculator().necessaryDataIsProvidedToCalculateSavings(newState);
      newState.dateModified = action.dateModified;

      if (newState.necessaryDataIsProvidedToCalculateSavings) {
        newState.savings = calculator().calculateSavings(newState);
      }

      return newState;*/

    case ADD_COMBATANT:
      return {
        ...state,
        combatants: [...state.combatants, action.combatant]
      };

    case UPDATE_COMBATANT:
      return {
        ...state,
        combatants: [
          ...state.combatants.filter(combatant => combatant.id !== action.combatant.id),
          action.combatant
        ]
      };

    default:
      return state;
  }
}
